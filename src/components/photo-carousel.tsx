import { useCallback, useEffect, useRef, useState } from "react";

const images = Object.entries(import.meta.glob<string>("../assets/carousel/*.jpg", { eager: true, import: "default" }))
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src);

const intervalMs = 4000;
const transitionMs = 700;
// Slides cloned onto the end of the track, so the loop can wrap around seamlessly.
// Must be >= the largest number of slides visible at once (see --n below).
const cloneCount = 4;
const slides = [...images, ...images.slice(0, cloneCount)];

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const ArrowButton = ({ direction, onClick }: { direction: "prev" | "next"; onClick: () => void }) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={direction === "prev" ? "Előző kép" : "Következő kép"}
    className={`absolute top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-xl text-tdk-brown shadow-md transition hover:bg-white hover:text-tdk-accent ${
      direction === "prev" ? "left-3 md:left-5" : "right-3 md:right-5"
    }`}
  >
    {direction === "prev" ? "←" : "→"}
  </button>
);

/** Auto-advancing, infinitely looping photo strip. Full-bleed; shows ~1–2.6 photos depending on screen width. */
const PhotoCarousel = () => {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);
  const busy = useRef(false);

  const next = useCallback(() => {
    if (busy.current) return;
    busy.current = true;
    setAnimate(true);
    setIndex((i) => i + 1);
  }, []);

  const prev = useCallback(() => {
    if (busy.current) return;
    busy.current = true;
    if (index === 0) {
      // jump (without animation) to the identical clone at the end, then animate back one step
      setAnimate(false);
      setIndex(images.length);
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          setAnimate(true);
          setIndex(images.length - 1);
        })
      );
    } else {
      setAnimate(true);
      setIndex((i) => i - 1);
    }
  }, [index]);

  const onTransitionEnd = () => {
    busy.current = false;
    if (index >= images.length) {
      // reached the clones: snap back to the identical real slide at the start
      setAnimate(false);
      setIndex(index - images.length);
    }
  };

  // autoplay
  useEffect(() => {
    if (paused || prefersReducedMotion()) return;
    const timer = setInterval(next, intervalMs);
    return () => clearInterval(timer);
  }, [paused, next]);

  // pause while the tab is hidden (transitions don't run there, so the loop could get out of sync)
  useEffect(() => {
    const onVisibility = () => {
      setPaused(document.hidden);
      busy.current = false;
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Képek a 33. TDK-ról"
      className="relative overflow-hidden py-12 md:py-16"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="relative pl-5 [--gap:0.75rem] [--n:1.15] sm:pl-8 md:[--gap:1rem] md:[--n:1.6] lg:pl-12 lg:[--n:2.2] 2xl:[--n:2.6]">
        <div
          className="flex gap-[var(--gap)]"
          style={{
            transform: `translateX(calc(${index} * -1 * (100% + var(--gap)) / var(--n)))`,
            transition: animate ? `transform ${transitionMs}ms ease-in-out` : "none",
          }}
          onTransitionEnd={onTransitionEnd}
        >
          {slides.map((src, i) => (
            <div
              key={i}
              style={{ flex: "0 0 calc((100% - (var(--n) - 1) * var(--gap)) / var(--n))" }}
              aria-hidden={i >= images.length}
            >
              <img
                src={src}
                alt={`Pillanatkép a 33. TDK-ról (${(i % images.length) + 1}/${images.length})`}
                loading={i < cloneCount ? "eager" : "lazy"}
                draggable={false}
                className="aspect-[3/2] w-full rounded-lg object-cover shadow-md"
              />
            </div>
          ))}
        </div>
        <ArrowButton direction="prev" onClick={prev} />
        <ArrowButton direction="next" onClick={next} />
      </div>
    </section>
  );
};

export default PhotoCarousel;

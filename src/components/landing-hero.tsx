import type { ReactNode } from "react";

import background from "../assets/hero/background.jpg";
import brainBottom from "../assets/hero/brain-bottom.png";
import brainSide from "../assets/hero/brain-side.png";
import brainTop from "../assets/hero/brain-top.png";
import neuron1 from "../assets/hero/neuron1.png";
import neuron2 from "../assets/hero/neuron2.png";
import neuron3 from "../assets/hero/neuron3.png";
import neuron4 from "../assets/hero/neuron4.png";
import splash1 from "../assets/hero/splash1.png";
import splash2 from "../assets/hero/splash2.png";

const fields = ["Általános orvostudomány", "Fogorvostudomány", "Gyógyszerészet"];

/** Decorative image: hidden from assistive tech and pointer events. */
const Decor = ({ src, className }: { src: string; className: string }) => (
  <img src={src} alt="" aria-hidden className={`pointer-events-none absolute select-none ${className}`} />
);

/**
 * Landing page hero, following the 34. TDK poster.
 * Below `lg` it uses the portrait poster layout (text left, three brains stacked on the right);
 * from `lg` up it switches to the wide banner layout (text left, side-view brain right).
 */
const LandingHero = ({ children }: { children?: ReactNode }) => (
  <section
    aria-label="34. Tudományos Diákköri Konferencia"
    className="relative isolate -mt-20 overflow-hidden bg-[#efe7d8] bg-cover bg-center pt-20 font-condensed text-tdk-brown"
    style={{ backgroundImage: `url(${background})` }}
  >
    {/* paint splashes */}
    <Decor src={splash1} className="-left-8 -top-10 w-28 opacity-80 sm:w-36 lg:-left-10 lg:w-40" />
    <Decor src={splash2} className="-bottom-14 -right-12 w-32 opacity-80 sm:w-40 lg:w-48" />

    {/* neurons */}
    <Decor src={neuron1} className="-top-[10%] left-[3%] h-[65%] opacity-25 lg:opacity-40" />
    <Decor src={neuron4} className="-top-[6%] left-[6%] hidden h-[40%] opacity-60 2xl:block" />
    <Decor src={neuron2} className="-bottom-[30%] left-[40%] h-[70%] opacity-30 lg:left-[44%]" />
    <Decor src={neuron3} className="-bottom-[12%] left-[6%] h-[35%] opacity-50 lg:hidden" />
    <Decor src={neuron3} className="-top-[12%] right-[17%] hidden h-[50%] opacity-40 lg:block" />
    <Decor src={neuron4} className="-bottom-[8%] right-[22%] hidden h-[42%] opacity-50 lg:block" />

    {/* desktop: large, faded brains cropped at the edges */}
    <Decor
      src={brainBottom}
      className="-bottom-[38%] -left-[9%] hidden w-[19%] max-w-[420px] rotate-[65deg] opacity-60 lg:block xl:-bottom-[32%] xl:w-[21%]"
    />
    <Decor src={brainTop} className="-right-[6%] -top-[12%] hidden w-[17%] max-w-[340px] opacity-60 lg:block" />

    {/* mobile / tablet: brains stacked on the right, like the portrait poster */}
    <div
      aria-hidden
      className="pointer-events-none absolute inset-y-0 right-0 flex w-[42%] translate-x-[6%] flex-col items-center justify-evenly py-6 sm:w-[38%] lg:hidden"
    >
      <img src={brainTop} alt="" className="h-[29%] w-auto object-contain" />
      <img src={brainSide} alt="" className="h-[24%] w-auto -scale-x-100 object-contain" />
      <img src={brainBottom} alt="" className="h-[29%] w-auto object-contain" />
    </div>

    <div className="relative mx-auto flex max-w-7xl items-center px-5 py-10 sm:px-10 sm:py-16 lg:min-h-[clamp(520px,38vw,760px)] lg:gap-10 lg:px-16 xl:px-24 2xl:max-w-[1600px]">
      <div className="w-[58%] sm:w-[60%] lg:w-auto lg:flex-none">
        <h1 className="flex flex-col uppercase lg:flex-row lg:items-end lg:gap-5">
          <span className="text-[min(44vw,17rem)] font-medium leading-[0.8] tracking-tight text-transparent [-webkit-text-stroke:2px_#f16d2d] sm:[-webkit-text-stroke:3px_#f16d2d] lg:text-[clamp(11rem,17vw,19rem)]">
            34.
          </span>
          <span className="mt-[3vw] block text-[min(11.5vw,5rem)] font-bold leading-[0.95] sm:mt-6 lg:mt-0 lg:pb-[0.08em] lg:text-[clamp(2.75rem,4.6vw,5rem)]">
            Tudományos <span className="block text-tdk-accent">Diákköri</span> Konferencia
          </span>
        </h1>

        <p className="mt-[8vw] text-[min(6.6vw,2.5rem)] uppercase leading-tight sm:mt-12 lg:mt-10 lg:text-[clamp(1.5rem,2.2vw,2.5rem)]">
          <span className="block font-bold lg:inline">2027. április 26-29.</span>
          <span className="hidden px-3 lg:inline" aria-hidden>
            •
          </span>
          <span className="block font-medium lg:inline">Marosvásárhely</span>
        </p>

        <ul className="mt-[3vw] text-[min(4.2vw,1.5rem)] font-semibold uppercase leading-snug text-tdk-accent sm:mt-4 lg:mt-3 lg:flex lg:flex-wrap lg:text-[clamp(1rem,1.3vw,1.4rem)]">
          {fields.map((field, i) => (
            <li key={field} className="lg:flex lg:items-center">
              {i > 0 && (
                <span className="hidden px-2 lg:inline" aria-hidden>
                  •
                </span>
              )}
              {field}
            </li>
          ))}
        </ul>

        {children && <div className="relative z-10 mt-[7vw] sm:mt-10">{children}</div>}
      </div>

      <div className="hidden lg:flex lg:max-w-[46%] lg:flex-1 lg:justify-center">
        <img src={brainSide} alt="" aria-hidden className="w-full max-w-[680px] -scale-x-100 object-contain" />
      </div>
    </div>
  </section>
);

export default LandingHero;

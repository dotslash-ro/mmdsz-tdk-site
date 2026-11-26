/**
 * Simplified line drawing of the Kultúrpalota (Palace of Culture) in Marosvásárhely, the conference venue.
 * Purely decorative: strokes use `currentColor`, so set the color/opacity from the outside.
 * The facade is (roughly) symmetric around x = 808, so most features are drawn once and mirrored.
 */

const W = 1600;
const H = 800;
const AXIS = 1616;

/** x of the mirrored counterpart of a feature starting at `x` with width `w` */
const mx = (x: number, w = 0) => AXIS - x - w;

const rect = (x: number, y: number, w: number, h: number) => `M${x},${y}h${w}v${h}h${-w}Z`;
const arch = (x: number, y: number, w: number, h: number) =>
  `M${x},${y + h}V${y + w / 2}A${w / 2},${w / 2} 0 0 1 ${x + w},${y + w / 2}V${y + h}Z`;
const pinnacle = (x: number, top: number, base: number) =>
  `M${x - 7},${base}V${top + 16}L${x},${top}L${x + 7},${top + 16}V${base}`;
const dome = (x: number, w: number, base: number, top: number) =>
  `M${x},${base}C${x},${base - (base - top) * 0.6} ${x + w * 0.25},${top} ${x + w / 2},${top}` +
  `C${x + w * 0.75},${top} ${x + w},${base - (base - top) * 0.6} ${x + w},${base}`;
const range = (n: number) => Array.from({ length: n }, (_, i) => i);

/** both a feature and its mirror image */
const sym = (f: (x: number) => string, x: number, w = 0) => [f(x), f(mx(x, w))];

const paths: string[] = [
  // --- roof ---
  "M0,205L95,52L210,265", // left tower roof
  `M${W},205L1521,52L1406,265`, // right tower roof
  "M114,88H1502", // ridge
  "M0,265H1600", // eaves
  "M95,52V12M89,32L95,20L101,32L95,44Z", // finials
  "M1521,52V12M1515,32L1521,20L1527,32L1521,44Z",

  // --- attic floor: arched window rows, corner windows, central mosaic ---
  ...range(12).flatMap((i) => sym((x) => arch(x, 305, 14, 52), 213 + i * 24, 14)),
  ...[543, 568, 593].flatMap((x) => sym((x) => arch(x, 305, 14, 52), x, 14)),
  ...sym((x) => rect(x, 322, 44, 62) + `M${x + 22},322v62`, 76, 44),
  ...sym((x) => `M${x},265V390`, 205),
  rect(633, 240, 350, 170), // mosaic frame
  rect(652, 274, 313, 104), // mosaic
  ...sym((x) => pinnacle(x, 196, 410), 626),
  ...sym((x) => pinnacle(x, 226, 390), 520),
  // battlements on the parapet next to the mosaic
  ...sym(
    (x0) =>
      range(5)
        .map((i) => `M${x0 + i * 20},270v-8h10v8`)
        .join(""),
    528,
    90
  ),
  "M0,390H1600",

  // --- second floor ---
  ...range(5).flatMap((i) => sym((x) => rect(x, 460, 26, 54), 250 + i * 50, 26)),
  rect(696, 452, 224, 96),
  ...range(9).map((i) => rect(705 + i * 24, 460, 16, 48)),
  ...sym((x) => rect(x, 460, 84, 88) + `M${x + 28},460v88M${x + 56},460v88`, 0, 84),
  // oriel balconies
  ...sym((x) => `M${x},520h60v26l-14,26h-32l-14,-26Z` + arch(x + 3, 470, 54, 50) + arch(x + 18, 482, 24, 38), 155, 60),

  // --- ground floor: arcaded red bands ---
  ...sym((x) => `M${x},800V600q0,-18 18,-18h249q18,0 18,18V800`, 220, 285),
  `M0,582h160q18,0 18,18V800`,
  `M${W},582h-160q-18,0 -18,18V800`,
  ...range(11).flatMap((i) => sym((x) => arch(x, 598, 13, 60), 238 + i * 24, 13)),
  ...range(6).flatMap((i) => sym((x) => arch(x, 598, 13, 60), 12 + i * 24, 13)),
  "M0,672H512M1104,672H1600",
  ...sym((x) => rect(x, 712, 92, 88), 232, 92),
  ...sym((x) => rect(x, 712, 92, 88), 404, 92),

  // --- central entrance: domed bay windows ---
  ...sym((x) => dome(x, 125, 592, 497), 512, 125),
  ...[640, 725, 810, 895].map((x) => dome(x, 84, 592, 545)),
  "M512,592H1104M512,600H1104",
  ...sym((x) => `M${x},592V800`, 512),
  ...sym((x) => `M${x},592V800`, 637),
  ...sym((x) => rect(x, 608, 109, 64) + `M${x + 36},608v64M${x + 73},608v64`, 520, 109),
  ...[640, 725, 810, 895].map((x) => rect(x + 8, 608, 68, 64) + `M${x + 31},608v64M${x + 53},608v64`),
  ...[520, 640, 725, 810, 895, 979].map((x, i) => rect(x + 4, 684, i === 0 || i === 5 ? 109 : 76, 46)),
  "M512,742H1104",
  ...range(5).map((i) => rect(530 + i * 113, 754, 95, 46)),
];

const KulturpalotaOutline = ({ className }: { className?: string }) => (
  <svg viewBox={`0 0 ${W} ${H}`} fill="none" aria-hidden className={className} preserveAspectRatio="xMidYMax meet">
    <g stroke="currentColor" strokeWidth={1.5} strokeLinejoin="round" strokeLinecap="round">
      {paths.map((d, i) => (
        <path key={i} d={d} vectorEffect="non-scaling-stroke" />
      ))}
      {/* hint of the patterned tile roof */}
      <path d="M148,150H1468M180,210H1436" strokeDasharray="2 16" vectorEffect="non-scaling-stroke" />
      <path d="M0,398H1600" strokeDasharray="3 7" vectorEffect="non-scaling-stroke" />
    </g>
    <g fill="currentColor" textAnchor="middle" fontFamily="Barlow Condensed, sans-serif" letterSpacing="6">
      {/* <text x={808} y={424} fontSize={20}>
        PALATUL CULTURII
      </text> */}
      <text x={808} y={448} fontSize={20}>
        KULTÚRPALOTA
      </text>
    </g>
  </svg>
);

export default KulturpalotaOutline;

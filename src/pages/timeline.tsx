import { useEffect, useState } from "react";
import { withLayout } from "../layout/withLayout";

const Timeline = () => {
  const [current, setCurrent] = useState(6);

  useEffect(() => {
    document.querySelector(`#slide-${current > 6 ? 1 : current}`)?.scrollIntoView({ behavior: "smooth" });
  }, [current]);

  return (
    <div className="flex h-screen justify-center py-20 px-8">
      {/* <button onClick={() => setCurrent(current + 1 > 6 ? 1 : current + 1)}>
        <svg
          clip-rule="evenodd"
          fill-rule="evenodd"
          stroke-linejoin="round"
          stroke-miterlimit="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="fixed bottom-10 right-10 z-10 h-14 w-14 fill-tdk-accent drop-shadow-md md:left-1/2"
        >
          <path
            d="m2.005 12.002c0-5.517 4.48-9.997 9.997-9.997 5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998zm6.21 1.524s1.505 1.501 3.259 3.254c.147.147.338.22.53.22s.384-.073.531-.22c1.753-1.752 3.258-3.254 3.258-3.254.145-.145.217-.335.216-.526 0-.192-.074-.384-.22-.53-.293-.293-.766-.295-1.057-.004l-1.978 1.977v-6.693c0-.414-.336-.75-.75-.75s-.75.336-.75.75v6.693l-1.978-1.978c-.289-.289-.762-.287-1.055.006-.146.147-.22.339-.221.53s.071.38.215.525z"
            fill-rule="nonzero"
          />
        </svg>
      </button> */}
      <ol className="relative space-y-32 border-l border-gray-300 lg:w-1/2">
        <li className="mb-10 ml-10 scroll-mt-10 md:scroll-mt-32" id="slide-1">
          <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border-2 border-white bg-gray-500"></div>
          <h3 className="pb-4 text-2xl font-semibold text-gray-900">A 30. TDK véget ért.</h3>
          <time className="mb-10 font-light leading-none text-gray-500">2023. május 10-13.</time>
          <div className="flex items-center pt-10 font-light text-gray-500">Találkozzunk jövőre, a 31.-ik TDK-n!</div>
        </li>
      </ol>
    </div>
  );
};

export default withLayout(Timeline);

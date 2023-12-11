// import { Link } from "react-router-dom";
import { withLayout } from "../layout/withLayout";
// import { useRef } from "react";
import { organizerGroups } from "../constants";

const Organizers = () => {
  // const signupButtonRef = useRef<HTMLAnchorElement>(null);
  return (
    <div className="px-5 py-20 md:mx-auto md:w-1/2 md:px-0">
      <h1 className="pb-20 text-center text-5xl font-bold">Szervezőknek</h1>
      {/* <p className="pb-10 text-sm font-semibold text-neutral-500">
        A 31. Marosvásárhelyi Tudományos Diákköri Konferenciára való szervezői jelentekezés 2023. december 7.-én
        kezdődik és 2023. december 11.-én, 23:59-kor ér véget.{" "}
        <a
          className="cursor-pointer text-tdk-accent hover:underline"
          onClick={() => {
            signupButtonRef.current?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Tovább a jelentkezéshez →
        </a>
      </p> */}
      <h2 className="text-3xl font-light">Szervezői csoportok</h2>
      <div className="grid grid-cols-1 gap-y-4 gap-x-10 xl:grid-cols-2">
        {organizerGroups.map(({ name, description }, index) => (
          <div key={index}>
            <h2 className="pt-8 text-xl font-light">{name}</h2>
            <p className="pt-4 font-light text-neutral-700">{description}</p>
          </div>
        ))}

        <div>
          <h2 className="pt-8 text-xl font-light">Minden szervezőre vonatkozóan</h2>
          <p className="pt-4 font-light text-neutral-700">
            A kiscsoportok leírása csupán egy útmutató, nem tér ki minden részletre. A rendezvény szervezésének
            gördülékenysége érdekében szükség van mindenki kreativitására, önzetlen odaadására és az esetlegesen más
            csoportok kisegítésére. A szervezéssel együtt jár, hogy a rendezvény ideje alatt az összes szervező korán
            kel, elegánsan öltözködik és annyit van a helyszínen, amennyit egy sikeres Tudományos Diákköri Konferencia
            megkövetel.
          </p>
        </div>
      </div>
      {/* <div className="flex justify-center py-16" id="jelentkezes">
        <Link
          to="/szervezoi-jelentkezes"
          className="rounded-full bg-tdk-accent px-10 py-4 font-semibold uppercase text-white drop-shadow-md hover:underline xl:text-xl"
          ref={signupButtonRef}
        >
          Jelentkezz szervezőnek →
        </Link>
      </div> */}
    </div>
  );
};

export default withLayout(Organizers);

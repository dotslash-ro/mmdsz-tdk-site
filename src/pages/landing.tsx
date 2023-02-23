import Schedule from "../components/schedule";
import Sponsors from "../components/sponsors";
import { withLayout } from "../layout/withLayout";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <div className="flex justify-center bg-banner bg-cover bg-local bg-center">
        <div className="flex flex-grow flex-col items-center bg-gradient-to-t from-transparent to-tdk-primary pt-20 bg-blend-lighten">
          <div className="">
            <h2 className="font-hero text-6xl uppercase  tracking-tighter text-white md:text-5xl lg:text-8xl">
              <div>
                {" "}
                <span className="text-tdk-accent">30.</span> Tudományos
              </div>{" "}
              <div className="text-tdk-accent">Diákköri</div> Konferencia
            </h2>
          </div>
          <div className="py-8 text-center font-medium uppercase text-white md:text-lg lg:text-2xl">
            <span className="font-bold">Marosvásárhely 2023.</span> Május 10-13
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-8 bg-white py-40">
        <p className="mx-auto w-2/3 text-xl font-light">
          <a
            href="https://mmdsz.ro"
            className="text-indigo-400 hover:underline"
          >
            A Marosvásárhelyi Magyar Diákszövetség
          </a>{" "}
          1993 óta megrendezi a Tudományos Diákköri Konferenciát. A rendezvény
          célja, hogy lehetőséget biztosítson a diákok számára a tudományos
          ismeretek átadására és cseréjére, valamint lehetőséget nyújtson a
          kutatásaik eredményeinek összehasonlítására.
        </p>
        <p className="mx-auto w-2/3 text-xl font-light">
          A konferencia az egyedüli olyan rendezvény az erdélyi orvosképzésben,
          ahol a hallgatók anyanyelvükön, magyarul mutathatják be tudományos
          munkáikat, és mérhetik össze kutatásaik eredményeit az orvosi,
          fogorvosi és a gyógyszerészeti szakterületeken belül.
        </p>

        <div className="flex flex-col gap-10 px-20 md:flex-row">
          <Link
            to="szabalyzat"
            className="rounded-full bg-neutral-200 px-10 py-4 font-semibold uppercase text-black drop-shadow-md hover:underline xl:text-xl"
          >
            Tudj meg többet
          </Link>
          <Link
            to="/jelentkezes"
            className="rounded-full bg-tdk-accent px-10 py-4 font-semibold uppercase text-white drop-shadow-md hover:underline xl:text-xl"
          >
            Jelentkezés →
          </Link>
        </div>
      </div>
      <Schedule />
      <Sponsors />
    </>
  );
};

export default withLayout(Landing);

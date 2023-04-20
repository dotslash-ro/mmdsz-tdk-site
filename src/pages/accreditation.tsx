import { withLayout } from "../layout/withLayout";

const Accreditation = () => {
  return (
    <div className="mx-auto py-20 px-5 lg:w-1/2">
      <h2 className="pb-10 text-center text-5xl font-bold">Akkreditáció</h2>
      <p className="py-2 text-gray-800">
        A Tudományos Diákköri Konferencia idén is akkreditált a{" "}
        <span className="italic">Romániai Orvosi Kamara</span> és{" "}
        <span className="italic">Romániai Gyógyszerész Kollégium</span> által.
      </p>{" "}
      <p className="py-2 text-gray-800">
        Orvosi szférában 24 EMC, gyógyszerészeti szférában 24 EFC pont érhető el
        a konferencián való részvétellel, mely 2023 május 10-13. között zajlik a
        marosvásárhelyi Kultúrpalotában és a MOGYTTE gyógyszerészeti épületében.
      </p>{" "}
      <p className="py-2 text-gray-800">
        A konferencián való részvétel ingyenes, előzetes regisztráció csak EMC
        és EFC pontok igénylésének esetében szükséges, de javasoljuk a helyszíni
        regisztrációt, melyre lehetőség nyílik a konferencia teljes ideje alatt!
      </p>{" "}
      <p className="py-2 text-gray-800">
        Az akkreditációs díj, helyszíni és online regisztráció során:
        <ul className="ml-6 mt-4 list-disc italic text-gray-700">
          <li>főorvosok és szakorvosok számára: 350 RON (24 EMC)</li>{" "}
          <li>rezidens orvosok számára: 250 RON (24 EMC)</li>{" "}
          <li>
            gyógyszerészek és gyógyszerész rezidensek számára: 150 RON (24 EFC)
          </li>
        </ul>
      </p>{" "}
      <p className="py-2 text-gray-800">
        A díj magában foglalja az akkreditációs diplomát és egy jelképes
        ajándékcsomagot, amely a konferencia helyszínén az Akkreditációs pultnál
        vehető át.
      </p>{" "}
      <p className="py-2 text-gray-800">
        Előzetes on-line regisztrációra is lehetőséget biztosítunk az alábbi
        űrlap kitöltésével de ajánljuk és javasoljuk a helyszíni regisztrációt!
        <div className="flex justify-center">
          <a
            href="https://docs.google.com/forms/d/1be46zzgBwn1MbtwLXGRZd5agsAMt3Yvg-hApgj8Rhqs/"
            target="_blank"
            className="mt-8 flex w-fit items-center justify-center rounded-full bg-tdk-accent px-5 py-3 text-sm font-bold uppercase text-white drop-shadow-lg hover:underline lg:text-base lg:font-bold"
          >
            {" "}
            Online regisztráció
          </a>
        </div>
      </p>
    </div>
  );
};

export default withLayout(Accreditation);

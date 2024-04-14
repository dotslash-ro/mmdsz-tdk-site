import { withLayout } from "../layout/withLayout";

const Accreditation = () => {
  return (
    <div className="mx-auto py-20 px-5 lg:w-1/2">
      <h2 className="pb-10 text-center text-5xl font-bold">Akkreditáció</h2>
      <p className="py-2 text-gray-800">
        A Tudományos Diákköri Konferencia 31. kiadása akkreditált <span className="italic">Romániai Orvosi Kamara</span>{" "}
        és <span className="italic">Romániai Gyógyszerész Kollégium</span> által.
      </p>{" "}
      <p className="py-2 text-gray-800">
        A konferencián való részvétellel az orvosi szférában 24 EMC, gyógyszerészeti szférában 24 EFC pont szerezhető,
        melynek időpontja április 24-27., helyszíne pedig a marosvásárhelyi Kultúrpalota.
      </p>{" "}
      <p className="py-2 text-gray-800">
        A TDK-n való részvétel ingyenes, előzetes regisztráció csak az EMC és EFC pontok igényléséhez indokolt.
      </p>{" "}
      {/* <p className="py-2 text-gray-800">
        Regisztrációs díjak (helyszínen készpénzes kifizetés (számla igényelhető), előzetes regisztráció esetén banki
        átutalás):
        <h4 className="pt-6 text-lg font-semibold text-neutral-600">
          Előzetes regisztráció (online) - banki átutalás:
        </h4>
        <ul className="ml-6 mt-1 list-disc italic text-gray-700">
          <li>főorvosok és szakorvosok számára: 250 RON</li> <li>rezidens orvosok számára: 200 RON</li>{" "}
          <li>gyógyszerészek és gyógyszerész rezidensek számára: 150 RON</li>
        </ul>
        <h4 className="pt-6 text-lg font-semibold text-neutral-600">Helyszíni regisztráció - készpénzes kifizetés:</h4>
        <ul className="ml-6 mt-1 list-disc italic text-gray-700">
          <li>főorvosok és szakorvosok számára: 300 RON</li> <li>rezidens orvosok számára: 250 RON</li>{" "}
          <li>gyógyszerészek és gyógyszerész rezidensek számára: 150 RON</li>
        </ul>
      </p>{" "}
      <p className="py-4 text-gray-800">
        A díj magában foglalja az akkreditációs diplomát és egy jelképes ajándékcsomagot, amely a konferencia helyszínén
        az Akkreditációs pultnál vehető át.
      </p>{" "} */}
      <p className="py-2 text-gray-800">
        Az előzetes jelentkezés az alábbi űrlap kitöltésével válik érvényessé, de a konferencia kezdetétől a helyszínen
        (akkreditáció információs munkapont) is lesz lehetőség a regisztrációra.!
        <div className="flex justify-center">
          <a
            href="https://forms.gle/6822skMbcVDnx9Zw8"
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

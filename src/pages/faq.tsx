import { Helmet } from "react-helmet";
import { withLayout } from "../layout/withLayout";

const FAQ = () => {
  return (
    <div className="py-20 px-5">
      <Helmet>
        <title>31. TDK - TDKérdezz</title>
      </Helmet>
      <h1 className="pb-20 text-center text-5xl font-bold">TDKérdezz</h1>
      <div className="mx-auto lg:w-1/2">
        <h2 className="pt-6 pb-4 text-xl font-bold">Kérdések a tudományos dolgozat megírását megelőző folyamatról: </h2>
        <h3 className="pt-6 pb-4 text-lg font-medium">1. Hogyan válasszuk ki a számunkra megfelelő témát?</h3>{" "}
        <p className="py-2 text-gray-800">
          Elsősorban kerülni kell minden olyan megoldást, ami plágium. Inspirációt adhatnak az Erasmus ösztöndíjak és
          kutatócsoportokban való részvétel. Ha már körvonalazódott a terület, amiben szeretnénk kutatni, érdemes
          elmerülni a témában és kitartani mellette.
        </p>{" "}
        <p className="py-2 text-gray-800">Ha TDK-ra vállalkozunk, kíváncsiságból és szívből tegyük.</p>{" "}
        <h3 className="pt-6 pb-4 text-lg font-medium">2. Hogyan válasszuk ki a témavezetőt?</h3>{" "}
        <p className="py-2 text-gray-800">
          Témavezetőt találni nehéz. Szükséges egy mester-tanítvány kapcsolat kialakítása, a megfelelő kommunikáció,
          bizalom, türelem. A legeredményesebb megoldás másoktól érdeklődni, akiknek már van tapasztalatuk. Nem
          kötelező, hogy szaktanár legyen, viszont elvárás, hogy legyen meg a doktorátusa. Ajánlott akár több
          témavezetővel is dolgozni (külföld-belföld).
        </p>
        <h3 className="pt-6 pb-4 text-lg font-medium">3. Hogyan vehetjük fel a kapcsolatot a témavezetővel?</h3>
        <p className="py-2 text-gray-800">
          Ha előadótanárt választunk témavezetőnek, akár órák végén is lehet tőle érdeklődni. Ha más mellett döntünk,
          érdemes szintén más személyektől érdeklődni, elérhetőséget kérni.
        </p>{" "}
        <h3 className="pt-6 pb-4 text-lg font-medium">
          4. A témavezető biztosítja a kutatás témáját, vagy a diák egy már megválasztott kutatási témával fordul a
          témavezetőhöz?
        </h3>{" "}
        <p className="py-2 text-gray-800">
          Ritka, mikor egy diák saját témával készül. Általában a témavezető, vagy a kutatócsoport biztosítja az alapot
          vagy az inspirációt.
        </p>
        <h3 className="pt-6 pb-4 text-lg font-medium">
          5. A dolgozat témája kapcsolatban kell legyen a diák egyetemi hallgató körével, egyetemi szakjával?
        </h3>{" "}
        <p className="py-2 text-gray-800">
          Nem kötelező, hiszen vannak a diákok, akik úgy érzik egy, a szakjuktól független témában érdekeltek és abban
          kutatnának szívesen.
        </p>{" "}
        <h3 className="pt-6 pb-4 text-lg font-medium">
          6. A személyes érdeklődési területeken túl, milyen támpontok lehetnek a diák segítségére a megfelelő téma
          kiválasztásában?
        </h3>{" "}
        <p className="py-2 text-gray-800">
          Ez teljes mértékben témafüggő. Fontos a mentorral való kommunikáció: a diák felvázolja, hogy miben gondolkodik
          és a témavezető ehhez igazodva mond véleményt és ad tanácsot.
        </p>{" "}
        <h3 className="pt-6 pb-4 text-lg font-medium">
          7. Mikor ajánlott nekifogni a tudományos kutatásnak, illetve mennyi időt vesz fel egy dolgozat elkészítése?
        </h3>{" "}
        <p className="py-2 text-gray-800">
          Ha valaki komolyan gondolkodik a kutatásban, akkor időben el kell kezdeni a munkát. Egy nívós dolgozat
          megírása éveket vesz igénybe, pontos munkát, alázatot és türelmet követel. Egy jó munka jelentős tanulási
          szakaszt, önállóságot fed, amelyek függenek a kutatási keretektől. Fontos, hogy a diák számára a kutatás ne
          keltsen kényszerérzetet.
        </p>{" "}
        <h3 className="pt-6 pb-4 text-lg font-medium">
          8. Melyik egyetemi év a legoptimálisabb ahhoz, hogy jelentkezzünk a konferenciára?
        </h3>{" "}
        <p className="py-2 text-gray-800">
          Már első éven is meg lehet próbálni, de másodévtől már érdemes, hiszen ekkor már be lehet kapcsolódni
          szakkörökbe is.
        </p>
        <h3 className="pt-6 pb-4 text-lg font-medium">9. Milyen egy jó / kidolgozható téma?</h3>{" "}
        <p className="py-2 text-gray-800">
          Igazodik a követelményekhez. Az előadásoknak szigorú kerete van (7 perc). Olyan témát kell választani, amit
          megfelelően ki lehet dolgozni, tömöríteni, előadni. Emellett szükséges a meggyőzés ereje, a diák tudja, hogy
          mit és miért kutatott, illetve az eredményeket helyesen értelmezze. A diákon megjelenő információknak
          tükrözniük kell az előadó felkészültségét, szakirodalmi ismeretét, magyarázatokat és következtetéseket.
        </p>{" "}
        <h3 className="pt-6 pb-4 text-lg font-medium">10. Milyen témák ajánlottak a preklinikumban levő diákoknak?:</h3>{" "}
        <p className="py-2 text-gray-800">
          A tanszékek minden évben meghirdetnek szakköröket, kutatásokat, amikről az előadótanároknál lehet érdeklődni.
          Változó, hogy kihez mi áll közelebb ezért mindenki aszerint válasszon, ami a legjobban megragadta a figyelmét.
        </p>{" "}
        <h3 className="pt-6 pb-4 text-lg font-medium">11. Mik a leggyakrabban előforduló nehézségek?</h3>{" "}
        <p className="py-2 text-gray-800">
          A dolgozat összeállítása alatt különböző nehézségek tudnak fellépni annak függvényében, hogy pontosan ennek
          melyik fázisában tartunk. A kutatási folyamat alatt például érdemes átgondolni és felvázolni azt, hogy mik a
          célok és ezek időt- és lehetőségeket figyelembe véve megvalósíthatók-e. A dolgozat megírása alatt a
          leggyakoribb akadályt az energiabefektetés hiánya szokta jelenteni, viszont az időkeret is jelentősen
          befolyásolhatja a dolgozat minőségét.
        </p>
        <h3 className="pt-6 pb-4 text-lg font-medium">
          12. Mit várhat el a tanár a diáktól, illetve a diák a tanártól?
        </h3>{" "}
        <p className="py-2 text-gray-800">
          A tanár a diáktól minőségi munkát, áldozatot, elszántságot és önállóságot vár el. A diák a tanártól
          tanácsokat, türelmet, biztonságot vár el, és azt, hogy bármikor fordulhasson hozzá, ha elakadt a dolgozatának
          bármelyik fázisánál. Ha a témavezetőt huzamos ideig nem lehet elérni, akkor tanácsos lenne egy másik mentorral
          felvenni a kapcsolatot.
        </p>
      </div>
    </div>
  );
};

export default withLayout(FAQ);

import { withLayout } from "../layout/withLayout";
import rules from "../assets/tdk-rules-2024.png";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import posterSectionZip from "../assets/poszter-szekció-sablonok.zip";

const Rules = () => {
  return (
    // <div className="py-20 px-5">
    //   <h1 className="pb-20 text-center text-5xl font-bold">Szabályzat</h1>
    //   <div className="mx-auto lg:w-1/2">
    //     <h2 className="pt-6 pb-4 text-lg font-medium">1. Röviden a Tudományos Diákköri Konferenciáról</h2>{" "}
    //     <p className="py-2 text-gray-800">
    //       A Tudományos Diákköri Konferencia (TDK) 30 éves múltra visszatekintő rendezvény Marosvásárhelyen, melyet évi
    //       rendszerességgel szervez meg a Marosvásárhelyi Magyar Diákszövetség és a Marosvásárhelyi Orvosi,
    //       Gyógyszerészeti, Technológiai és Tudományegyetem. Rendezvényünk lehetőséget nyújt mind az erdélyi, mind a
    //       határon túli magyar hallgatók számára, hogy, Erdélyben egyedülálló módon, anyanyelvükön mutassák be
    //       dolgozataikat egészségtudományi témakörben. A konferencia célja továbbá elősegíteni az államvizsga dolgozat
    //       (szakdolgozat) megfelelő színvonalú elkészítését és megvédését. Ezen felül nem titkolt szándékunk a magyar
    //       tudományos szaknyelv fejlesztésére ösztönözni az előadó hallgatókat.
    //     </p>{" "}
    //     <p className="py-2 text-gray-800">
    //       A konferenciának a marosvásárhelyi Kultúrpalota ad otthont. A hagyományokhoz híven a diákok tudományos
    //       bemutatói mellett neves meghívottak előadásai színezik az esemény programját. Mindezek mellett a diákok számos
    //       egyedi műhelymunkán vehetnek részt. A TDK-t a díjkiosztó gála és az állófogadás zárja.
    //     </p>{" "}
    //     <p className="py-2 text-gray-800">
    //       A rendezvény lehetőséget nyújt mind a személyes, mind az egyetemek közötti kapcsolatok kiépítésére, illetve
    //       ápolására.
    //     </p>{" "}
    //     <h2 className="pt-6 pb-4 text-lg font-medium">2.1. Iratkozás és regisztráció:</h2>{" "}
    //     <p className="py-2 text-gray-800">
    //       A Tudományos Diákköri Konferenciára bármely romániai és külföldi felsőoktatásbeli diák jelentkezhet
    //       egészségtudományok témába beillő dolgozattal. A konferenciára való iratkozás a TDK szabályzat elfogadásával
    //       kezdődik, majd az online feltöltési kritériumoknak eleget téve a bemutatni kívánó diák feltölti a dolgozat
    //       kivonatát (absztraktját) és befizeti a regisztrációs díjat a szervezők által megadott határidőig.
    //     </p>
    //     <p className="py-2 text-gray-800">
    //       Az előadó a TDK-ra való jelentkezésével igazolja, hogy az általa bemutatásra kerülő tudományos munka teljesen
    //       új, még be nem mutatott dolgozat. Ha egyértelmű bizonyíték van arra, hogy már bemutatott dolgozattal állunk
    //       szemben, ez kizárást von maga után. A bizonyíték hitelességének megállapítása a Tudományos Diákköri Tanács
    //       (TDT) feladata.
    //     </p>
    //     <h2 className="pt-6 pb-4 text-lg font-medium">
    //       2.2. Általános jelentkezési, részvételi feltételek és elvárások:
    //     </h2>
    //     <ul className="ml-6 list-disc text-gray-800">
    //       <li>A kivonatok és a dolgozat szövege magyar nyelvű. </li>
    //       <li>Egy dolgozatnak maximum három szerzője lehet. (1 főszerző és 2 társszerző) </li>
    //       <li>Egy szerző legfennebb két dolgozatban szerepelhet főszerzőként. </li>
    //       <li>Amennyiben a főszerző nem tudja bemutatni a dolgozatot, bemutathatja a társszerző. </li>
    //       <li>Egy dolgozat csak egy szekcióban kerülhet bemutatásra. </li>
    //       <li>Az iratkozás lejárta után beérkezett kivonatokat nem fogadjuk el! </li>
    //       <li>
    //         A Tudományos Diákköri Tanács fenntartja a dolgozatok elutasításának jogát, amennyiben az nem felel meg a
    //         szabályzatban leírt feltételeknek.{" "}
    //       </li>
    //       <li>A dolgozatok szakmai értékelésen esnek át. A dolgozat elutasítható ha: </li>
    //       <ul className="ml-6 list-disc text-gray-800">
    //         <li>A dolgozat már bemutatásra került bármilyen hazai vagy nemzetközi konferencián; </li>
    //         <li>A TDT nem tulajdonít a dolgozatnak megfelelő tudományos értéket. </li>
    //       </ul>
    //     </ul>
    //     <p className="py-2 text-gray-800">
    //       A benevezési díj az aktuális évben a főszervezők által meghatározott összeg, amely magába foglalja az
    //       iratkozást, az állófogadást, illetve a promóciós anyagokból álló ajándékcsomagot.
    //     </p>{" "}
    //     <p className="py-2 text-gray-800">
    //       A benevezési díjat a marosvásárhelyi diákszövetség székházában vagy az MMDSZ bankszámlaszámára átutalva lehet
    //       befizetni.
    //     </p>{" "}
    //     <p className="py-2 text-gray-800">
    //       Sikeres iratkozás a kivonat helyes feltöltésével, a kivonat TDT általi jóváhagyásával és a részvételi díj
    //       időben való befizetésével történik.
    //     </p>
    //     <h2 className="pt-6 pb-4 text-lg font-medium">2.3. Előadások és poszterbemutatók szabályzata:</h2>{" "}
    //     <p className="py-2 text-gray-800">
    //       Az előadások bemutatásának időtartama maximum 7 perc, amit 3 perc vitaidő követ, a poszter szekció esetében a
    //       bemutatás 5 perc, a vitaidő 2 perc.
    //     </p>{" "}
    //     <p className="py-2 text-gray-800">
    //       A prezentációhoz segédeszközként kizárólag a szervezők által biztosított számítógép, vetítőgép és pointer áll
    //       a hallgató rendelkezésére. Kivételt képeznek a főszervezőkkel előre egyeztetett esetek, legkevesebb két héttel
    //       a konferencia kezdete előtt.
    //     </p>{" "}
    //     <p className="py-2 text-gray-800">
    //       Minden szekciónak egyetemi oktatókból álló elbíráló bizottsága van, amelynek munkálatát a bizottság elnöke
    //       vezeti.
    //     </p>{" "}
    //     <p className="py-2 text-gray-800">
    //       A bizottságnak legkevesebb négy tagból kell állnia. Az elbíráló bizottság változtatása legkésőbb két órával a
    //       szakosztály megkezdése előtt lehetséges, kivéve, ha kevesebb, mint négy tag van. A bizottság akármilyen
    //       változtatását illetően az összes főszervező beleegyezése szükséges.
    //     </p>{" "}
    //     <p className="py-2 text-gray-800">
    //       A pontozó lapok névre szólóak, és a konferencia lejárta után a szerző megtekintheti saját pontszámait. Az
    //       elbíráló bizottság tagjai azon dolgozatokat, amelyeknek ők a témavezetői, nem pontozhatják.
    //     </p>{" "}
    //     <p className="py-2 text-gray-800">
    //       Pontegyenlőség esetén a következő szempontok alapján történik a rangsorolás, a feltüntetett sorrend szerint:
    //     </p>
    //     <ul className="ml-6 list-disc text-gray-800">
    //       <li>Egyéni hozzájárulás</li>
    //       <li>Előadókészség, vitakészség, szakmai tájékozottság </li>
    //       <li>Eredmények, módszertan</li>
    //     </ul>
    //     <p className="py-2 text-gray-800">Témakörön belül nincsenek megosztott díjak.</p>{" "}
    //     <p className="py-2 text-gray-800">
    //       A határon túli vendégdiákok témakörönként külön elbírálás alá esnek, a legjobb előadók különdíjban részesülnek
    //       a dolgozatok számától függően:
    //     </p>{" "}
    //     <ul className="ml-6 list-disc text-gray-800">
    //       <li>6 külföldi dolgozat: 1 különdíj</li> <li>7-9 dolgozat: 2 különdíj</li>{" "}
    //       <li>10 vagy több dolgozat: 3 különdíj</li>{" "}
    //     </ul>
    //     <p className="py-2 text-gray-800">
    //       Hatnál kevesebb dolgozat (határon túli és hazai együttesen) nem képezhet önálló témakört.{" "}
    //     </p>{" "}
    //     <p className="py-2 text-gray-800">A szekciónkénti díjak megosztása a következő:</p>
    //     <ul className="ml-6 list-disc text-gray-800">
    //       {" "}
    //       <li>6 dolgozat összesen: 1. díj</li> <li>7 - 9 hazai dolgozat: 1 - 2. díj</li>
    //       <li>10 - 15 hazai dolgozat: 1 - 2 - 3. díj</li> <li>16 - 20 hazai dolgozat: 1 - 2 - 3. díj és 1. dícséret</li>{" "}
    //       <li>20 hazai dolgozaton felül:1 - 2 - 3. díj, 1. és dícséret </li>
    //     </ul>
    //     <p className="py-2 text-gray-800">
    //       Kevesebb, mint 6 hazai dolgozat esetén, amennyiben az elbíráló bizottság nem találja a dolgozatokat díjazásra
    //       méltónak, nem köteles helyezéseket osztani.
    //     </p>{" "}
    //     <p className="pt-6 pb-2 text-gray-800">A poszteren kötelezően szerepel:</p>{" "}
    //     <p className="py-2 text-gray-800">
    //       a „ 30. Tudományos Diákköri Konferencia - Marosvásárhely, keltezés, a szerző(k) család- és keresztneve,
    //       illetve egyetemének adatai (egyetem, kar, szak, évfolyam); a témavezető(k) család- és keresztneve, tudományos
    //       fokozata, illetve egyetemének (egyetem, kar, tanszék) vagy intézményének (intézmény, beosztás) adatai.
    //     </p>{" "}
    //     <p className="py-2 text-gray-800">
    //       Az előadás digitális változatát (Power Point/Open Office bemutatót) a honlapra kérjük feltölteni a megadott
    //       dátumig. Amennyiben a feltöltés nem történt meg a kijelölt időpontig, a dolgozat nem mutatható be. A Prezi
    //       típusú bemutatókat a megszabott határidőig kell e-mailben eljuttatni a szervezőknek. Ezen dolgozatokat nem
    //       kell feltölteni. A dolgozatokat végleges formátumban kell feltölteni, utólagos módosítás nem lehetséges. A
    //       bemutató diák (Power Point, Open Office) neve a főszerző neve kell legyen (pl: Kerekes János.ppt).
    //     </p>{" "}
    //     <p className="py-2 text-gray-800">
    //       A dolgozatok bemutatása betűrendben történik, a főszerzők családnevének kezdőbetűje szerint. Ettől a
    //       sorrendtől abban az esetben tekintünk el, ha két dolgozat témája közös és ezt a diák a bemutató előtt egy
    //       héttel jelzi.
    //     </p>
    //     <h2 className="pt-6 pb-4 text-lg font-medium">2.4. Témakörök (szekciók) felosztása:</h2>{" "}
    //     <p className="py-2 text-gray-800">
    //       A konferencia témaköreit a TDT határozza meg a beérkező dolgozatok függvényében. Egy témakör létrejöttéhez
    //       legkevesebb 6 dolgozat szükséges az adott témakörön belül (határon túli és hazai együtt). A jelentkezők
    //       létszámának függvényében a TDT fenntartja a témakörök összevonásának, illetve tagolásának jogát.
    //     </p>{" "}
    //     <h2 className="pt-6 pb-4 text-lg font-medium">3. Pontozás</h2>{" "}
    //     <p className="py-2 text-gray-800">
    //       Az elbíráló bizottságot témakörönként a TDT választja ki és a főszervezők kérik fel. Az elbíráló bizottság a
    //       pontozási rendszernek megfelelően értékeli a dolgozatokat.
    //     </p>{" "}
    //     <h3>Szempont és adható pontszám</h3> <img src={rules} alt="pontozas" />
    //     <ol className="ml-6 list-decimal text-gray-800">
    //       {" "}
    //       <li>
    //         A TUDOMÁNYOS KÉRDÉS MEGFOGALMAZÁSA, KIDOLGOZÁSA (a tanulmány alapjául szolgáló tudományos kérdés érthető
    //         megfogalmazása) 1-20
    //       </li>{" "}
    //       <li>
    //         EREDMÉNYEK, MÓDSZERTAN (módszerek helyes megválasztása és leírásának pontossága; az elért eredmények
    //         ismertetése és értelmezése; az adatok megfelelő statisztikai feldolgozása) 1-20
    //       </li>
    //       <li>
    //         ELŐADÓKÉSZSÉG, VITAKÉSZSÉG, SZAKMAI TÁJÉKOZOTTSÁG (világos okfejtés, érthető kidolgozás, előadásmód, témában
    //         való jártasság) 1-20
    //       </li>{" "}
    //       <li>EGYÉNI HOZZÁJÁRULÁS (szerzői hozzájárulás mértéke) 1-20</li>{" "}
    //       <li>
    //         TUDOMÁNYOS NYELVEZET HELYESSÉGE, KIVONAT MINŐSÉGE (tudományos nyelvezet használata, háttérismeretek,
    //         nyelvhelyesség, helyesírás) 1-20
    //       </li>{" "}
    //     </ol>{" "}
    //     <p className="py-2 text-gray-800">
    //       Összesen adható pontszám: 100 Az előadások bemutatásának időtartama 7 perc, amit 3 perc vitaidő követ, a
    //       poszter szekció esetében a bemutatás 5 perc, a vitaidő 2 perc.
    //     </p>{" "}
    //     <p className="py-2 text-gray-800">
    //       A bemutató időtartamának túllépése pontlevonást von maga után: 30 másodperc és 1 perc közötti túllépés: 1 pont
    //       levonás 1 és 2 perc közötti túllépés: 2 pont levonás 2 perc felett: 5 pont levonás Az időmérést az ülésvezetők
    //       végzik.
    //     </p>{" "}
    //     <p className="py-2 text-gray-800">
    //       Az idő túllépése miatt levonandó pontokat az ülés lejártával a pontozók vezetik be.{" "}
    //     </p>
    //     <h2 className="pt-6 pb-4 text-lg font-medium">4. Tudományos Diákköri Tanács (TDT)</h2>{" "}
    //     <p className="py-2 text-gray-800">
    //       A TDT egyetemi oktatókból, a TDK főszervezőiből és az MMDSZ elnökéből álló tanács. A TDT feladata:
    //     </p>{" "}
    //     A TDT a Tudományos Diákköri Konferencia védnöke. A TDT átnézi a dolgozatok kivonatait, ellenőrzi azok
    //     helyességét. Átcsoportosítja a dolgozatokat témaköröknek megfelelően abban az esetben, ha tematikájában nem a
    //     megjelölt szekcióba illeszkedik. Kiválasztja az elbíráló bizottság tagjait. Létrehozhat új szekciókat,
    //     meglévőket összevonhat, vagy tagolhat. Segít a konferencia ideje alatt felmerülő vitás kérdések megoldásában.{" "}
    //     <h3 className="pt-6 pb-4 text-lg font-medium">5. A TDK szervezői</h3>{" "}
    //     <p className="py-2 text-gray-800">
    //       A Marosvásárhelyi Magyar Diákszövetség tagjai közül kerülnek ki a főszervezők, illetve a szervezők, akik az
    //       alábbi munkacsoportokba szerveződnek: akkreditáció, állófogadás, díjak, étkezés, fotó, infóiroda, kivonatok,
    //       pontozás, média és web, teremrendezés, technika, ülésvezetés, workshop, gála, szponzor.{" "}
    //     </p>
    //     <h3 className="pt-6 pb-4 text-lg font-medium">5.1. A szervezők jogai</h3>{" "}
    //     <p className="py-2 text-gray-800">
    //       A TDK főszervezők fenntartják minden szinten a változtatás jogát (program, helyszín, időpont, előadók, stb.).
    //     </p>{" "}
    //     <p className="py-2 text-gray-800">
    //       A TDK főszervezők szükség esetén megváltoztathatják az elbíráló bizottságok tagjait.
    //     </p>{" "}
    //     <p className="py-2 text-gray-800">
    //       Bármelyik egyetemi hallgató lehet TDK szervező, minden szervezőnek joga van javaslatokat tenni a programmal,
    //       szervezéssel kapcsolatban. A szervezői létszámot a TDK főszervezők szabják meg, túljelentkezés esetén a
    //       szervezők felvétele pontrendszer alapján történik. A pontrendszer az MMDSZ Belső Működési Szabályzatán (BMSZ)
    //       alapszik.
    //     </p>{" "}
    //     <p className="py-2 text-gray-800">
    //       A TDK főszervezők megválasztják a munkacsoport vezetőket és tagokat, meghatározzák a munkacsoportok tagjainak
    //       számát és tevékenységét, jogukban áll a tevékenységet ellenőrizni, feladatokat számon kérni.
    //     </p>{" "}
    //     <p className="py-2 text-gray-800">
    //       A munkacsoport vezetőknek jogában áll számon kérni a munkacsoport tagjainak tevékenységét. A TDK főszervezői
    //       csakis akkor állítanak ki a szervezőknek önkéntességüket igazoló okiratot, ha azok szervezői kötelességeiknek
    //       maradéktalanul eleget tettek.
    //     </p>{" "}
    //     <p className="py-2 text-gray-800">Minden szervező részesül az aktuális ajándékcsomagból.</p>
    //     <h2 className="pt-6 pb-4 text-lg font-medium">5.2. A szervezők kötelezettségei:</h2>{" "}
    //     <p className="py-2 text-gray-800">
    //       A TDK főszervezők kötelesek időszakosan beszámolni a szervezés fejleményeiről az MMDSZ vezetőségének.
    //     </p>{" "}
    //     <p className="py-2 text-gray-800">
    //       A TDK főszervezők és a munkacsoport vezetők elérhetőek kell legyenek a nap minden órájában telefonon a
    //       rendezvény és az előkészületek ideje alatt, a konferencia ideje alatt minimum egy főszervező a helyszínen kell
    //       tartózkodjon.
    //     </p>{" "}
    //     <p className="py-2 text-gray-800">
    //       A TDK főszervezői kötelesek közölni a határidőket, programot, nevezési feltételeket, valamint bizalmasan kell
    //       kezeljék a pontozási információkat a konferencia ideje alatt.
    //     </p>{" "}
    //     <p className="py-2 text-gray-800">
    //       A TDK szervezőknek tisztában kell lenni a feladatkörükkel, az elvállalt feladatokat kötelesek elvégezni a
    //       közösen megszabott határidőn belül.
    //     </p>{" "}
    //     <p className="py-2 text-gray-800">
    //       A szervezők a konferencia előtt vagy alatt felmerülő problémákról kötelesek értesíteni a TDK főszervezőket,
    //       nem hozhatnak döntéseket egyeztetés nélkül.
    //     </p>{" "}
    //     <p className="py-2 text-gray-800">
    //       A szervezők kötelesek részt venni a konferencián, bizalmasan kezelni a belső információkat.
    //     </p>{" "}
    //     <p className="py-2 text-gray-800">
    //       A szervezők a TDK alatt kötelesek részt venni legkevesebb 2 felkért előadó előadásán. Emellett kötelesek napi
    //       legkevesebb 3 órát a helyszínen tartózkodni.
    //     </p>{" "}
    //     <p className="py-2 text-gray-800">
    //       A munkacsoportok vezetői kötelesek számon tartani a helyszínen tartózkodó szervezők kilétét.
    //     </p>{" "}
    //     <p className="py-2 text-gray-800">
    //       A munkacsoport vezetők beszámolót írnak a konferencia kiértékelő gyűlésére.
    //     </p>{" "}
    //     <h2 className="pt-6 pb-4 text-lg font-medium">6. Országos Tudományos Diákköri Konferencia (OTDK)</h2>{" "}
    //     <p className="py-2 text-gray-800">
    //       A marosvásárhelyi Tudományos Diákköri Konferencia az Erdélyi Tudományos Diákköri Konferencia (ETDK) orvos- és
    //       egészségtudomány szekciójaként továbbjutási lehetőséget biztosít a Magyarországon minden második évben
    //       megrendezésre kerülő Országos Tudományos Diákköri Konferenciára (OTDK).
    //     </p>
    //     <p className="py-2 text-gray-800">
    //       A javaslatokat OTDK-ra az elbíráló bizottság teszi meg, közös megegyezés alapján. A jelölések nem feltétlenül
    //       egyeznek meg a szekció díjazottjaival, ezeket a díjátadó ünnepségen hozza nyilvánosságra minden szekció
    //       elbíráló bizottsága.
    //     </p>{" "}
    //     <p className="py-2 text-gray-800">
    //       Szekciónként legfeljebb 1 dolgozat jelölhető. Poszter szekcióból nem történik jelölés.
    //     </p>{" "}
    //     <h2 className="pt-6 pb-4 text-lg font-medium">A poszter szekció szabályai:</h2>{" "}
    //     <p className="py-2 text-gray-800">
    //       A poszter szekcióban bemutatott dolgozatok kivonata, az előadás szekció dolgozatainak kivonataihoz hasonlóan
    //       és velük egyidőben töltendő fel.
    //     </p>{" "}
    //     <p className="py-2 text-gray-800">
    //       A poszterek leadási határideje a Power-Point bemutatók beadási határidejével megegyezik. Az e-posztereket a
    //       honlapra kell feltölteni, hasonlóan a bemutatókhoz.
    //     </p>{" "}
    //     <p className="py-2 text-gray-800">
    //       A poszter mérete A0 és PDF formátumban adandó le. A poszteren kötelezően szerepeljen:{" "}
    //       <i>
    //         Tudományos Diákköri Konferencia - Marosvásárhely, keltezés, a szerző(k) család- és keresztneve, illetve
    //         egyetemének adatai (egyetem, kar, szak, évfolyam); a témavezető(k) család- és keresztneve, tudományos
    //         fokozata, illetve egyetemének (egyetem, kar, tanszék) vagy intézményének (intézmény, beosztás) adatai.
    //       </i>
    //     </p>{" "}
    //     <p className="py-2 text-gray-800">
    //       A poszterek vetítve, e-poszter formájában kerülnek bemutatásra. A bemutatás időtartama maximum 5 perc, melyet
    //       2 perc vitaidő követ.
    //     </p>{" "}
    //     <p className="py-2 text-gray-800">
    //       A poszter bemutatását az elbíráló bizottság tagjai értékelik, a legjobb dolgozatok díjazásra kerülnek.
    //     </p>{" "}
    //     <p className="py-2 text-gray-800">Poszter szekcióból nem történik OTDK jelölés.</p>{" "}
    //     <p className="pt-8 pb-2 text-sm italic text-gray-800">
    //       Bármilyen felmerülő kérdés vagy probléma esetén kérjük vegyék fel a kapcsolatot a TDK főszervezőivel
    //       személyesen, telefonon vagy az alábbi e-mail címen: tdk@mmdsz.ro.
    //     </p>
    //   </div>
    // </div>
    <div className="prose mx-auto py-20 px-10 prose-a:text-sky-400 prose-img:my-0 prose-img:py-0 sm:w-2/3 xl:w-1/2">
      <h1>Tudományos Diákköri Konferencia szabályzata</h1>
      <h2>1. Röviden a Tudományos Diákköri Konferenciáról</h2>
      <p>
        A Tudományos Diákköri Konferencia (TDK) egy közel 30 éves múltra visszatekintő rendezvény Marosvásárhelyen,
        melyet évi rendszerességgel szervez meg a Marosvásárhelyi Magyar Diákszövetség és a
        <span>Marosvásárhelyi George Emil Palade Orvosi, Gyógyszerészeti, Tudomány és Technológiai Egyetem</span>.
        Rendezvényünk lehetőséget nyújt mind az erdélyi, mind a határon túli magyar hallgatók számára, hogy Erdélyben
        egyedülálló módon, anyanyelvükön mutassák be dolgozataikat egészségtudományi témakörben. A konferencia célja
        továbbá elősegíteni az államvizsga dolgozat (szakdolgozat) megfelelő színvonalú elkészítését és megvédését. Ezen
        felül a magyar tudományos szaknyelv fejlesztésére is lehetőséget biztosít a hallgatók számára.
      </p>
      <p>
        A konferenciának a marosvásárhelyi Kultúrpalota ad otthont. A hagyományokhoz híven a diákok tudományos bemutatói
        mellett neves meghívottak előadásai színezik az esemény programját. Mindezek mellett a diákok számos egyedi
        műhelymunkán vehetnek részt. A TDK-t a díjkiosztó és az ünnepi gálavacsora zárja.
      </p>
      <p>
        A rendezvény lehetőséget nyújt mind a személyes, mind az egyetemek közötti kapcsolatok kiépítésére, illetve
        ápolására.
      </p>
      <h3>2.1. Iratkozás és regisztráció:</h3>
      <p>
        A Tudományos Diákköri Konferenciára bármely romániai és külföldi felsőoktatásbeli diák jelentkezhet
        egészségtudományok témába illő dolgozattal. A konferenciára való iratkozás a TDK szabályzat elfogadásával
        kezdődik, majd az online feltöltési kritériumoknak eleget téve a bemutatni kívánó diák feltölti a dolgozat
        kivonatát (absztraktját), saját hozzájárulási és publikációs nyilatkozatát és befizeti a regisztrációs díjat a
        szervezők által megadott határidőig.
      </p>
      <p>
        Az előadó a TDK-ra való jelentkezésével igazolja, hogy az általa bemutatásra kerülő tudományos munka teljesen
        új, még be nem mutatott dolgozat. Ha egyértelmű bizonyíték van arra, hogy, már bemutatott dolgozattal állunk
        szemben, ez kizárást von maga után. A bizonyíték hitelességének megállapítása a Tudományos Diákköri Tanács (TDT)
        feladata.
      </p>
      <p>
        Amennyiben sikeres jelentkezést követően egy dolgozat nem kerül bemutatásra, nem publikálható az Orvostudományi
        Értesítőben sem.
      </p>
      <h3>2.2. Általános jelentkezési, részvételi feltételek és elvárások:</h3>
      <ol>
        <li>A kivonatok és a dolgozat szövege magyar nyelvű.</li>
        <li>
          A kivonat részei a következők: cím (magyar, román, angol nyelven), bevezetés, célkitűzés, módszer, eredmény,
          következtetés.
        </li>
        <li>A kivonat szóközök és cím nélkül nem haladhatja meg a 2200 karaktert.</li>
        <li>Egy dolgozatnak maximum három szerzője lehet. (1 főszerző és 2 társszerző)</li>
        <li>Egy szerző legfennebb két dolgozatban szerepelhet főszerzőként.</li>
        <li>Egy dolgozat csak egy szekcióban kerülhet bemutatásra.</li>
        <li>Az iratkozás lejárta után beérkezett kivonatokat nem fogadjuk el!</li>
        <li>
          A Tudományos Diákköri Tanács fenntartja a dolgozatok elutasításának jogát, amennyiben az nem felel meg a
          szabályzatban leírt feltételeknek.
        </li>
        <li>A dolgozatok szakmai értékelésen esnek át. A dolgozat elutasítható ha:</li>
        <ol>
          <li>A dolgozat már bemutatásra került bármilyen hazai vagy nemzetközi konferencián;</li>
          <li>A TDT nem tulajdonít a dolgozatnak megfelelő tudományos értéket.</li>
        </ol>
      </ol>
      <ol>
        <li>
          A benevezési díj az aktuális évben a főszervezők által meghatározott összeg, amely magába foglalja az
          iratkozást, az ünnepi gálavacsorán való részvétel díját, illetve a promóciós anyagokból álló ajándékcsomagot.
        </li>
        <li>
          A benevezési díjat a Marosvásárhelyi Magyar Diákszövetség Székházában vagy az MMDSZ bankszámlaszámára átutalva
          lehet befizetni.
        </li>
        <li>
          Sikeres iratkozás a kivonat helyes feltöltésével, a kivonat TDT általi jóváhagyásával és a részvételi díj
          időben való befizetésével történik.
        </li>
        <li>A saját hozzájárulási és publikációs nyilatkozat feltöltése.</li>
        <li>
          Ha egy dolgozatot a főszerző objektív okok miatt nem tud bemutatni, kötelessége ezt legkésőbb 24 órával a
          szekció kezdete előtt e-mailben jelezni. A főszerző motivációja alapján, amennyiben a TDT úgy ítéli meg, a
          témavezető által támogatott társszerző is bemutathatja a dolgozatot.
        </li>
      </ol>
      <h3>2.3. Előadások és poszterbemutatók szabályzata:</h3>
      <p>
        Az előadások bemutatásának időtartama maximum 7 perc, amit 3 perc vitaidő követ, a poszter szekció esetében a
        bemutatás 5 perc, a vitaidő 2 perc.
      </p>
      <p>
        A prezentációhoz segédeszközként kizárólag a szervezők által biztosított számítógép, vetítőgép és pointer áll a
        hallgató rendelkezésére. Kivételt képeznek a főszervezőkkel előre egyeztetett esetek, legkevesebb két héttel a
        konferencia kezdete előtt.
      </p>
      <p>
        Minden szekciónak egyetemi oktatókból álló elbíráló bizottsága van, amelyet a főszervezők szükség szerint a
        szekciónak megfelelő szakemberekkel egészíthetnek ki. A bizottság munkáját a bizottság elnöke vezeti.
      </p>
      <p>
        A bizottságnak legkevesebb négy tagból kell állnia. Az elbíráló bizottság változtatása legkésőbb két órával a
        szekció megkezdése előtt lehetséges, kivéve, ha kevesebb, mint négy tag van. A bizottság akármilyen
        változtatását illetően az összes főszervező beleegyezése szükséges.
      </p>
      <p>
        A pontozó lapok névre szólóak, és a konferencia lejárta után a szerző e-mailben kérheti ki saját pontszámát.
      </p>
      <p>
        Az elbíráló bizottság tagjai azon dolgozatokat, amelyeknek ők a témavezetői, nem pontozhatják. Pontegyenlőség
        esetén a következő szempontok alapján történik a rangsorolás, a feltüntetett sorrend szerint:
      </p>
      <ol>
        <li>Egyéni hozzájárulás</li>
        <li>Előadókészség, vitakészség, szakmai tájékozottság</li>
        <li>Eredmények, módszertan</li>
      </ol>
      <p>Témakörön belül nincsenek megosztott díjak.</p>
      <p>
        A határon túli vendégdiákok témakörönként külön elbírálás alá esnek, a legjobb előadók különdíjban
        részesülhetnek a dolgozatok számától függően:
      </p>
      <ul>
        <li>3 vagy kevesebb külföldi dolgozat: 1 különdíj</li>
        <li>4-6 dolgozat: 2 különdíj</li>
        <li>7 vagy több dolgozat: 3 különdíj</li>
      </ul>
      <p>Hatnál kevesebb dolgozat (határon túli és hazai együttesen) nem képezhet önálló témakört.</p>
      <p>A szekciónkénti díjak megosztása a következő:</p>
      <ul>
        <li>6 dolgozat összesen: 1. díj</li>
        <li>7 - 9 hazai dolgozat: 1 - 2. díj</li>
        <li>10 - 15 hazai dolgozat: 1 - 2 - 3. díj</li>
        <li>16 - 20 hazai dolgozat: 1 - 2 - 3. díj és 1. dicséret</li>
        <li>20 hazai dolgozaton felül: 1 - 2 - 3. díj, 1. és 2. dicséret</li>
      </ul>
      <p>
        Kevesebb mint 6 hazai dolgozat esetén, amennyiben az elbíráló bizottság nem találja a dolgozatokat díjazásra
        méltónak, nem köteles helyezéseket osztani.
      </p>
      <p>
        <strong>A digitális bemutatókra vonatkozóan:</strong>
      </p>
      <p>
        Az előadás digitális változatát (Power Point/Open Office bemutatót) a honlapra kérjük feltölteni a megadott
        dátumig. Amennyiben a feltöltés nem történt meg a kijelölt időpontig, a dolgozat nem mutatható be. A Prezi
        típusú bemutatókat a megszabott határidőig e-mailben kell eljuttatni a szervezőknek, ezen dolgozatokat nem kell
        feltölteni. A dolgozatokat végleges formátumban kell feltölteni, utólagos módosítás nem lehetséges. A bemutató
        diákok (Power Point, Open Office) neve a főszerző neve kell legyen (pl: Kerekes János.ppt).
      </p>
      <p>A bemutató utolsó képkockájának tartalmaznia kell a dolgozathoz való saját hozzájárulást.</p>
      <p>
        <strong>A poszter bemutatókra vonatkozóan:</strong>
      </p>
      <p>
        A poszteren kötelezően szerepel: a 31. Tudományos Diákköri Konferencia - Marosvásárhely, keltezés, a szerző(k)
        család- és keresztneve, illetve egyetemének adatai (egyetem, kar, szak, évfolyam); a témavezető(k) család- és
        keresztneve, tudományos fokozata, illetve egyetemének (egyetem, kar, tanszék) vagy intézményének (intézmény,
        beosztás) adatai, a főszerző egyetemének logója.
      </p>
      <p>
        Tartalom: bevezetés, anyag és módszer, eredmények, (megbeszélés), következtetés. Ezen részek kötelező módon kell
        szerepeljenek összefoglalt, tömör szöveg, adatok és ábrák, képek formájában.
      </p>
      <p>
        A megbeszélés rész feltüntetése opcionális, ezt a poszter bemutatása alatt elég szóban is kifejtenie a
        szerzőnek.
      </p>
      <p>
        A poszter mérete A1 méretben adandó le, illetve a vázát a 31.TDK arculatával ellátott sablon adja, amely
        <a href={posterSectionZip}> ezen linken keresztül elérhető</a>, a sablon tetszés szerint választható.
      </p>
      <p>A bemutatandó poszterek a konferencia állandó kiállítását fogják képezni.</p>
      <p>
        A poszterszekcióba történő jelentkezéskor a kész absztraktot valamint a saját hozzájárulási és publikációs
        nyilatkozatot a honlapra kérjük feltölteni a megadott dátumig. Emellett a bemutató diák köteles a posztert
        fizikai formában (az előre meghatározott formai követelményeknek megfelelően) magával hozni a szervezők által
        meghatározott időpontra.
      </p>
      <p>
        A poszter szekcióban bemutatott dolgozatok kivonata, az előadás szekció dolgozatainak kivonataihoz hasonlóan és
        velük egyidőben töltendő fel.
      </p>
      <p>
        A dolgozatok bemutatása betűrendben történik, a főszerzők családnevének kezdőbetűje szerint. Ettől a sorrendtől
        abban az esetben tekintünk el, ha két dolgozat témája közös és ezt a diák a bemutató előtt egy héttel jelzi.
      </p>
      <h3>2.4. Témakörök (szekciók) felosztása:</h3>
      <p>A konferencia témaköreit a TDT határozza meg a beérkező dolgozatok függvényében.</p>
      <p>
        Egy témakör létrejöttéhez legkevesebb 6 dolgozat szükséges az adott témakörön belül (határon túli és hazai
        együtt).
      </p>
      <p>
        A jelentkezők létszámának függvényében a TDT fenntartja a témakörök összevonásának, illetve tagolásának jogát.
      </p>
      <h2>3. Pontozás</h2>
      <p>Az elbíráló bizottságot témakörönként a TDT választja ki és a főszervezők kérik fel.</p>
      <p>Az elbíráló bizottság a pontozási rendszernek megfelelően értékeli a dolgozatokat.</p>
      <p>
        Az elbíráló bizottság tagjai pontozzák a dolgozatokat (kivételt képez az az eset, amikor az elbíráló bizottsági
        tag/tagok az adott dolgozat témavezetője/témavezetői).
      </p>
      <h3>SZEMPONT ÉS ADHATÓ PONTSZÁM</h3>
      <div className="border-2 border-neutral-800">
        <img src={rules} />
      </div>
      <ol>
        <li>
          A TUDOMÁNYOS KÉRDÉS MEGFOGALMAZÁSA, KIDOLGOZÁSA (a tanulmány alapjául szolgáló tudományos kérdés érthető
          megfogalmazása) 1-20
        </li>
        <li>
          EREDMÉNYEK, MÓDSZERTAN (módszerek helyes megválasztása és leírásának pontossága; az elért eredmények
          ismertetése és értelmezése; az adatok megfelelő statisztikai feldolgozása) 1-20
        </li>
        <li>
          ELŐADÓKÉSZSÉG, VITAKÉSZSÉG, SZAKMAI TÁJÉKOZOTTSÁG (világos okfejtés, érthető kidolgozás, előadásmód, témában
          való jártasság) 1-20
        </li>
        <li>EGYÉNI HOZZÁJÁRULÁS (szerzői hozzájárulás mértéke) 1-20</li>
        <li>
          TUDOMÁNYOS NYELVEZET HELYESSÉGE, KIVONAT MINŐSÉGE (tudományos nyelvezet használata, háttérismeretek,
          nyelvhelyesség, helyesírás) 1-20
        </li>
      </ol>
      <p>Összesen adható pontszám: 100</p>
      <p>
        Az előadások bemutatásának időtartama 7 perc, amit 3 perc vitaidő követ, a poszter szekció esetében a bemutatás
        5 perc, a vitaidő 2 perc. A bemutató időtartamának túllépése pontlevonást von maga után:
      </p>
      <ul>
        <li>30 másodperc és 1 perc közötti túllépés: 1 pont levonás</li>
        <li>1 és 2 perc közötti túllépés: 2 pont levonás</li>
        <li>2 perc felett: 5 pont levonás</li>
      </ul>
      <p>
        Az időmérést az ülésvezetők végzik. Az idő túllépése miatt levonandó pontokat az ülés lejártával a pontozók
        vezetik be.
      </p>
      <h2>4. Tudományos Diákköri Tanács (TDT)</h2>
      <ul>
        <li>A TDT egyetemi oktatókból, a TDK főszervezőiből és az MMDSZ elnökéből álló tanács.</li>
        <li>A TDT feladata:</li>
        <li>A TDT a Tudományos Diákköri Konferencia védnöke.</li>
        <li>A TDT átnézi a dolgozatok kivonatait, ellenőrzi azok helyességét.</li>
        <li>
          Átcsoportosítja a dolgozatokat témaköröknek megfelelően abban az esetben, ha tematikájában nem a megjelölt
          szekcióba illeszkedik.
        </li>
        <li>Kiválasztja az elbíráló bizottság tagjait.</li>
        <li>Létrehozhat új szekciókat, meglévőket összevonhat, vagy tagolhat.</li>
        <li>Segít a konferencia ideje alatt felmerülő vitás kérdések megoldásában.</li>
      </ul>
      <h2>5. A TDK szervezői</h2>
      <p>
        A Marosvásárhelyi Magyar Diákszövetség tagjai közül kerülnek ki a főszervezők, illetve a szervezők, akik az
        alábbi munkacsoportokba szerveződnek: akkreditáció, díjak, étkezés, fotó, gála, infóiroda, korrektúra és
        kivonatok, külügy, média és kommunikáció, műhelymunkák, pontozás, protokoll, szponzor, szállítás, technika,
        teremrendezés, tördelés, ülésvezetés.
      </p>
      <h3>5.1. A szervezők jogai:</h3>
      <p>
        A TDK főszervezők fenntartják minden szinten a változtatás jogát (program, helyszín, időpont, előadók, stb.).
      </p>
      <p>A TDK főszervezők szükség esetén megváltoztathatják az elbíráló bizottságok tagjait.</p>
      <p>
        Bármelyik egyetemi hallgató lehet TDK szervező, minden szervezőnek joga van javaslatokat tenni a programmal,
        szervezéssel kapcsolatban. A szervezői létszámot a TDK főszervezők szabják meg, túljelentkezés esetén a
        szervezők felvétele pontrendszer alapján történik. A pontrendszer az MMDSZ Belső Működési Szabályzatán (BMSZ)
        alapszik.
      </p>
      <p>
        A TDK főszervezők megválasztják a munkacsoport vezetőket és tagokat, meghatározzák a munkacsoportok tagjainak
        számát és tevékenységét, jogukban áll a tevékenységet ellenőrizni, feladatokat számon kérni.
      </p>
      <p>
        A munkacsoport vezetőknek jogában áll számon kérni a munkacsoport tagjainak tevékenységét. A TDK főszervezői
        csakis akkor állítanak ki a szervezőknek önkéntességüket igazoló okiratot, ha azok szervezői kötelességeiknek
        maradéktalanul eleget tettek.
      </p>
      <p>Minden szervező részesül az aktuális promóciós csomagból.</p>
      <h3>5.2. A szervezők kötelezettségei:</h3>
      <p>A TDK főszervezők kötelesek időszakosan beszámolni a szervezés fejleményeiről az MMDSZ vezetőségének.</p>
      <p>
        A TDK főszervezők és a munkacsoport vezetők elérhetőek kell legyenek a nap minden órájában telefonon a
        rendezvény és az előkészületek ideje alatt, a konferencia ideje alatt minimum egy főszervező a helyszínen kell
        tartózkodjon.
      </p>
      <p>
        A TDK főszervezői kötelesek közölni a határidőket, programot, nevezési feltételeket, valamint bizalmasan kell
        kezeljék a pontozási információkat a konferencia ideje alatt és után.
      </p>
      <p>
        A TDK szervezőknek tisztában kell lenni a feladatkörükkel, az elvállalt feladatokat kötelesek elvégezni a
        közösen megszabott határidőn belül.
      </p>
      <p>
        A szervezők a konferencia előtt vagy alatt felmerülő problémákról kötelesek értesíteni a TDK főszervezőket, nem
        hozhatnak döntéseket egyeztetés nélkül.
      </p>
      <p>A szervezők kötelesek részt venni a konferencián, bizalmasan kezelni a belső információkat.</p>
      <p>
        A szervezők a TDK alatt kötelesek részt venni legkevesebb 2 felkért előadó előadásán. Emellett kötelesek napi
        legkevesebb 3 órát, ezen felül amennyit a feladat megkövetel a helyszínen tartózkodni.
      </p>
      <p>A munkacsoportok vezetői kötelesek számon tartani a helyszínen tartózkodó szervezők kilétét.</p>
      <p>A munkacsoport vezetők beszámolót írnak a konferencia kiértékelő gyűlésére.</p>
      <p>6. Országos Tudományos Diákköri Konferencia (OTDK)</p>
      <p>
        A marosvásárhelyi Tudományos Diákköri Konferencia az Erdélyi Tudományos Diákköri Konferencia (ETDK) orvos- és
        egészségtudomány szekciójaként továbbjutási lehetőséget biztosít a Magyarországon minden második évben
        megrendezésre kerülő Országos Tudományos Diákköri Konferenciára (OTDK).
      </p>
      <p>
        A javaslatokat OTDK-ra az elbíráló bizottság teszi meg, közös megegyezés alapján. A jelölések nem feltétlenül
        egyeznek meg a szekció díjazottjaival, ezeket a díjátadó ünnepségen hozza nyilvánosságra minden szekció elbíráló
        bizottsága.
      </p>
      <p>
        Szekciónként legfeljebb 1 dolgozat jelölhető. Amennyiben az elbíráló bizottság egy dolgozatot sem talál erre
        érdemesnek, nem köteles jelölést adnia Poszter szekcióból nem történik jelölés.
      </p>
      <p>Megjegyzés:</p>
      <p>
        Bármilyen felmerülő kérdés vagy probléma esetén kérjük vegyék fel a kapcsolatot a TDK főszervezőivel
        személyesen, telefonon vagy az alábbi e-mail címen:
        <a target="_blank" href="mailto:tdk@mmdsz.ro">
          <span> tdk@mmdsz.ro</span>
        </a>
      </p>
      <p>Minden információ megtalálható a marosvásárhelyi TDK hivatalos honlapján: tdk.mmdsz.ro.</p>
    </div>
  );
};

export default withLayout(Rules);

/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Helmet } from "react-helmet";

import { withLayout } from "../layout/withLayout";
import rules from "../assets/tdk-rules-2024.png";
// @ts-ignore
import posterSectionZip from "../assets/poszter_sablon_2025_v2.zip";
// @ts-ignore
import presentationRightsDoc from "../assets/tdk-bemutatasi-jog-2025.docx";
// @ts-ignore
import contributionDoc from "../assets/tdk-hozzajarulas-2025.docx";

const Rules = () => {
  return (
    <div className="prose mx-auto py-20 px-10 prose-a:text-tdk-accent prose-a:hover:underline prose-img:my-0 prose-img:py-0 w-max-2xl">
      <Helmet>
        <title>32. TDK - Szabályzat</title>
      </Helmet>
      <h1>Tudományos Diákköri Konferencia szabályzata</h1>
      <h2>1. Röviden a Tudományos Diákköri Konferenciáról</h2>
      <p>
        A Tudományos Diákköri Konferencia (TDK) egy több, mint 30 éves múltra visszatekintő rendezvény Marosvásárhelyen,
        melyet évi rendszerességgel szervez meg a{" "}
        <strong>
          Marosvásárhelyi Magyar Diákszövetség és a Marosvásárhelyi George Emil Palade Orvosi, Gyógyszerészeti, Tudomány
          és Technológiai Egyetem
        </strong>
        . Rendezvényünk lehetőséget nyújt mind az erdélyi, mind a határon túli magyar hallgatók számára, hogy Erdélyben
        egyedülálló módon, anyanyelvükön mutassák be dolgozataikat egészségtudományi témakörben. Továbbá, a konferencia
        célja elősegíteni az államvizsga dolgozat (szakdolgozat) megfelelő színvonalú elkészítését és megvédését. Ezen
        felül a magyar tudományos szaknyelv fejlesztésére is lehetőséget biztosít a hallgatók számára.
      </p>
      <p>
        A hagyományokhoz híven a diákok tudományos bemutatói mellett neves meghívottak előadásai színezik az esemény
        programját; mindezek mellett, a diákok számos egyedi műhelymunkán vehetnek részt. A TDK-t a díjkiosztó és az
        ünnepi gálavacsora zárja.
      </p>
      <p>
        A rendezvény lehetőséget nyújt mind a személyes, mind az egyetemek közötti kapcsolatok kiépítésére, illetve
        ápolására.
      </p>
      <h2>2. Az előadó diákokra vonatkozó szabályok</h2>
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
        <li>A dolgozatok szakmai értékelésen esnek át. A dolgozat elutasítható, ha:</li>
        <ol>
          <li>a dolgozat már bemutatásra került bármilyen hazai vagy nemzetközi konferencián;</li>
          <li>a TDT nem tulajdonít a dolgozatnak megfelelő tudományos értéket.</li>
        </ol>
        <li>
          A benevezési díj az aktuális évben a főszervezők által meghatározott összeg, amely magába foglalja az
          iratkozást, az ünnepi gálavacsorán való részvétel díját, illetve a promóciós anyagokból álló ajándékcsomagot.
        </li>
        <li>
          A benevezési díjat a Marosvásárhelyi Magyar Diákszövetség Székházában vagy az MMDSZ bankszámlaszámlájára
          átutalva lehet befizetni.
        </li>
        <li>
          Sikeres iratkozás a kivonat helyes feltöltésével, a kivonat TDT általi jóváhagyásával és a publikációs díj
          időben való befizetésével, illetve a saját <a href={contributionDoc}>hozzájárulási nyilatkozat</a> és
          publikációs nyilatkozat feltöltésével történik.
        </li>
        <li>
          Ha egy dolgozatot a főszerző objektív okok miatt nem tud bemutatni, kötelessége ezt legkésőbb egy héttel a
          konferencia kezdete előtt e-mailben (<a href="mailto:tdk@mmdsz.ro">tdk@mmdsz.ro</a>) jelezni a megadott{" "}
          <a href={presentationRightsDoc}>formanyomtatvány</a> kitöltésével. A főszerző motivációja alapján, amennyiben
          a főszervezők úgy ítélik meg, a témavezető által támogatott társszerző is bemutathatja a dolgozatot.
        </li>
      </ol>
      <h3>2.3. Előadások és poszterbemutatók</h3>
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
        szekció megkezdése előtt lehetséges, kivéve, ha kevesebb, mint négy tagból áll. A bizottság akármilyen
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
        <li>4-6 külföldi dolgozat: 2 különdíj</li>
        <li>7 vagy több külföldi dolgozat: 3 különdíj</li>
        <li>A szekciónkénti hazai díjak megosztása a következő:</li>
        <li>6 vagy kevesebb hazai dolgozat: 1. díj</li>
        <li>7 - 9 hazai dolgozat: 1 - 2. díj</li>
        <li>10 - 15 hazai dolgozat: 1 - 2 - 3. díj</li>
        <li>16 - 20 hazai dolgozat: 1 - 2 - 3. díj és 1. dicséret</li>
        <li>20 hazai dolgozaton felül: 1 - 2 - 3. díj, 1. és 2. dicséret</li>
      </ul>
      <p>Hatnál kevesebb dolgozat (határon túli és hazai együttesen) nem képezhet önálló témakört.</p>
      <p>
        Kevesebb mint 6 hazai dolgozat esetén, amennyiben az elbíráló bizottság nem találja a dolgozatokat díjazásra
        méltónak, nem köteles helyezéseket osztani. Egy diák egy adott szekción belül legfeljebb egy helyezést érhet el,
        a bemutatott dolgozatok számától függetlenül.
      </p>
      <p>
        <strong>A digitális bemutatókra vonatkozóan:</strong>
      </p>
      <p>
        Az előadás digitális változatát Power Point bemutató formájában (.pptx kiterjesztésben) kérjük egy adathordozó
        eszközön hozni a szekció előtt, a főszervezők által meghatározott időre. A bemutató (Power Point) címe a
        főszerző nevét kell tartalmazza, úgy ahogyan a személyi igazolványában szerepel, ékezetek nélkül (pl. Kerekes
        Janos.pptx). A bemutató utolsó képkockájának tartalmaznia kell a dolgozathoz való saját hozzájárulást.
      </p>
      <p>A bemutató utolsó képkockájának tartalmaznia kell a dolgozathoz való saját hozzájárulást.</p>
      <p>
        <strong>A poszter bemutatókra vonatkozóan:</strong>
      </p>
      <p>
        A poszteren szükséges szerepelnie az alábbiaknak: a 32. Tudományos Diákköri Konferencia - Marosvásárhely,
        keltezés, a szerző(k) család- és keresztneve, illetve egyetemének adatai (egyetem, kar, szak, évfolyam); a
        témavezető(k) család- és keresztneve, tudományos fokozata, illetve egyetemének (egyetem, kar, tanszék) vagy
        intézményének (intézmény, beosztás) adatai, a főszerző egyetemének logója.
      </p>
      <p>
        Tartalmi szempontból a poszter kötelező elemei a következők: bevezetés, anyag és módszer, eredmények,
        (megbeszélés), következtetés. Ezen részek kötelező módon kell szerepeljenek összefoglalt, tömör szöveg, adatok
        és ábrák, képek formájában.
      </p>
      <p>
        A megbeszélés rész feltüntetése opcionális, ezt a poszter bemutatása alatt elég szóban is kifejtenie a
        szerzőnek.
      </p>
      <p>
        A1 méretben adandó le, minimális betűméret cím esetén 90 pt, szöveg esetén 30 pt, illetve a vázát a 32. TDK
        arculatával ellátott <a href={posterSectionZip}>sablon</a> adja, amelyet a résztvevők rendelkezésére bocsátunk.
      </p>
      <p>A bemutatandó poszterek a konferencia állandó kiállítását fogják képezni.</p>
      <p>
        A poszter digitális változatát PDF formájában kérjük egy adathordozó eszközön hozni a szekció előtt, a
        főszervezők által meghatározott időre; ez a verzió kerül majd bemutatásra.
      </p>
      <p>
        A poszterszekcióba történő jelentkezéskor a kész absztraktot valamint a saját hozzájárulási és publikációs
        nyilatkozatot a honlapra kérjük feltölteni a megadott dátumig. Emellett a{" "}
        <strong>bemutató diák köteles a posztert fizikai formában</strong> (az előre meghatározott formai
        követelményeknek megfelelően) magával hozni a szervezők által meghatározott időpontra.
      </p>
      <p>
        A poszter szekcióban bemutatott dolgozatok kivonata, az előadás szekció dolgozatainak kivonataihoz hasonlóan és
        velük egyidőben töltendő fel.
      </p>
      <p>
        A dolgozatok bemutatása betűrendben történik, a főszerzők családnevének kezdőbetűje szerint. Ettől a sorrendtől
        abban az esetben tekintünk el, ha két dolgozat témája közös és ezt a diák a bemutató előtt egy héttel jelzi.
        Továbbá, ha egy diák különböző szekciókban több dolgozatot is be kell mutasson, és az időpontok ütköznek, a
        sorrend módosítható. Egyéb, jól megindokolt esetekben a főszervezők dönthetnek a sorrend megváltoztatásáról.
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
        tag(ok) az adott dolgozat témavezetője).
      </p>
      <h3>SZEMPONT ÉS ADHATÓ PONTSZÁM</h3>
      <div className="border-2 border-neutral-800">
        <img src={rules} />
      </div>
      <ol>
        <li>
          A TUDOMÁNYOS KÉRDÉS MEGFOGALMAZÁSA, KIDOLGOZÁSA (a tanulmány alapjául szolgáló tudományos kérdés érthető
          megfogalmazása) 1-20 pont
        </li>
        <li>
          EREDMÉNYEK, MÓDSZERTAN (módszerek helyes megválasztása és leírásának pontossága; az elért eredmények
          ismertetése és értelmezése; az adatok megfelelő statisztikai feldolgozása) 1-20 pont
        </li>
        <li>
          ELŐADÓKÉSZSÉG, VITAKÉSZSÉG, SZAKMAI TÁJÉKOZOTTSÁG (világos okfejtés, érthető kidolgozás, előadásmód, témában
          való jártasság) 1-20 pont
        </li>
        <li>EGYÉNI HOZZÁJÁRULÁS (szerzői hozzájárulás mértéke) 1-20 pont</li>
        <li>
          TUDOMÁNYOS NYELVEZET HELYESSÉGE, KIVONAT MINŐSÉGE (tudományos nyelvezet használata, háttérismeretek,
          nyelvhelyesség, helyesírás) 1-20 pont
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
        <p>A TDT egyetemi oktatókból, a TDK főszervezőiből és az MMDSZ elnökéből álló tanács.</p>
        <h3>4.1 A TDT feladata:</h3>
        <li>A TDT a Tudományos Diákköri Konferencia védnöke.</li>
        <li>A TDT átnézi a dolgozatok kivonatait, ellenőrzi azok helyességét.</li>
        <li>
          Átcsoportosítja a dolgozatokat témaköröknek megfelelően abban az esetben, ha az tematikájában nem a megjelölt
          szekcióba illeszkedik.
        </li>
        <li>Kiválasztja az elbíráló bizottság tagjait.</li>
        <li>Létrehozhat új szekciókat, meglévőket összevonhat vagy tagolhat.</li>
        <li>Segít a konferencia ideje alatt felmerülő vitás kérdések megoldásában.</li>
      </ul>
      <h2>5. A TDK szervezői</h2>
      <p>
        A Marosvásárhelyi Magyar Diákszövetség tagjai közül kerülnek ki a főszervezők, illetve a szervezők, akik az
        alábbi munkacsoportokba szerveződnek: akkreditáció, díjak, étkezés, fotó, gála, infóiroda, korrektúra és
        kivonatok, külügy, média és kommunikáció, műhelymunkák, pontozás, protokoll, szállítás, szponzor, technika,
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
        szervezők felvétele pontrendszer és motivációs levél alapján történik. A pontrendszer az MMDSZ Belső Működési
        Szabályzatán (BMSZ) alapszik.
      </p>
      <p>
        A TDK főszervezők megválasztják a munkacsoport vezetőket és tagokat, meghatározzák a munkacsoportok tagjainak
        számát és tevékenységét, jogukban áll a tevékenységet ellenőrizni, a feladatokat számon kérni.
      </p>
      <p>
        A munkacsoport vezetőknek jogában áll számon kérni a munkacsoport tagjainak tevékenységét. A TDK főszervezői
        csakis akkor állítanak ki a szervezőknek önkéntességüket igazoló okiratot, ha azok szervezői kötelességeiknek
        maradéktalanul eleget tettek.
      </p>
      <p>Minden szervező részesül az aktuális promóciós csomagból.</p>
      <p>
        A szervezői jelentkezés során megjelölt munkacsoport csak irányadó a főszervezők számára. A főszervezők
        fenntartják a jogot arra, hogy a jelentkezőt ettől eltérően más munkacsoportba sorolják be.
      </p>
      <p>
        A szponzor munkacsoport egy előre meghatározott csapat, amely egész éves munkát végez a Diákszövetség számára,
        és ennek részeként a konferenciához kapcsolódó feladatokat is ők látják el.
      </p>
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
        A szervezők kötelesek a konferencia alatt vagy annak elő- és utómunkálatai során felmerülő problémákról
        értesíteni a TDK főszervezőket, nem hozhatnak döntéseket egyeztetés nélkül.
      </p>
      <p>A szervezők kötelesek részt venni a konferencián, bizalmasan kezelni a belső információkat.</p>
      <p>A szervezők a TDK alatt kötelesek részt venni legkevesebb 2 felkért előadó előadásán.</p>
      <p>A munkacsoportok vezetői kötelesek számon tartani a helyszínen tartózkodó szervezők kilétét.</p>
      <p>A munkacsoport vezetők beszámolót írnak a konferencia kiértékelő gyűlésére.</p>
      <h2>6. Országos Tudományos Diákköri Konferencia (OTDK)</h2>
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
        érdemesnek, nem köteles jelölést adnia. Poszter szekcióból nem történik jelölés.
      </p>
      <h2>7. Egyéb:</h2>
      <p>
        Bármilyen felmerülő kérdés vagy probléma esetén kérjük vegyék fel a kapcsolatot a TDK főszervezőivel
        személyesen, telefonon vagy az alábbi e-mail címen:
        <a target="_blank" href="mailto:tdk@mmdsz.ro">
          <span> tdk@mmdsz.ro</span>.{" "}
        </a>
        Minden információ megtalálható a marosvásárhelyi TDK hivatalos honlapján:{" "}
        <a href="https://tdk.mmdsz.ro" target="_blank">
          tdk.mmdsz.ro
        </a>
        .
      </p>
    </div>
  );
};

export default withLayout(Rules);

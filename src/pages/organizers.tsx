import { Link } from "react-router-dom";
import { withLayout } from "../layout/withLayout";
import { useRef } from "react";

const Organizers = () => {
  const signupButtonRef = useRef<HTMLAnchorElement>(null);
  return (
    <div className="px-5 py-20 md:mx-auto md:w-1/2 md:px-0">
      <h1 className="pb-20 text-center text-5xl font-bold">Szervezőknek</h1>
      <p className="pb-10 text-sm font-semibold text-neutral-500">
        A 31. Marosvásárhelyi Tudományos Diákköri Konferenciára való szervezői jelentekezés 2023. december 6.-án
        kezdődik.{" "}
        <a
          className="cursor-pointer text-tdk-accent hover:underline"
          onClick={() => {
            signupButtonRef.current?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Tovább a jelentkezéshez →
        </a>
      </p>
      <h2 className="text-3xl font-light">Szervezői csoportok</h2>
      <div className="grid grid-cols-1 gap-y-4 gap-x-10 xl:grid-cols-2">
        <div>
          <h2 className="pt-8 text-xl font-light">Akkreditáció</h2>
          <p className="pt-4 font-light text-neutral-700">
            Az akkrediátációért felelős kiscsoport szorosan együttműködik az infóiroda kiscsoporttal. Feladata a
            helyszínre érkező és az online regisztrált oktatók, orvosok és szakemberek fogadása, részvételi diplomáinak
            kiállítása. Ez a feladatkör pontosságot és jó kiállást igényel.
          </p>
        </div>
        <div>
          <h2 className="pt-8 text-xl font-light">Díjak</h2>
          <p className="pt-4 font-light text-neutral-700">
            Ezen kiscsoport tagjai gondoskodnak a konferencia előtt a díjak és virágok beszerzéséről, összeállításáról,
            illetve elosztásáról. Záróünnepség előtt ők csomagolják be a díjakat, amiket előkészítenek az átadásra, és
            eljuttatják annak helyszínére.
          </p>
        </div>
        <div>
          <h2 className="pt-8 text-xl font-light">Étkezés</h2>
          <p className="pt-4 font-light text-neutral-700">
            Az étkezésért felelős szervezők rendezvény előtti feladata a bevásárlás. Rendezvény alatt ők azok, akik
            reggelente megkenik a szendvicseket, felelnek azért, hogy ezek kijussanak a helyszínre, majd ott napközben a
            büfé asztal mögül kiszolgálják a résztvevőket (szervezők, oktatók, meghívottak) szendviccsel, kiflivel,
            kávéval, teával és vízzel. Az étkezéssel kapcsolatos utómunkák szintén a kiscsoport feladatkörébe tartoznak.
          </p>
        </div>
        <div>
          <h2 className="pt-8 text-xl font-light">Fotó</h2>
          <p className="pt-4 font-light text-neutral-700">
            A fotósok örökítik meg a rendezvény mozzanatait. Kiválogatják és megszerkesztik a képeket, amik kikerülnek
            az online platformokra. Előnyös, ha ezen személyek rendelkeznek saját felszereléssel és jártasak a
            fotózásban.
          </p>
        </div>
        <div>
          <h2 className="pt-8 text-xl font-light">Gála</h2>
          <p className="pt-4 font-light text-neutral-700">
            A rendezvény megkoronázása a gála. Ezen kiscsoport tagjai felelnek a gála megálmodásáért és
            megvalósításáért. Rendezvény alatt feladatuk az oktatók fogadása és asztalhoz kísérése, illetve ők
            ellenőrzik, hogy csak jogosult személyek vehessenek részt az estélyen.
          </p>
        </div>
        <div>
          <h2 className="pt-8 text-xl font-light">Infóiroda</h2>
          <p className="pt-4 font-light text-neutral-700">
            Már a rendezvény előtt van feladatuk, válogatják és rendezik a kitűzőket, összeállítják az
            ajándékcsomagokat. A rendezvény alatt regisztrációs és információs pontot működtetnek. Ezen kiscsoport
            tagjai az ülésvezetők mellett szintén a rendezvény arcait képezik, hiszen sokszor a konferencia első
            benyomása hozzájuk köthető, ők azok akik mindenkinek információkat, eligazítást nyújtanak.
          </p>
        </div>
        <div>
          <h2 className="pt-8 text-xl font-light">Korrektúra és kivonatok</h2>
          <p className="pt-4 font-light text-neutral-700">
            A korrektúrás kiscsoport legfőbb feladata egységes küllemet biztosítani a beérkezett dolgozatoknak. A
            munkaidő teljes mértékben a rendezvény előttre korlátozódik és főként szövegszerkesztési munkát foglal
            magába. Ezáltal fontossá válik a számítógép kezelési alapok ismerete (Microsoft Word és Dropbox programok
            használata), valamint helyesírási hibák észrevételére való hajlam. Az alapos és szorgalmas munkát kedvelő
            személyek ideális szervezési lehetősége ez.
          </p>
        </div>
        <div>
          <h2 className="pt-8 text-xl font-light">Külügy</h2>
          <p className="pt-4 font-light text-neutral-700">
            Ez a kiscsoport felel a külföldi bemutató diákok szabadidős tevékenységéért. Feladatuk a különböző közösségi
            programok megszervezése és lebonyolítása (pl városnézés, ismerkedés, kulturális programok).
          </p>
        </div>
        <div>
          <h2 className="pt-8 text-xl font-light">Média és kommunikáció</h2>
          <p className="pt-4 font-light text-neutral-700">
            Ez a kiscsoport végzi az összes közösségi média platformon megjelenő információ megtervezését, megírását és
            közlését, Facebook- és Instagram oldalát. Ugyancsak ebbe a csoportba tartozó emberek tartják a kapcsolatot a
            sajtóval, szervezik meg a sajtótájékoztatót, és intézik a tudósítást a rendezvény előtt, alatt és után.
          </p>
        </div>
        <div>
          <h2 className="pt-8 text-xl font-light">Műhelymunkák</h2>
          <p className="pt-4 font-light text-neutral-700">
            A workshopok szervezése talpraesettséget és kreativitást kíván. A váratlan helyzetek megoldása elvárás a
            szervezőktől. A pontosság és jó kommunikációs készség pedig elengedhetetlen az események gördülékeny
            lezajlásához. A különböző egyetemi oktatók és helyszínek ismerete, valamint a kérvények és egyeztetések
            világában való jártasság mindenképpen előnyére válhat bármely workshopszervezőnek. Ezen kiscsoport
            feladatköréhez tartozik az oktatók felkérése a műhelymunkákhoz, a szükséges eszközök beszerzése és
            biztosítása, valamint a helyszínen jelenlevők összeírása.
          </p>
        </div>
        <div>
          <h2 className="pt-8 text-xl font-light">Pontozás</h2>
          <p className="pt-4 font-light text-neutral-700">
            Ez a kiscsoport segít az előadó diákok bemutatóinak rangsorolásában. Ők készítik elő a pontozó lapokat a
            rendezvény előtt a szekcióknak megfelelően. Rendezvény közben a pontozó lapokat, névtáblákat eljuttatják az
            adott ülésre, illetve ők egyesítik a pontokat.
          </p>
        </div>
        <div>
          <h2 className="pt-8 text-xl font-light">Szállító</h2>
          <p className="pt-4 font-light text-neutral-700">
            A szállító kiscsoporthoz, a nevéből adódóan a szállítás tartozik. Ők azok, akik a rendezvény előtt, alatt és
            után az eseményhez szükséges kellékek szállítását végzik. Fontos megjegyezni, hogy a szállítás magába
            foglalja az egyik helyszínen a kellék bepakolását és a másik helyszínen ezek kipakolását is. Ezen kiscsoport
            csatlakozásához szükséges a jogosítvány és az autó. Természetesen a szervezés ideje alatt elhasznált
            üzemanyag költségeit megtérítjük.
          </p>
        </div>
        <div>
          <h2 className="pt-8 text-xl font-light">Szponzor</h2>
          <p className="pt-4 font-light text-neutral-700">
            A szponzor kiscsoport feladatkörébe tartozik a szponzorokkal való kapcsolattartás. Rendezvény előtt ők
            keresik fel a támogatókat, a támogatás adminisztratív részét lebonyolítják és elhozzák a roll-up-okat,
            bannereket a cégektől és a konferencia lejárta után visszajuttatják ezen kellékeket.
          </p>
        </div>
        <div>
          <h2 className="pt-8 text-xl font-light">Technika</h2>
          <p className="pt-4 font-light text-neutral-700">
            A technikás kiscsoport tagjai azok a szervezők, akik irányítják az előadások háttér feladatait: felszerelik
            és kezelik a videóprojektorokat, biztosítják az előadó diákok, valamint a meghívottak előadásainak technikai
            hátterét. A rendezvény előtt összeírják a kellő mennyiségű technikai eszközök listáját, beszerzik,
            ellenőrzik és összeállítják őket. A rendezvény ideje alatt ők felelnek a technikai eszköztárért, valamint az
            esemény után mindezeket rendberakják.
          </p>
        </div>
        <div>
          <h2 className="pt-8 text-xl font-light">Teremrendezés</h2>
          <p className="pt-4 font-light text-neutral-700">
            A teremrendezés kiscsoport szervezői a helyszínért felelősek. Ehhez hozzátartozik a termekben lévő kellékek
            beszerzése és a rendezvény ideje alatt be-, illetve elpakolása. Ugyanakkor a roll-upok, a pop-up, a székek,
            asztalok, virágok egyik teremből a másikba való áthordása, és a teremrendezés alatt felhasznált kellékek
            épségének megőrzése, az elbíráló bizottság számára víz és pohár biztosítása.
          </p>
        </div>
        <div>
          <h2 className="pt-8 text-xl font-light">Tördelés</h2>
          <p className="pt-4 font-light text-neutral-700">
            Ezen kiscsoport feladata az Orvostudományi Értesítőben megjelenő absztraktok tördelése. A munkaidő teljes
            mértékben a rendezvény előttre korlátozódik.
          </p>
        </div>
        <div>
          <h2 className="pt-8 text-xl font-light">Ülésvezetés</h2>
          <p className="pt-4 font-light text-neutral-700">
            Az ülésvezetők az előadások moderátorai. Ők azok akik felkonferálják az előadó diákokat és a meghívott
            előadókat, valamint levezénylik az ülésszakokat (szekciókat). Ezen szervezők olyan személyek, akik jó
            beszédkészséggel, színpadi kiállással, problémamegoldó készséggel rendelkeznek, elegáns megjelenésűek, hisz
            a konferencia arcaiként ismertek. Ők adják át az előadó diákoknak, valamint a meghívott előadóknak a
            részvételért járó ajándékcsomagot. Munkaidejük többnyire a rendezvény idejére tehető.
          </p>
        </div>
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
      <div className="flex justify-center py-16" id="jelentkezes">
        <Link
          to="/szervezoi-jelentkezes"
          className="rounded-full bg-tdk-accent px-10 py-4 font-semibold uppercase text-white drop-shadow-md hover:underline xl:text-xl"
          ref={signupButtonRef}
        >
          Jelentkezz szervezőnek →
        </Link>
      </div>
    </div>
  );
};

export default withLayout(Organizers);

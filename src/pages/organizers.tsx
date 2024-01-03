import { withLayout } from "../layout/withLayout";
import { organizerGroups } from "../constants";

const Organizers = () => {
  return (
    <div className="px-5 py-20 md:px-10 lg:px-20">
      <h1 className="pb-20 text-center text-5xl font-bold">Szervezőknek</h1>
      <div className="grid grid-cols-1 justify-items-stretch gap-10 py-8 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        <div className="px-5 py-8 md:px-10">
          <h2 className="py-5 text-xl font-light">Akkreditáció</h2>
          <ul className="pl-5 list-disc">
            <li className="font-bold">Römer Ambrus Júlia</li>
            <li>Boros Andrea-Brigitta</li>
            <li>Cozma Paula-Sophia</li>
            <li>Kakasi András</li>
            <li>Márton Tamás</li>
          </ul>
          <p className="pt-5 text-sm font-light">
            Az akkrediátációért felelős kiscsoport szorosan együttműködik az Infóiroda kiscsoporttal. Feladata a
            helyszínre érkező és az online regisztrált oktatók, orvosok és szakemberek fogadása, részvételi diplomáinak
            kiállítása és ezek eljuttatása a konferenciát követően a megfelelő személyekhez. Ez a feladatkör pontosságot
            és jó kiállást igényel.
          </p>
        </div>
        <div className="px-5 py-8 md:px-10">
          <h2 className="py-5 text-xl font-light">Díjak</h2>
          <ul className="pl-5 list-disc">
            <li className="font-bold">Sándor Lilla</li>
            <li className="font-bold">Tófalvi Ágnes </li>
            <li>Kovács Ágnes</li>
            <li>Kovács Katalin</li>
            <li>Szabó Antónia</li>
            <li>Szabó-Benedek Nóra</li>
          </ul>
          <p className="pt-5 text-sm font-light">
            Ezen kiscsoport tagjai gondoskodnak a konferencia előtt a díjak és virágok beszerzéséről, összeállításáról,
            illetve elosztásáról. Záróünnepség előtt ők csomagolják be a díjakat, amiket előkészítenek az átadásra és
            eljuttatják annak helyszínére.
          </p>
        </div>
        <div className="px-5 py-8 md:px-10">
          <h2 className="py-5 text-xl font-light">Étkezés</h2>
          <ul className="pl-5 list-disc">
            <li className="font-bold">Demeter Orsolya</li>
            <li className="font-bold">Mărmureanu-Biró Krisztina</li>
            <li>Albert Anikó</li>
            <li>Aszalos Krisztina-Eszter</li>
            <li>Borsos Eszter Kinga</li>
            <li>Ercei Boglárka</li>
            <li>Mate Zsófia</li>
            <li>Sándor Emőke Ágnes</li>
            <li>Szántó Sarolta</li>
            <li>Varga Ágnes</li>
          </ul>
          <p className="pt-5 text-sm font-light">
            Az étkezésért felelős szervezők rendezvény előtti feladata a bevásárlás. Rendezvény alatt ők azok, akik
            reggelente megkenik a szendvicseket, felelnek azért, hogy ezek kijussanak a helyszínre, majd ott napközben a
            büfé asztal mögül kiszolgálják a résztvevőket (szervezők, oktatók, meghívottak) szendviccsel, kiflivel,
            kávéval, teával és vízzel. Az étkezéssel kapcsolatos utómunkák szintén a kiscsoport feladatkörébe tartoznak.
          </p>
        </div>
        <div className="px-5 py-8 md:px-10">
          <h2 className="py-5 text-xl font-light">Fotó</h2>
          <ul className="pl-5 list-disc">
            <li className="font-bold">Adlevák Dóra</li>
            <li>Ábrahám Ákos</li>
            <li>Csegzi Andrea</li>
            <li>Demeter Róbert</li>
            <li>Kántor Renáta</li>
            <li>Molnár Csaba</li>
            <li>Parajdi Kata-Zsófia</li>
            <li>Péter Anita</li>
            <li>Sófalvi Szidónia</li>
            <li>Szász Krisztián</li>
            <li>Török Tina Erika</li>
          </ul>
        </div>
        <div className="px-5 py-8 md:px-10">
          <h2 className="py-5 text-xl font-light">Gála</h2>
          <ul className="pl-5 list-disc">
            <li className="font-bold">Miklósi Réka</li>
            <li className="font-bold">Timár Oren</li>
            <li>Balázs Hanna</li>
            <li>Cozan-Zoltan Jenyfer-Crista</li>
            <li>Gáll Nóra</li>
            <li>Somorai Tamás</li>
            <li>Stekbauer Anett</li>
          </ul>
          <p className="pt-5 text-sm font-light">
            A rendezvény megkoronázása a gála. Ezen kiscsoport tagjai felelnek a gála megálmodásáért és
            megvalósításáért. Rendezvény alatt feladatuk az oktatók fogadása és asztalhoz kísérése, illetve ők
            ellenőrzik, hogy csak jogosult személyek vehessenek részt az estélyen.
          </p>
        </div>
        <div className="px-5 py-8 md:px-10">
          <h2 className="py-5 text-xl font-light">Infóiroda</h2>
          <ul className="pl-5 list-disc">
            <li className="font-bold">Ábrán Annamária</li>
            <li className="font-bold">Balázs Boglárka</li>
            <li>Adorján Johanna</li>
            <li>Bogyó Boróka</li>
            <li>Borbáth Lidia</li>
            <li>Deák Csenge</li>
            <li>Dobrai Laura</li>
            <li>Fülöp Bernadett</li>
            <li>Kinda Ágota</li>
            <li>Martinka Andrea</li>
            <li>Pakot Panna</li>
            <li>Szabó Zsuzsanna-Orsolya</li>
            <li>Szász Anita</li>
            <li>Szilveszter Andrea</li>
          </ul>
          <p className="pt-5 text-sm font-light">
            Már a rendezvény előtt feladatuk van, ők készítik elő a meghívókat az oktatóknak, válogatják és rendezik a
            kitűzőket, állítják össze az ajándékcsomagokat. A rendezvény alatt regisztrációs és információs pontot
            működtetnek. Ezen kiscsoport tagjai az ülésvezetők mellett szintén a rendezvény arcait képezik, hiszen
            sokszor a konferencia első benyomása hozzájuk köthető, ők azok akik mindenkinek információkat, eligazítást
            nyújtanak.
          </p>
        </div>
        <div className="px-5 py-8 md:px-10">
          <h2 className="py-5 text-xl font-light">Korrektúra</h2>
          <ul className="pl-5 list-disc">
            <li className="font-bold">Sebesi Hanna </li>
            <li>Biró Konrád-János</li>
            <li>Györfi Szidónia-Brigitta</li>
            <li>Márton Kincső</li>
            <li>Varga László</li>
          </ul>
          <p className="pt-5 text-sm font-light">
            A korrektúrás kiscsoport legfőbb feladata egységes, vállalható küllemet biztosítani a beérkezett
            dolgozatoknak. A munkaidő teljes mértékben a rendezvény előttre korlátozódik és főként szövegszerkesztési
            munkát foglal magába. Ezáltal fontossá válik a számítógép kezelési alapok ismerete (Microsoft Word és
            Dropbox programok használata), valamint helyesírási hibák észrevételére való hajlam. Az alapos és szorgalmas
            munkát kedvelő személyek ideális szervezési lehetősége ez.
          </p>
        </div>
        <div className="px-5 py-8 md:px-10">
          <h2 className="py-5 text-xl font-light">Média és kommunikáció</h2>
          <ul className="pl-5 list-disc">
            <li className="font-bold">Ferencz Gergő</li>
            <li className="font-bold">Nagy Nóra</li>
            <li>Dakó Diána</li>
            <li>Debrenti Réka-Lilla</li>
            <li>Czimbalmos Eszter-Réka</li>
            <li>Sánta Máté-Levente</li>
            <li>Török Andrea</li>
          </ul>
          <p className="pt-5 text-sm font-light">
            Ez a kiscsoport végzi az összes közösségi média platformon megjelenő információ megtervezését, megírását és
            közlését, Facebook- és Instagram oldalát. Ugyancsak ebbe a csoportba tartozó emberek tartják a kapcsolatot a
            sajtóval, szervezik meg a sajtótájékoztatót és intézik a tudósítást a rendezvény előtt, alatt és után.
          </p>
        </div>
        <div className="px-5 py-8 md:px-10">
          <h2 className="py-5 text-xl font-light">Pontozás</h2>
          <ul className="pl-5 list-disc">
            <li className="font-bold">Budik Kriszta-Andrea</li>
            <li>Antal Anita-Mária</li>
            <li>Bogyó Barbara</li>
            <li>Erőss Anna</li>
            <li>Farkas Eszter</li>
            <li>Kacsó Eszter</li>
            <li>Kajcsa Anett-Antónia</li>
            <li>Karácsony Orsolya</li>
            <li>Kürti Krisztina</li>
            <li>Szabó Orsolya</li>
            <li>Tövissi Szilvia</li>
          </ul>
          <p className="pt-5 text-sm font-light">
            Ez a kiscsoport segít az előadó diákok bemutatóinak rangsorolásában. Ők készítik elő a pontozó lapokat a
            rendezvény előtt a szekcióknak megfelelően. Rendezvény közben a pontozó lapokat, névtáblákat eljuttatják az
            adott ülésre, ők egyesítik a pontokat, megszerkesztik az okleveleket, kinyomtatják őket és ők adják át a
            díjakért felelős kiscsoport vezetőknek.
          </p>
        </div>
        <div className="px-5 py-8 md:px-10">
          <h2 className="py-5 text-xl font-light">Protokoll</h2>
          <ul className="pl-5 list-disc">
            <li>Cseke Krisztina</li>
            <li>Deák Gellért Gedeon</li>
            <li>Kiss Boglárka</li>
            <li>Márton Kincső</li>
            <li>Miklós Mátyás-Levente</li>
            <li>Orbán Zsófia</li>
            <li>Szabó Stefánia</li>
            <li>Zsidó Imola</li>
          </ul>
        </div>
        <div className="px-5 py-8 md:px-10">
          <h2 className="py-5 text-xl font-light">Külügy</h2>
          <ul className="pl-5 list-disc">
            <li className="font-bold">Pándi Aliz</li>
            <li>Koszta-Demeter Anna</li>
            <li>Márton Kinga</li>
            <li>Szigyártó Anita</li>
          </ul>
        </div>
        <div className="px-5 py-8 md:px-10">
          <h2 className="py-5 text-xl font-light">Szponzor</h2>
          <ul className="pl-5 list-disc">
            <li className="font-bold">Bonda Boglár</li>
            <li>Balázs Boglárka</li>
            <li>Cozma Paula-Sophia</li>
            <li>Csiki-Péter Szidónia</li>
            <li>Demeter Orsolya</li>
            <li>Gáll Nóra</li>
            <li>Györfi Szidónia-Brigitta</li>
            <li>Ilyés Norbert-István</li>
            <li>Timár Oren</li>
            <li>Toth Robert Szabolcs</li>
            <li>Varga Alexandra</li>
          </ul>
          <p className="pt-5 text-sm font-light">
            A szponzor kiscsoport feladatkörébe tartozik a szponzorokkal való kapcsolattartás. Rendezvény előtt ők
            keresik fel a támogatókat, támogatás adminisztratív részét lebonyolítják és elhozzák a roll-up-okat,
            bannereket a cégektől és a konferencia lejárta után visszajuttatják ezen kellékeket.
          </p>
        </div>
        <div className="px-5 py-8 md:px-10">
          <h2 className="py-5 text-xl font-light">Technika</h2>
          <ul className="pl-5 list-disc">
            <li className="font-bold">Fodor Csanád</li>
            <li className="font-bold">Tischler Hunor</li>
            <li>András Krisztián</li>
            <li>Bakó Naomi-Zsuzsanna</li>
            <li>Balázs Márton</li>
            <li>Csapó Gergő</li>
            <li>Gál Zsombor-Zalán</li>
            <li>Garda Greta-Monika</li>
            <li>György-Fazakas Borbála</li>
            <li>Jankó-Szép Ákos-Sándor</li>
            <li>Kiss Anita</li>
            <li>Kiss Balázs</li>
            <li>Kővari David-Dominik</li>
            <li>Sándor Deborah-Barbara</li>
            <li>Sántha Mátyás</li>
            <li>Szathmári Szonja-Szilvia</li>
            <li>Ugron Ákos-Bence</li>
            <li>Veress Károly-Tamás</li>
          </ul>
          <p className="pt-5 text-sm font-light">
            A technikás kiscsoport tagjai azok a szervezők, akik irányítják az előadások háttér feladatait: felszerelik
            és kezelik a videóprojektorokat, biztosítják az előadó diákok, valamint a meghívottak előadásainak technikai
            hátterét. A rendezvény előtt összeírják a kellő mennyiségű technikai eszközök listáját, beszerzik,
            ellenőrzik és összeállítják őket. A rendezvény ideje alatt ők felelnek a technikai eszköztárért, valamint az
            esemény után mindezeket rendberakják.
          </p>
        </div>
        <div className="px-5 py-8 md:px-10">
          <h2 className="py-5 text-xl font-light">Teremrendezés</h2>
          <ul className="pl-5 list-disc">
            <li className="font-bold">Adorján Előd</li>
            <li className="font-bold">Ambrus Beáta</li>
            <li>Barna-Kund Portik</li>
            <li>Csiki Réka</li>
            <li>Elekes Péter</li>
            <li>Fórika Ferenc-Botond</li>
            <li>Gedő Andrea</li>
            <li>Geréd Ádám</li>
            <li>Ilyés Kincső-Annamária</li>
            <li>Kovács Krisztián</li>
            <li>Lukács Adél</li>
            <li>Piri Szilvia-Izabella</li>
            <li>Sánta Dániel</li>
            <li>Sita Dávid</li>
            <li>Todor Krisztián</li>
            <li>Zsombori Zalán</li>
          </ul>
          <p className="pt-5 text-sm font-light">
            A teremrendezés kiscsoport szervezői a helyszínért felelősek. Ehhez hozzátartozik minden, a termekben lévő
            kellék beszerzése és a rendezvény ideje alatt be-, illetve elpakolása. Ugyanakkor a roll-upok, a pop-up, a
            székek, asztalok, virágok egyik teremből a másikba való áthordása és a teremrendezés alatt felhasznált
            kellékek épségének megőrzése is ezen kiscsoport feladatához tartozik. Nem utolsó sorban az elbíráló
            bizottság számára víz, pohár, nasi biztosítása.
          </p>
        </div>
        <div className="px-5 py-8 md:px-10">
          <h2 className="py-5 text-xl font-light">Tördelés</h2>
          <ul className="pl-5 list-disc">
            <li className="font-bold">Pap Gyopárka</li>
            <li className="font-bold">Sztáncsuj Eszter</li>
            <li>Salló Hanna-Boglárka</li>
          </ul>
        </div>
        <div className="px-5 py-8 md:px-10">
          <h2 className="py-5 text-xl font-light">Ülésvezetés</h2>
          <ul className="pl-5 list-disc">
            <li className="font-bold">Popovits Gertrúd</li>
            <li className="font-bold">Rédai Ádám</li>
            <li>Keserű Kriszta</li>
            <li>Majercsik Szilárd-Attila</li>
            <li>Puskás Bíborka</li>
            <li>Szabó Loránd-Zsolt</li>
            <li>Szabó Nándor</li>
            <li>Szász Zsolt-Kristóf</li>
            <li>Szőcs Kriszta</li>
            <li>Urkon Krisztina</li>
          </ul>
          <p className="pt-5 text-sm font-light">
            Az ülésvezetők az előadások tulajdonképpeni moderátorai. Ők azok akik felkonferálják az előadó diákokat és a
            meghívott előadókat, valamint levezénylik az ülésszakokat (szekciókat). Ezen szervezők olyan személyek, akik
            jó beszédkészséggel, színpadi kiállással, problémamegoldó készséggel rendelkeznek, elegáns megjelenésűek,
            hisz a konferencia arcaiként ismertek. Ők adják át az előadó diákoknak, valamint a meghívott előadóknak a
            részvételért járó ajándékcsomagot. Munkaidejük többnyire a rendezvény idejére tehető.
          </p>
        </div>
        <div className="px-5 py-8 md:px-10">
          <h2 className="py-5 text-xl font-light">Műhelymunkák</h2>
          <ul className="pl-5 list-disc">
            <li className="font-bold">Kocsis Imola</li>
            <li className="font-bold">Lukács Szilárd</li>
            <li>Barthi Dóra</li>
            <li>Bonda Boglár</li>
            <li>Berkeczi Blanka</li>
            <li>Czentye Anna</li>
            <li>Csiki-Péter Szidónia</li>
            <li>Deák Enikő</li>
            <li>Godra Zsanett</li>
            <li>Györffy Lilla</li>
            <li>Ilyés Norbert-István</li>
            <li>Lacz Kinga</li>
            <li>Nagy Krisztina</li>
            <li>Péter Kriszta-Enikő</li>
            <li>Szász Róbert Máté</li>
          </ul>
          <p className="pt-5 text-sm font-light">
            A workshopok szervezése talpraesettséget és kreativitást kíván. A váratlan helyzetek megoldása elvárás a
            szervezőktől. A pontosság és jó kommunikációs készség pedig elengedhetetlen az események gördülékenyen
            lezajlásához. A különböző egyetemi oktatók és helyszínek ismerete, valamint a kérvények és egyeztetések
            világában való jártasság mindenképpen előnyére válhat bármely workshopszervezőnek. Ezen kiscsoport
            feladatköréhez tartozik az oktatók felkérése a műhelymunkákhoz, a szükséges eszközök beszerzése és
            biztosítása, valamint a helyszínen jelenlevők összeírása. A rendezvényt követően ők felelősek a részvételi
            emléklapok kiküldéséért.
          </p>
        </div>
        <div className="px-5 py-8 md:px-10">
          <h2 className="py-5 text-xl font-light">Főszervezők</h2>
          <ul className="pl-5 list-disc">
            <div className="font-bold">Barcsay Zselyke</div>
            <div className="font-bold">Biró Edina-Kata</div>
            <div className="font-bold">Gál Zsuzsánna</div>
            <div className="font-bold">Geréd Ákos</div>
            <div className="font-bold">Miklós Noémi </div>
            <h2 className="-ml-5 py-5 text-xl font-light">MMDSZ elnök</h2>
            <div className="font-bold">Czink Gergő</div>
            <h2 className="-ml-5 py-5 text-xl font-light">Tiszteletbeli konzultáns elnök</h2>
            <div className="font-bold">Varga László</div>
          </ul>
        </div>
      </div>
      <h2 className="py-5 text-xl font-light">Minden szervezőre vonatkozóan</h2>
      <p className="pt-10 font-light">
        A kiscsoportok leírása csupán egy útmutató, nem tér ki minden részletre. A rendezvény szervezésének
        gördülékenysége érdekében szükség van mindenki kreativitására, önzetlen odaadására és az esetlegesen más
        csoportok kisegítésére. A szervezéssel együtt jár, hogy a rendezvény ideje alatt az összes szervező korán kel,
        elegánsan öltözködik és annyit van a helyszínen, amennyit egy sikeres Tudományos Diákköri Konferencia
        megkövetel.
      </p>
    </div>
  );
};

export default withLayout(Organizers);

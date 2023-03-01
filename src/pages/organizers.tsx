import { withLayout } from "../layout/withLayout";

const Organizers = () => {
  return (
    <div className="px-5 py-40 md:px-10 lg:px-20">
      <h1 className="pb-20 pt-20 text-center text-5xl font-bold">
        Szervezőknek
      </h1>
      <div className="grid grid-cols-1 justify-items-stretch gap-10 py-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        <div className="flex flex-col items-center justify-center rounded-lg border border-gray-300 px-5 py-8 drop-shadow-md md:px-10">
          <h2 className="py-5 text-xl font-light">Akkreditáció</h2>
          <ul className="list-disc">
            <li className="font-bold">Römer Ambrus Júlia</li>
            <li>Fodor Orsolya-Szilvia</li>
            <li>Gáll Nóra</li>
            <li>Ludescher Júlia</li>
          </ul>
          <p className="p-5 text-sm font-light">
            Az akkrediátációért felelős kiscsoport szorosan együttműködik az
            Infóiroda kiscsoporttal. Feladata a helyszínre érkező és az online
            regisztrált oktatók, orvosok és szakemberek fogadása, részvételi
            diplomáinak kiállítása és ezek eljuttatása a konferenciát követően a
            megfelelő személyekhez. Ez a feladatkör pontosságot és jó kiállást
            igényel.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border border-gray-300 px-5 py-8 drop-shadow-md md:px-10">
          <h2 className="py-5 text-xl font-light">Díjak</h2>
          <ul className="list-disc">
            <li className="font-bold">Simon Bernadett</li>
            <li className="font-bold">Tófalvi Ágnes </li>
            <li>Molnár Anita</li>
            <li>Sándor Lilla</li>
            <li>Zaval Szidónia</li>
          </ul>
          <p className="p-5 text-sm font-light">
            Ezen kiscsoport tagjai gondoskodnak a konferencia előtt a díjak és
            virágok beszerzéséről, összeállításáról, illetve elosztásáról.
            Záróünnepség előtt ők csomagolják be a díjakat, amiket előkészítenek
            az átadásra és eljuttatják annak helyszínére.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border border-gray-300 px-5 py-8 drop-shadow-md md:px-10">
          <h2 className="py-5 text-xl font-light">Étkezés</h2>
          <ul className="list-disc">
            <li className="font-bold">Barcsay Zselyke </li>
            <li className="font-bold">Mihály Vivien </li>
            <li>Boros Andrea-Brigita</li>
            <li>Demeter Orsolya</li>
            <li>Kacsó Eszter</li>
            <li>Mărmureanu-Biró Krisztina</li>
            <li>Nagy-György Erzsébet</li>
            <li>Szántó Sarolta</li>
            <li>Szőcs Alexandra</li>
          </ul>
          <p className="p-5 text-sm font-light">
            Az étkezésért felelős szervezők rendezvény előtti feladata a
            bevásárlás. Rendezvény alatt ők azok, akik reggelente megkenik a
            szendvicseket, felelnek azért, hogy ezek kijussanak a helyszínre,
            majd ott napközben a büfé asztal mögül kiszolgálják a résztvevőket
            (szervezők, oktatók, meghívottak) szendviccsel, kiflivel, kávéval,
            teával és vízzel. Az étkezéssel kapcsolatos utómunkák szintén a
            kiscsoport feladatkörébe tartoznak.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border border-gray-300 px-5 py-8 drop-shadow-md md:px-10">
          <h2 className="py-5 text-xl font-light">Fotó</h2>
          <ul className="list-disc">
            <li className="font-bold">Cseke Tibor </li>
            <li>Ábrahám Ákos</li>
            <li>Adlevak Alexandra-Dora</li>
            <li>Csegzi Andrea</li>
            <li>Jakab Alpár-István</li>
            <li>Kántor Renáta</li>
            <li>Kovács István</li>
            <li>Nagy Krisztina</li>
            <li>Nemes Eszter</li>
            <li>Szabó Apor</li>
            <li>Szász Erika</li>
            <li>Török Tina</li>
          </ul>
          <p className="p-5 text-sm font-light">
            Ezen kiscsoport tagjai gondoskodnak a konferencia előtt a díjak és
            virágok beszerzéséről, összeállításáról, illetve elosztásáról.
            Záróünnepség előtt ők csomagolják be a díjakat, amiket előkészítenek
            az átadásra és eljuttatják annak helyszínére.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border border-gray-300 px-5 py-8 drop-shadow-md md:px-10">
          <h2 className="py-5 text-xl font-light">Gála</h2>
          <ul className="list-disc">
            <li className="font-bold">Miklósi Réka</li>
            <li className="font-bold">Papp Barbara</li>
            <li>Balázs Hanna</li>
            <li>Bartos Tamara</li>
            <li>Cozan-Zoltan Jenyfer-Crista</li>
            <li>Szász Róbert Máté</li>
            <li>Szőcs Kriszta</li>
            <li>Timar Oren</li>
          </ul>
          <p className="p-5 text-sm font-light">
            A rendezvény megkoronázása a gála. Ezen kiscsoport tagjai felelnek a
            gála megálmodásáért és megvalósításáért. Rendezvény alatt feladatuk
            az oktatók fogadása és asztalhoz kísérése, illetve ők ellenőrzik,
            hogy csak jogosult személyek vehessenek részt az estélyen.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border border-gray-300 px-5 py-8 drop-shadow-md md:px-10">
          <h2 className="py-5 text-xl font-light">Infóiroda</h2>
          <ul className="list-disc">
            <li className="font-bold">Ábrán Annamária</li>
            <li className="font-bold">Csíki Mária-Bernadett</li>
            <li>Simó Andrea</li>
            <li>Biró Edina-Kata</li>
            <li>Bogyó Boróka</li>
            <li>Borbély Barbara</li>
            <li>Csatlós Zsanett-Timea</li>
            <li>Czimbalmos Eszter-Réka</li>
            <li>Géder Dóra-Szilvia</li>
            <li>Nagy Réka</li>
            <li>Péter Kriszta-Enikő</li>
            <li>Stekbauer Anett</li>
            <li>Szabó Zsuzsanna-Orsolya</li>
            <li>Szilveszter Andrea</li>
          </ul>
          <p className="p-5 text-sm font-light">
            Már a rendezvény előtt feladatuk van, ők készítik elő a meghívókat
            az oktatóknak, válogatják és rendezik a kitűzőket, állítják össze az
            ajándékcsomagokat. A rendezvény alatt regisztrációs és információs
            pontot működtetnek. Ezen kiscsoport tagjai az ülésvezetők mellett
            szintén a rendezvény arcait képezik, hiszen sokszor a konferencia
            első benyomása hozzájuk köthető, ők azok akik mindenkinek
            információkat, eligazítást nyújtanak.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border border-gray-300 px-5 py-8 drop-shadow-md md:px-10">
          <h2 className="py-5 text-xl font-light">Kirándulás</h2>
          <ul className="list-disc">
            <li className="font-bold">Pándi Aliz</li>
            <li>Kinda Ágota</li>
            <li>Kovács Kamilla</li>
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border border-gray-300 px-5 py-8 drop-shadow-md md:px-10">
          <h2 className="py-5 text-xl font-light">Korrektúra és kivonatok</h2>
          <ul className="list-disc">
            <li className="font-bold">Sebesi Hanna </li>
            <li>Nagy Dávid-Márk</li>
            <li>Kajtár Henrietta</li>
            <li>Simon Hanna-Fatime</li>
            <li>Török Andrea</li>
          </ul>
          <p className="p-5 text-sm font-light">
            A korrektúrás kiscsoport legfőbb feladata egységes, vállalható
            küllemet biztosítani a beérkezett dolgozatoknak. A munkaidő teljes
            mértékben a rendezvény előttre korlátozódik és főként
            szövegszerkesztési munkát foglal magába. Ezáltal fontossá válik a
            számítógép kezelési alapok ismerete (Microsoft Word és Dropbox
            programok használata), valamint helyesírási hibák észrevételére való
            hajlam. Az alapos és szorgalmas munkát kedvelő személyek ideális
            szervezési lehetősége ez.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border border-gray-300 px-5 py-8 drop-shadow-md md:px-10">
          <h2 className="py-5 text-xl font-light">Média és kommunikáció</h2>
          <ul className="list-disc">
            <li className="font-bold">Kiss Boglárka</li>
            <li>Dakó Diána</li>
            <li>Ferencz Gergő</li>
            <li>Kozsokár Hanna</li>
            <li>Miklós Mátyás Levente</li>
            <li>Nagy Nóra</li>
          </ul>
          <p className="p-5 text-sm font-light">
            Ez a kiscsoport végzi az összes közösségi média platformon megjelenő
            információ megtervezését, megírását és közlését, Facebook- és
            Instagram oldalát. Ugyancsak ebbe a csoportba tartozó emberek
            tartják a kapcsolatot a sajtóval, szervezik meg a sajtótájékoztatót
            és intézik a tudósítást a rendezvény előtt, alatt és után.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border border-gray-300 px-5 py-8 drop-shadow-md md:px-10">
          <h2 className="py-5 text-xl font-light">Pontozás</h2>
          <ul className="list-disc">
            <li className="font-bold">Farkas Eszter</li>
            <li>Portik Sándor-Szilárd</li>
            <li>Antal Anita-Mária</li>
            <li>Boda Zsuzsanna</li>
            <li>Breier Brigitta</li>
            <li>Budik Kriszta-Andrea</li>
            <li>Debrenti Réka-Lilla</li>
            <li>Kajcsa Anett-Antonia</li>
            <li>Keserü Kriszta</li>
            <li>Székely Anna-Zsófia</li>
          </ul>
          <p className="p-5 text-sm font-light">
            Ez a kiscsoport segít az előadó diákok bemutatóinak rangsorolásában.
            Ők készítik elő a pontozó lapokat a rendezvény előtt a szekcióknak
            megfelelően. Rendezvény közben a pontozó lapokat, névtáblákat
            eljuttatják az adott ülésre, ők egyesítik a pontokat, megszerkesztik
            az okleveleket, kinyomtatják őket és ők adják át a díjakért felelős
            kiscsoport vezetőknek.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border border-gray-300 px-5 py-8 drop-shadow-md md:px-10">
          <h2 className="py-5 text-xl font-light">Protokoll</h2>
          <ul className="list-disc">
            <li>Cseke Krisztina</li>
            <li>Farkas Tamás</li>
            <li>Lozsádi Zsombor</li>
            <li>Miklós Mátyás Levente</li>
            <li>Orbán Zsófia</li>
            <li>Tőkés Nikolett</li>
            <li>Zsidó Imola</li>
          </ul>
          <p className="p-5 text-sm font-light"></p>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border border-gray-300 px-5 py-8 drop-shadow-md md:px-10">
          <h2 className="py-5 text-xl font-light">Szállítás</h2>
          <ul className="list-disc">
            <li className="font-bold">Kakasi András </li>
            <li>Kind Aliz</li>
            <li>Lukács Márk-Szilárd</li>
            <li>Márton Tamás</li>
            <li>Szász Péter-Zsombor</li>
          </ul>
          <p className="p-5 text-sm font-light">
            A szállító kiscsoporthoz, a nevéből adódóan a szállítás tartozik. Ők
            azok, akik a rendezvény előtt, alatt és után az eseményhez szükséges
            kellékek szállítását végzik. Fontos megjegyezni, hogy a szállítás
            magába foglalja az egyik helyszínen a kellék bepakolását és a másik
            helyszínen ezek kipakolását is. Ezen kiscsoport csatlakozásához
            szükséges a jogosítvány és az autó. Természetesen a szervezés ideje
            alatt elhasznált üzemanyag költségeit megtérítjük.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border border-gray-300 px-5 py-8 drop-shadow-md md:px-10">
          <h2 className="py-5 text-xl font-light">Szponzor</h2>
          <ul className="list-disc">
            <li className="font-bold">Bonda Boglár</li>
            <li>Balázs Boglárka</li>
            <li>Cozma Paula-Sophia</li>
            <li>Oprisor Kriszta</li>
            <li>Papp Barbara</li>
            <li>Timár Oren</li>
            <li>Toth Robert-Szabolcs</li>
            <li>Tőkés Nikolett</li>
          </ul>
          <p className="p-5 text-sm font-light">
            A szponzor kiscsoport feladatkörébe tartozik a szponzorokkal való
            kapcsolattartás. Rendezvény előtt ők keresik fel a támogatókat,
            támogatás adminisztratív részét lebonyolítják és elhozzák a
            roll-up-okat, bannereket a cégektől és a konferencia lejárta után
            visszajuttatják ezen kellékeket.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border border-gray-300 px-5 py-8 drop-shadow-md md:px-10">
          <h2 className="py-5 text-xl font-light">Technika</h2>
          <ul className="list-disc">
            <li className="font-bold">Tischler Hunor</li>
            <li className="font-bold">Máthé István </li>
            <li>Baczoni Boglárka</li>
            <li>Bakó Naómi-Zsuzsanna</li>
            <li>Csapó Gergő</li>
            <li>Csató Csongor</li>
            <li>Fodor Csanád</li>
            <li>Gál Zsombor-Zalán</li>
            <li>Gáll Botond</li>
            <li>György-Fazakas Borbála</li>
            <li>Ilyés Norbert-István</li>
            <li>Kiss Anita</li>
            <li>Măgdălina Ovidiu-Cristian</li>
            <li>Schmidt Simona-Raluca</li>
            <li>Szőcs Kurkó Sebestyén</li>
            <li>Veress Károly Tamás</li>
          </ul>
          <p className="p-5 text-sm font-light">
            A technikás kiscsoport tagjai azok a szervezők, akik irányítják az
            előadások háttér feladatait: felszerelik és kezelik a
            videóprojektorokat, biztosítják az előadó diákok, valamint a
            meghívottak előadásainak technikai hátterét. A rendezvény előtt
            összeírják a kellő mennyiségű technikai eszközök listáját,
            beszerzik, ellenőrzik és összeállítják őket. A rendezvény ideje
            alatt ők felelnek a technikai eszköztárért, valamint az esemény után
            mindezeket rendberakják.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border border-gray-300 px-5 py-8 drop-shadow-md md:px-10">
          <h2 className="py-5 text-xl font-light">Teremrendezés</h2>
          <ul className="list-disc">
            <li className="font-bold">Adorján Előd </li>
            <li className="font-bold">Sebestyén-Dósa Réka </li>
            <li>Albert Anikó</li>
            <li>Ambrus Beáta</li>
            <li>Dobrai Laura-Dora</li>
            <li>Elekes Éva</li>
            <li>Fazakas Árpád</li>
            <li>Főldvari Dávid</li>
            <li>Gedő Andrea</li>
            <li>Graur Medárd</li>
            <li>Ilyés Kincső-Annamária</li>
            <li>Jankó-Szép Ákos</li>
            <li>Nagy Dávid</li>
            <li>Szabadi Bernadett-Barbara</li>
            <li>Szabo Lorand-Zsolt</li>
            <li>Tőkés Anikó</li>
          </ul>
          <p className="p-5 text-sm font-light">
            A teremrendezés kiscsoport szervezői a helyszínért felelősek. Ehhez
            hozzátartozik minden, a termekben lévő kellék beszerzése és a
            rendezvény ideje alatt be-, illetve elpakolása. Ugyanakkor a
            roll-upok, a pop-up, a székek, asztalok, virágok egyik teremből a
            másikba való áthordása és a teremrendezés alatt felhasznált kellékek
            épségének megőrzése is ezen kiscsoport feladatához tartozik. Nem
            utolsó sorban az elbíráló bizottság számára víz, pohár, nasi
            biztosítása.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border border-gray-300 px-5 py-8 drop-shadow-md md:px-10">
          <h2 className="py-5 text-xl font-light">Tördelés</h2>
          <ul className="list-disc">
            <li className="font-bold">Salló Hanna-Boglárka</li>
            <li className="font-bold">Szőcs Orsolya</li>
            <li>Pap Gyopárka</li>
            <li>Sztáncsuj Eszter</li>
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border border-gray-300 px-5 py-8 drop-shadow-md md:px-10">
          <h2 className="py-5 text-xl font-light">Ülésvezetés</h2>
          <ul className="list-disc">
            <li className="font-bold">Majercsik Szilárd</li>
            <li className="font-bold">Máthé Andrea</li>
            <li>Benedek Bianka</li>
            <li>Dandé Csongor-Ottó</li>
            <li>Ferencz Boglárka</li>
            <li>Gál Zsuzsánna</li>
            <li>Györfi Szidónia-Brigitta</li>
            <li>Jakab Boglárka</li>
            <li>Krisztik Réka</li>
            <li>Máté Linda</li>
            <li>Nagy Eszter</li>
            <li>Popovits Gertrud-Mercedes</li>
            <li>Rédai Ádám</li>
            <li>Szabó Nándor</li>
            <li>Szasz Zsolt-Kristóf</li>
            <li>Timár Réka-Kinga</li>
          </ul>
          <p className="p-5 text-sm font-light">
            Az ülésvezetők az előadások tulajdonképpeni moderátorai. Ők azok
            akik felkonferálják az előadó diákokat és a meghívott előadókat,
            valamint levezénylik az ülésszakokat (szekciókat). Ezen szervezők
            olyan személyek, akik jó beszédkészséggel, színpadi kiállással,
            problémamegoldó készséggel rendelkeznek, elegáns megjelenésűek, hisz
            a konferencia arcaiként ismertek. Ők adják át az előadó diákoknak,
            valamint a meghívott előadóknak a részvételért járó ajándékcsomagot.
            Munkaidejük többnyire a rendezvény idejére tehető.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border border-gray-300 px-5 py-8 drop-shadow-md md:px-10">
          <h2 className="py-5 text-xl font-light">Workshop</h2>
          <ul className="list-disc">
            <li className="font-bold">Farczki Dóra </li>
            <li className="font-bold">Kocsis Imola </li>
            <li>Pál Endre Csaba</li>
            <li>Barthi Dóra</li>
            <li>Czentye Anna</li>
            <li>David Soma</li>
            <li>Geréd Ákos</li>
            <li>Kovács Sándor</li>
            <li>Medvés Noémi Eliza</li>
            <li>Mekker Vivien</li>
            <li>Nagy Krisztina</li>
            <li>Szabó Antónia</li>
            <li>Urkon Krisztina</li>
          </ul>
          <p className="p-5 text-sm font-light">
            A workshopok szervezése talpraesettséget és kreativitást kíván. A
            váratlan helyzetek megoldása elvárás a szervezőktől. A pontosság és
            jó kommunikációs készség pedig elengedhetetlen az események
            gördülékenyen lezajlásához. A különböző egyetemi oktatók és
            helyszínek ismerete, valamint a kérvények és egyeztetések világában
            való jártasság mindenképpen előnyére válhat bármely
            workshopszervezőnek. Ezen kiscsoport feladatköréhez tartozik az
            oktatók felkérése a műhelymunkákhoz, a szükséges eszközök beszerzése
            és biztosítása, valamint a helyszínen jelenlevők összeírása. A
            rendezvényt követően ők felelősek a részvételi emléklapok
            kiküldéséért.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border border-gray-300 px-5 py-8 drop-shadow-md md:px-10">
          <h2 className="py-5 text-xl font-light">Főszervezők</h2>
          <ul className="list-disc">
            <div className="font-bold">Biró Konrád-János</div>
            <div className="font-bold">Deák Gellért-Gedeon</div>
            <div className="font-bold">Márton Kincső</div>
            <div className="font-bold">Miklós Noémi </div>
            <div className="font-bold">Szabó-Benedek Nóra</div>
            <h2 className="py-5 text-center text-xl font-light">MMDSZ elnök</h2>
            <div className="text-center font-bold">Varga László</div>
          </ul>
          <p className="p-5 text-sm font-light"></p>
        </div>
      </div>
      <h2 className="py-5 text-xl font-light">Minden szervezőre vonatkozóan</h2>
      <p className="pt-10 font-light">
        A kiscsoportok leírása csupán egy útmutató, nem tér ki minden részletre.
        A rendezvény szervezésének gördülékenysége érdekében szükség van
        mindenki kreativitására, önzetlen odaadására és az esetlegesen más
        csoportok kisegítésére. A szervezéssel együtt jár, hogy a rendezvény
        ideje alatt az összes szervező korán kel, elegánsan öltözködik és annyit
        van a helyszínen, amennyit egy sikeres Tudományos Diákköri Konferencia
        megkövetel.
      </p>
    </div>
  );
};

export default withLayout(Organizers);

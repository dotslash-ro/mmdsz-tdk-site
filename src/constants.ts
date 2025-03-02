export const serverUrl = /*"http://localhost:3000/api";*/ "https://mmdsz-tdk-functions.vercel.app/api";
export const workshopServerUrl = "https://tdk-workshop-express.up.railway.app/api"; // "http://localhost:8000/api";
export const maxSignUpPerEmail = 4;
export const universityList = ["", "MOGYTTE", "SE", "DE", "PTE", "SZTE", "Egyéb"];
export const strapiUrl = /*"http://localhost:1337/api";*/ "https://cms.tdk.mmdsz.ro/api";
export const strapiToken =
  // "487cf146a38a290c45bbf6088c21e885066d40b7dc071841de715a7011126d704e05d7dd6ef9126cdb1940ddc79a003df4605f7f889dc79e7c04094d198c1f417c7391ed4955d45b1eb7fe2d89c8770b6b574c94a608e91853b0192a4985f682c0f015cf439a13612547a3b06479dc0c5a927a25a978445559f35c06a0e97a47"; // dev
  "331527b65aaea1c2f9d682e2a2c274cc89cbfd7bd0042e1d164b504b8692da89050758171df382f97f4933c6ab862df13154e072a6b771c67bfaa58e89f7bc89780d4a6019e6cdcf2e54f3a7ec7b92922217d3ba44acdb520e62aac98775b2c5a4ef96b4cec7c4d7b7e7f358a0718671a9d3d889e888d39db77e5106eec86602"; //prod

export const organizerSignupEndUnix = 1734731999;

export const organizerGroups = [
  {
    name: "Akkreditáció",
    canSelect: true,
    description:
      "Az akkrediátációért felelős kiscsoport szorosan együttműködik az infóiroda kiscsoporttal. Feladata a helyszínre érkező és az online regisztrált oktatók, orvosok és szakemberek fogadása, részvételi diplomáinak kiállítása. Ez a feladatkör pontosságot és jó kiállást igényel.",
  },
  {
    name: "Díjak",
    canSelect: true,
    description:
      "Ezen kiscsoport tagjai gondoskodnak a konferencia előtt a díjak és virágok beszerzéséről, összeállításáról, illetve elosztásáról. Záróünnepség előtt ők csomagolják be a díjakat, amiket előkészítenek az átadásra, és eljuttatják annak helyszínére.",
  },
  {
    name: "Étkezés",
    canSelect: true,
    description:
      "Az étkezésért felelős szervezők rendezvény előtti feladata a bevásárlás. Rendezvény alatt ők azok, akik reggelente megkenik a szendvicseket, felelnek azért, hogy ezek kijussanak a helyszínre, majd ott napközben a büfé asztal mögül kiszolgálják a résztvevőket (szervezők, oktatók, meghívottak) szendviccsel, kiflivel, kávéval, teával és vízzel. Az étkezéssel kapcsolatos utómunkák szintén a kiscsoport feladatkörébe tartoznak.",
  },
  {
    name: "Fotó",
    canSelect: true,
    description:
      "A fotósok örökítik meg a rendezvény mozzanatait. Kiválogatják és megszerkesztik a képeket, amik kikerülnek az online platformokra. Előnyös, ha ezen személyek rendelkeznek saját felszereléssel és jártasak a fotózásban.",
  },
  { name: "Főszervező", description: "", canSelect: false },
  {
    name: "Gála",
    canSelect: true,
    description:
      "A rendezvény megkoronázása a gála. Ezen kiscsoport tagjai felelnek a gála megálmodásáért és megvalósításáért. Rendezvény alatt feladatuk az oktatók fogadása és asztalhoz kísérése, illetve ők ellenőrzik, hogy csak jogosult személyek vehessenek részt az estélyen",
  },
  {
    name: "Infóiroda",
    canSelect: true,
    description:
      "Már a rendezvény előtt van feladatuk, válogatják és rendezik a kitűzőket, összeállítják az ajándékcsomagokat. A rendezvény alatt regisztrációs és információs pontot működtetnek. Ezen kiscsoport tagjai az ülésvezetők mellett szintén a rendezvény arcait képezik, hiszen sokszor a konferencia első benyomása hozzájuk köthető, ők azok akik mindenkinek információkat, eligazítást nyújtanak.",
  },
  {
    name: "Korrektúra és kivonatok",
    canSelect: true,
    description:
      "A korrektúrás kiscsoport legfőbb feladata egységes küllemet biztosítani a beérkezett dolgozatoknak. A munkaidő teljes mértékben a rendezvény előttre korlátozódik és főként szövegszerkesztési munkát foglal magába. Ezáltal fontossá válik a számítógép kezelési alapok ismerete (Microsoft Word és Dropbox programok használata), valamint helyesírási hibák észrevételére való hajlam. Az alapos és szorgalmas munkát kedvelő személyek ideális szervezési lehetősége ez.",
  },
  {
    name: "Külügy",
    canSelect: true,
    description:
      "Ez a kiscsoport felel a külföldi bemutató diákok szabadidős tevékenységéért. Feladatuk a különböző közösségi programok megszervezése és lebonyolítása (pl városnézés, ismerkedés, kulturális programok).",
  },
  {
    name: "Média és kommunikáció",
    canSelect: true,
    description:
      "Ez a kiscsoport végzi az összes közösségi média platformon megjelenő információ megtervezését, megírását és közlését, Facebook- és Instagram oldalát. Ugyancsak ebbe a csoportba tartozó emberek tartják a kapcsolatot a sajtóval, szervezik meg a sajtótájékoztatót, és intézik a tudósítást a rendezvény előtt, alatt és után.",
  },
  {
    name: "Műhelymunkák",
    canSelect: true,
    description:
      "A workshopok szervezése talpraesettséget és kreativitást kíván. A váratlan helyzetek megoldása elvárás a szervezőktől. A pontosság és jó kommunikációs készség pedig elengedhetetlen az események gördülékeny lezajlásához. A különböző egyetemi oktatók és helyszínek ismerete, valamint a kérvények és egyeztetések világában való jártasság mindenképpen előnyére válhat bármely workshopszervezőnek. Ezen kiscsoport feladatköréhez tartozik az oktatók felkérése a műhelymunkákhoz, a szükséges eszközök beszerzése és biztosítása, valamint a helyszínen jelenlevők összeírása.",
  },
  {
    name: "Pontozás",
    canSelect: true,
    description:
      "Ez a kiscsoport segít az előadó diákok bemutatóinak rangsorolásában. Ők készítik elő a pontozó lapokat a rendezvény előtt a szekcióknak megfelelően. Rendezvény közben a pontozó lapokat, névtáblákat eljuttatják az adott ülésre, illetve ők egyesítik a pontokat.",
  },
  {
    name: "Protokoll",
    description:
      "Ezen kiscsoport tagjai felelnek a meghívott előadókkal való kapcsolattartásért már a meghívók kiküldésével kezdődően. A konferencia ideje alatt a meghívott előadók rendelkezésére állnak, segítséget nyújtanak, ők juttatják el a meghívottakat a konferencia különböző helyszíneire",
    canSelect: false,
  },
  {
    name: "Szállító",
    canSelect: true,
    description:
      "A szállító kiscsoporthoz, a nevéből adódóan a szállítás tartozik. Ők azok, akik a rendezvény előtt, alatt és után az eseményhez szükséges kellékek szállítását végzik. Fontos megjegyezni, hogy a szállítás magába foglalja az egyik helyszínen a kellék bepakolását és a másik helyszínen ezek kipakolását is. Ezen kiscsoport csatlakozásához szükséges a jogosítvány és az autó. Természetesen a szervezés ideje alatt elhasznált üzemanyag költségeit megtérítjük.",
  },
  {
    name: "Szponzor",
    canSelect: false,
    description:
      "A szponzor kiscsoport feladatkörébe tartozik a szponzorokkal való kapcsolattartás. Rendezvény előtt ők keresik fel a támogatókat, a támogatás adminisztratív részét lebonyolítják és elhozzák a roll-up-okat, bannereket a cégektől és a konferencia lejárta után visszajuttatják ezen kellékeket.",
  },
  {
    name: "Technika",
    canSelect: true,
    description:
      "A technikás kiscsoport tagjai azok a szervezők, akik irányítják az előadások háttér feladatait: felszerelik és kezelik a videóprojektorokat, biztosítják az előadó diákok, valamint a meghívottak előadásainak technikai hátterét. A rendezvény előtt összeírják a kellő mennyiségű technikai eszközök listáját, beszerzik, ellenőrzik és összeállítják őket. A rendezvény ideje alatt ők felelnek a technikai eszköztárért, valamint az esemény után  mindezeket rendberakják. ",
  },
  {
    name: "Teremrendezés",
    canSelect: true,
    description:
      "A teremrendezés kiscsoport szervezői a helyszínért felelősek. Ehhez hozzátartozik a termekben lévő kellékek beszerzése és a rendezvény ideje alatt be-, illetve elpakolása. Ugyanakkor a roll-upok, a pop-up, a székek, asztalok, virágok egyik teremből a másikba való áthordása, és a teremrendezés alatt felhasznált kellékek épségének megőrzése, az elbíráló bizottság számára víz és pohár biztosítása.",
  },
  {
    name: "Tördelés",
    canSelect: true,
    description:
      "Ezen kiscsoport feladata az Orvostudományi Értesítőben megjelenő absztraktok tördelése. A munkaidő teljes mértékben a rendezvény előttre korlátozódik.",
  },
  {
    name: "Ülésvezetés",
    canSelect: true,
    description:
      "Az ülésvezetők az előadások moderátorai. Ők azok akik felkonferálják az előadó diákokat és a meghívott előadókat, valamint levezénylik az ülésszakokat (szekciókat). Ezen szervezők olyan személyek, akik jó beszédkészséggel, színpadi kiállással, problémamegoldó készséggel rendelkeznek, elegáns megjelenésűek, hisz a konferencia arcaiként ismertek. Ők adják át az előadó diákoknak, valamint a meghívott előadóknak a részvételért járó ajándékcsomagot. Munkaidejük többnyire a rendezvény idejére tehető.",
  },
] as const;

export const sectionList = [
  "",
  "Általános Belgyógyászat",
  "Általános Sebészet",
  "Anatómia és Patológia",
  "Aneszteziológia És Intenzív Terápia",
  "Angiológia",
  "Betteggondozás (nursing)",
  "Bioinformatika",
  "Bőrgyógyászat",
  "Diabetológia",
  "Egészségügyszervezés",
  "Élettan",
  "Endokrinológia",
  "Farmakológia",
  "Fogorvostudomány",
  "Fogorvostudomány Poszter",
  "Fül-Orr-Gégészet",
  "Gasztroenterológia",
  "Genetika",
  "Gyermekgyógyászat",
  "Gyógyszerészet",
  "Gyógytorna És Sporttudomány",
  "Hematológia",
  "Idegsebészet",
  "Imagisztika",
  "Infektológia",
  "Kardiológia",
  "Kórélettan",
  "Labordiagnosztika",
  "Megelőző Orvostudomány És Népegészségtan",
  "Mikrobiológia",
  "Neurológia",
  "Nőgyógyászat",
  "Onkológia",
  "Ortopédia",
  "Poszter Szekció",
  "Pszichiátria És Viselkedéstan",
  "Reumatológia",
  "Szemészet",
  "Traumatológia",
  "Urológia",
] as const;

export const oauthClientId = "858299120064-428uvpomj4tre0ek9mh58uc7ushudiio.apps.googleusercontent.com";

import { withLayout } from "../layout/withLayout";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div className="mx-auto py-20 px-5 lg:w-1/2">
      <Helmet>
        <title>31. TDK - Rólunk</title>
      </Helmet>
      <div>
        <h2 className="pb-10 text-center text-5xl font-bold">Az MMDSZ-ről</h2>
        <p className="font-light">
          A Marosvásárhelyi Magyar Diákszövetség az ország egyik legrégebbi diákszövetsége. Kezdetektől fogva a fő célja
          a város magyar ajkú hallgatóinak képviselete, szakmai segítsége és szórakoztatása. Hála annak, hogy a
          megalakulástól kezdve minden generációban akadtak vállalkozó szellemű egyetemi hallgatók, akik legjobb tudásuk
          szerint fejlesztették a diákszövetséget, mára egy nagyszámú és felkészült csapat áll a diákok érdekképviselete
          és a marosvásárhelyi életet felpezsdítő diákrendezvények mögött.
        </p>
        <p className="py-5 font-light">
          Tudj meg többet az MMDSZ-ről{" "}
          <a className="text-sky-400 hover:underline" href="https://mmdsz.ro/">
            a hivatalos weboldalunkon
          </a>
        </p>
      </div>
      <div>
        <h2 className="pt-20 pb-8 text-center text-5xl font-bold">A konferenciáról</h2>
        <p className="pb-10 font-light">
          A Marosvásárhelyi Magyar Diákszövetség 1993 óta minden évben megrendezi a Tudományos Diákköri Konferenciát,
          amely konferencia az egyedüli olyan rendezvény az erdélyi orvosképzésben, ahol a hallgatók anyanyelvükön,
          magyarul mutathatják be tudományos munkáikat, és mérhetik össze kutatásaik eredményeit az orvosi, fogorvosi és
          a gyógyszerészeti szakterületeken belül.
        </p>
        <p className="pb-10 font-light">
          Fontosnak tartjuk, hogy a diákok már az egyetemi évek alatt belekapcsolódjanak a tudományos kutatásba, illetve
          az itt elért eredményeiket egy színvonalas konferencián mutathassák be, amely nemcsak a versenyszellemet
          táplálja a diákokban, hanem fejleszti előadókészségüket, vitakészségüket és alkalmat teremt tudományos
          kérdések megvitatására, eszmecserére, felkészít a szakdolgozat megírására és megvédésére; mindemellett hosszú
          távon az erdélyi magyar tudományos élet illetve orvosképzés erőforrásainak jelentős alapjául szolgálhat.
          Konferenciánk nemzetközi méretűvé nőtte magát azáltal, hogy a helyi diákok mellett a magyarországi egyetemek
          orvostanhallgatói is bemutatják dolgozataikat. A TDK célkitűzései közé tartozik megteremteni egy olyan
          tudományos diákfórumot, ahol az előadó diákokon kívül az orvostanhallgatók, a Marosvásárhelyi Orvosi és
          Gyógyszerészeti Egyetem (MOGYE) oktatói, illetve külföldi előadótanárok egyaránt részt vesznek, ezáltal
          alkalom nyílik új ismeretek elsajátítására az orvostudomány és a hozzá kapcsolodó tudományágak különböző
          területeiről.
        </p>
        <p className="pb-10 font-light">
          {" "}
          A konferencia során az ülésszakokon bemutatásra kerülő munkák mellett a programot színesítik nemzetközileg is
          elismert professzorok, szakemberek tudományos előadásai, valamint számos workshop, mely jelentős űrt pótol az
          oktatásban.
        </p>
        <p className="pb-10 font-light">
          A sokat mediatizált helyzet, ami a MOGYE-n kialakult igen nagy aktualitást és nemzeti jelentőséget ad e
          rendezvénynek. Korábbi konferenciákon az orvostudomány olyan híres szaktekintélyei is részt vettek, a
          teljesség igénye nélkül, mint prof. dr. Szent-Györgyi András (Boston), prof. dr. Kunos György (Washington),
          prof. dr. Klein György (Stockholm), prof. dr. Simon Géza (Minneapolis), prof. dr. Somogyi Péter (Oxford),
          prof. dr. Vízkelety Tibor (Budapest), prof. dr. Vizi E. Szilveszter (Budapest), prof. dr. Freund Tamás
          (Budapest), Dr. Czeizel Endre (Budapest), Barabási Albert László.
        </p>{" "}
        <p className="pb-10 font-light">
          Az elmúlt évek tapasztalatai alapján 2019-ben kb. 200 marosvásárhelyi egyetemi oktató, valamint 800-1000 diák
          részvételére számítunk, ebből több, mint 300 diák mutatja majd be saját tudományos dolgozatát (amelyből kb.
          70-80 Magyarországról, azaz budapesti, szegedi, pécsi és debreceni hallgatóktól érkezik).
        </p>{" "}
        <p className="pb-10 font-light">
          A tudományos diákköri munka és a konferenciákon való részvétel egy sajátos életforma hallgatónak és tanárnak
          egyaránt. A szakmai, tudományos sikerek mellett, vagy inkább mindezek előtt emberségre, igényességre,
          együttműködésre és toleranciára nevel. Tudományos alázattal, szorgos, kitartó munkával jár, de a felfedezett
          és támogatott tehetségek élete sikeresebb, örömtelibb, tudományt előrevivő lesz.
        </p>
      </div>
    </div>
  );
};

export default withLayout(About);

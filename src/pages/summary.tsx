import { withLayout } from "../layout/withLayout";
import tdkPicture4 from "../assets/tdk-pic4.png";
import tdkPicture5 from "../assets/tdk-pic5.png";
import tdkPicture6 from "../assets/tdk-pic6.png";

const Summary = () => {
  return (
    <div className="px-5 py-20 md:px-10 lg:px-20">
      <h1 className="pb-20 text-center text-5xl font-bold text-tdk-secondary">
        Összefoglaló
      </h1>
      <div className="space-y-10 px-5 text-neutral-700 sm:mx-auto sm:w-2/3 sm:px-0">
        <div className="mx-auto flex flex-col items-center justify-start gap-10 xl:flex-row">
          <p className="xl:w-1/3">
            Idén 30. alkalommal került megrendezésre május 10-13 között a
            Marosvásárhelyi Tudományos Diákköri Konferencia a Marosvásárhelyi
            Kultúrpalotában, a Studium Hub épületében valamint a MOGYTTE
            Gyógyszerészeti Karának az épületében. Az immáron 30 éve sorozatosan
            megrendezésre kerülő rendezvény szervezői a Marosvásárhelyi Magyar
            Diákszövetség tagjai, valamint MOGYTTE magyar oktatói gárdája akik a
            szakmai hátterét biztosítják a rendezvénynek. A tudományos diákköri
            konferencia egyedülállónak számít, ugyanis az egyetemek magyar
            hallgatói anyanyelvükön mutathatják be tudományos dolgozataikat. Az
            idei évben 15 külföldi meghívott előadó és 3 hazai előadó aktuális
            kutatásáról is hallhattak a érdeklődők, mindemellett 3 panel
            beszélgetésre is sor került amelyeken során 4 külföldi-, illetve 5
            hazai szakember beszélgetésébe csatlakozhatott be a hallgatóság.
          </p>
          <img
            src={tdkPicture4}
            alt="TDK"
            className="w-full rounded-lg shadow-tdk-primary drop-shadow-lg xl:h-fit xl:w-auto"
          />
        </div>
        <div className="mx-auto flex flex-col items-center justify-start gap-10 xl:flex-row-reverse">
          <p className="xl:w-1/3">
            A konferencia alkalmával 209 dolgozat került bemutatásra, melyből
            171 hazai illetve 38 külföldi hallgatók által készített. A
            műhelymunkák idén is alapként szolgálnak a konferencia alatt. Idén
            58 műhelymunkára került sor melyek közül 26 Általános Orvos Kari
            Hallgatóknak, 14 Fogorvostan Hallgatóknak, 6 Gyógyszerész
            Hallgatóknak, illetve 8 műhelymunka bármely kar számára látogatható
            volt. Idén is lehetőségünk adódott néhány hiánypótló műhelymunka
            lebonyolítására a már megszokott évről évre ismétlődőek mellett az
            oktatóink és szakemberek által.
          </p>
          <img
            src={tdkPicture6}
            alt="TDK"
            className="w-full rounded-lg shadow-tdk-primary drop-shadow-lg xl:h-fit xl:w-auto"
          />
        </div>
        <p>
          A négy nap során 20 témakörben mutathatták be tudományos dolgozataikat
          a hallgatók, amelyeket egy 4-5 tagú szakmai zsűri bírált. Az elbíráló
          bizottságot minden évben az egyetemünk oktatói képezik.{" "}
        </p>
        <p>
          Az esemény szerdán május 10-én vette kezdetét a Kultúrpalota
          nagytermében. A megnyitót követően az érdeklődők egy hazai illetve
          három külföldi meghívott előadó munkásságáról hallhattak.{" "}
        </p>
        <p>
          A csütörtöki (május 11-ei) nappal kezdődően sor került az első
          szekcióülésekre illetve a délután folyamán további előadásokat
          követhettek figyelemmel az érdeklődők. Ezen a napon a hat előadás
          mellett, sor került az első panelbeszélgetésre, amely során egy
          amerikai, egy magyarországi illetve egy hazai orvos beszélgetébe
          kapcsolódhattak be az érdeklődők.
        </p>
        <p>
          A pénteki (május 12-ei) nap a csütörtöki nap mintájára zajlott.
          Délelőtt a már megszokott szekcióülések illetve délután a meghívott
          előadók előadásai voltak hallhatóak. Ezen a napon hat teltházas
          előadás és 2 szintén teltházas panelbeszélgetés volt figyelemmel
          követhető. A panelbeszélgetések a szakmában való elhelyezkedés témáját
          járták körül, a fogorvosok és gyógyszerészek szemszögéből.
        </p>
        <div className="mx-auto flex flex-col items-center justify-start gap-10 xl:flex-row">
          <p className="xl:w-1/3">
            Szombaton (május 13-án) zajlottak az utolsó szekcióülések illetve a
            konferencia ezen részét két előadás zárta. Végezetül sor került a
            Díjátadó Ünnepségre és Gálavacsorára, ahol kihirdetésre kerültek a
            szekciók nyertes dolgozatai és egy jó hangulatú vacsorával méltón
            zártuk a rendezvényt.
          </p>
          <img
            src={tdkPicture5}
            alt="TDK"
            className="w-full rounded-lg shadow-tdk-primary drop-shadow-lg xl:h-fit xl:w-auto"
          />
        </div>
        <p>
          Összességében a rendezvény{" "}
          <em className="font-bold">160 lelkes szervező</em>, az egyetemünk
          oktatói, partnereink és támogatóink áldozatos munkája által
          valósulhatott meg. Külön kiemelnénk a{" "}
          <em className="font-bold ">
            Nemzeti Tehetség Programot (Magyarország Kulturális és Innovációs
            Minisztériuma, Emberi Erőforrás Támogatáskezelő)
          </em>
          , mely pályázat nagyban segítette az esemény létrejöttét.
        </p>
      </div>
    </div>
  );
};

export default withLayout(Summary);

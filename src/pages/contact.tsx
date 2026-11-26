import { Helmet } from "react-helmet";
import { withLayout } from "../layout/withLayout";

type Contact = { name: string; role: string; phone: string };

const contacts: Contact[] = [
  { name: "Stemmer József", role: "Irodavezető", phone: "+40 740 194 056" },
  { name: "Jankó-Szép Ákos", role: "MMDSZ elnök", phone: "+40 753 115 741" },
  { name: "Benedek Zsuzsanna", role: "Főszervező", phone: "+40 737 013 620" },
  { name: "Nagy Zente-Ádám", role: "Főszervező", phone: "+40 731 238 532" },
  { name: "Nistor Minola-Andrea", role: "Főszervező", phone: "+40 742 560 426" },
  { name: "Pál Katinka-Szidónia", role: "Főszervező", phone: "+40 749 344 747" },
  { name: "Sándor Deborah-Barbara", role: "Főszervező", phone: "+40 760 842 513" },
];

const email = "tdk@mmdsz.ro";
const address = "540095 Marosvásárhely, str. Nicolae Grigorescu nr. 15A/1 (3-as bentlakás)";
const mapsUrl =
  "https://www.google.com/maps/place/1,+Caminul+nr.3,+Strada+Nicolae+Grigorescu+15%2FA,+T%C3%A2rgu+Mure%C8%99/@46.5533507,24.5709639,17.3z/data=!4m5!3m4!1s0x474bb64758ead0c1:0xd62cff584698cf3d!8m2!3d46.5533521!4d24.5730584?entry=ttu";

/** "tel:" link built from the displayed number, so the two can't get out of sync. */
const telHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, "")}`;

const Contact = () => {
  return (
    <div className="mx-auto max-w-3xl px-5 py-10 sm:px-10 md:py-12">
      <Helmet>
        <title>34. TDK - Elérhetőségek</title>
      </Helmet>

      <header className="pb-8 md:pb-10">
        <h1 className="sr-only">Elérhetőségek</h1>
        <p className="text-lg text-gray-600">Kérdésed van? Írj nekünk, vagy keresd valamelyik szervezőt.</p>
      </header>

      <div className="space-y-4">
        <a
          href={`mailto:${email}`}
          className="block w-fit text-xl font-semibold text-gray-900 transition hover:text-tdk-accent hover:underline"
        >
          {email}
        </a>
        <a href={mapsUrl} target="_blank" rel="noreferrer" className="group block w-fit">
          <span className="leading-relaxed text-gray-700 transition group-hover:text-tdk-accent">{address}</span>
          <span className="mt-1 block text-sm font-medium text-tdk-accent group-hover:underline">
            Megnyitás térképen →
          </span>
        </a>
      </div>

      <ul className="mt-10 space-y-5 md:mt-12">
        {contacts.map(({ name, role, phone }) => (
          <li key={name} className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
            <div>
              <p className="font-semibold text-gray-900">{name}</p>
              <p className="text-sm text-gray-500">{role}</p>
            </div>
            <a
              href={telHref(phone)}
              className="whitespace-nowrap font-medium tabular-nums text-gray-700 transition hover:text-tdk-accent hover:underline"
            >
              {phone}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default withLayout(Contact);

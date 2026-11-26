import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import { withLayout } from "../layout/withLayout";
import { fetchOrganizerGroups } from "../api/organizer-groups.api";
import { StrapiOrganizerGroups } from "../types/organizer-groups.types";
// import { Link } from "react-router-dom";

type Group = StrapiOrganizerGroups["data"][number];

const leadershipGroups = ["Főszervező", "Elnök"];

const slugify = (name: string) =>
  name
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const GroupCard = ({ group }: { group: Group }) => {
  const { name, description, selectable } = group.attributes;
  return (
    <article
      id={slugify(name)}
      className="mb-6 scroll-mt-24 break-inside-avoid rounded-xl border border-gray-200 bg-white p-6 transition hover:border-tdk-accent/50 hover:shadow-sm md:p-8"
    >
      <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-2">
        <h2 className="text-xl font-bold text-gray-900">{name}</h2>
        {selectable === false && !leadershipGroups.includes(name) && (
          <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600">
            Jelentkezéskor nem választható
          </span>
        )}
      </div>
      {description && <p className="leading-relaxed text-gray-700">{description}</p>}
    </article>
  );
};

const Organizers = () => {
  const [organizerGroups, setOrganizerGroups] = useState<Group[] | undefined>();
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchOrganizerGroups()
      .then((data) =>
        setOrganizerGroups(
          data.data
            .filter((a) => !leadershipGroups.includes(a.attributes.name))
            .sort((a, b) => a.attributes.name.localeCompare(b.attributes.name))
            .concat(data.data.filter((a) => leadershipGroups.includes(a.attributes.name)))
        )
      )
      .catch(() => setError(true));
  }, []);

  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-10 md:py-20">
      <Helmet>
        <title>34. TDK - Szervezőknek</title>
      </Helmet>

      <header className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
        <h1 className="text-4xl font-bold md:text-5xl">Szervezőknek</h1>
        <p className="mt-6 text-lg leading-relaxed text-gray-600">
          A konferencia kiscsoportokban szerveződik. Ismerd meg, melyik munkacsoport mivel foglalkozik, és válaszd ki,
          hol tudnál a legtöbbet hozzátenni.
        </p>
      </header>

      {error ? (
        <div className="rounded-lg bg-gray-50 py-16 text-center text-gray-700">
          Nem sikerült betölteni a munkacsoportokat. Kérjük, próbáld újra később.
        </div>
      ) : organizerGroups ? (
        <>
          <section className="mb-12 rounded-xl bg-tdk-accent/5 px-6 py-5 md:px-8 md:py-6">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-tdk-accent">
              Minden szervezőre vonatkozóan
            </h2>
            <p className="mt-2 leading-relaxed text-gray-800">
              A kiscsoportok leírása csupán egy útmutató, nem tér ki minden részletre. A rendezvény szervezésének
              gördülékenysége érdekében szükség van mindenki kreativitására, önzetlen odaadására és az esetlegesen más
              csoportok kisegítésére. A szervezéssel együtt jár, hogy a rendezvény ideje alatt az összes szervező korán
              kel, elegánsan öltözködik és annyit van a helyszínen, amennyit egy sikeres Tudományos Diákköri Konferencia
              megkövetel.
            </p>
          </section>

          <div className="gap-6 md:columns-2">
            {organizerGroups.map((group) => (
              <GroupCard key={group.id} group={group} />
            ))}
          </div>
        </>
      ) : (
        <div className="flex min-h-[50vh] items-center justify-center text-sm text-gray-700">Betöltés...</div>
      )}
      {/* hidden until signup goes live; testers use /szervezoi-jelentkezes-teszt
      <Link to="/szervezoi-jelentkezes" className="mt-10 font-light text-tdk-accent hover:underline xl:text-lg">
        Jelentkezz Szervezőnek! →
      </Link> */}
    </div>
  );
};

export default withLayout(Organizers);

import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Markdown from "react-markdown";

import { withLayout } from "../layout/withLayout";
import { fetchOrganizerGroups } from "../api/organizer-groups.api";
import { StrapiOrganizerGroups } from "../types/organizer-groups.types";

const Organizers = () => {
  const [organizerGroups, setOrganizerGroups] = useState<StrapiOrganizerGroups["data"] | undefined>();

  useEffect(() => {
    // fetch organizer groups with organizers
    fetchOrganizerGroups().then((data) =>
      setOrganizerGroups(
        data.data
          .filter((a) => !["Főszervező", "Elnök"].includes(a.attributes.name))
          .sort((a, b) => a.attributes.name.localeCompare(b.attributes.name))
          .concat(data.data.filter((a) => ["Főszervező", "Elnök"].includes(a.attributes.name)))
      )
    );
  }, []);

  return (
    <div className="px-5 py-20 sm:px-10 lg:px-20">
      <Helmet>
        <title>32. TDK - Szervezőknek</title>
      </Helmet>
      <h1 className="pb-20 text-center text-5xl font-bold">Szervezőknek</h1>
      {organizerGroups ? (
        <>
          <div className="grid grid-cols-1 justify-items-stretch gap-10 py-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {organizerGroups.map((group) => (
              <div className="px-5 py-8 md:px-10" key={group.id}>
                <h2 className="py-5 text-xl font-light">{group.attributes.name}</h2>
                <p className="pt-5 pb-4 text-sm font-light">{group.attributes.description}</p>
                <Markdown className="prose-sm prose-li:list-disc">{group.attributes.organizerList}</Markdown>
              </div>
            ))}
          </div>
          <h2 className="py-5 text-xl font-light">Minden szervezőre vonatkozóan</h2>
          <p className="pt-10 font-light">
            A kiscsoportok leírása csupán egy útmutató, nem tér ki minden részletre. A rendezvény szervezésének
            gördülékenysége érdekében szükség van mindenki kreativitására, önzetlen odaadására és az esetlegesen más
            csoportok kisegítésére. A szervezéssel együtt jár, hogy a rendezvény ideje alatt az összes szervező korán
            kel, elegánsan öltözködik és annyit van a helyszínen, amennyit egy sikeres Tudományos Diákköri Konferencia
            megkövetel.
          </p>
        </>
      ) : (
        <div className="flex min-h-screen items-center justify-center text-sm text-gray-700">Betoltes...</div>
      )}
    </div>
  );
};

export default withLayout(Organizers);

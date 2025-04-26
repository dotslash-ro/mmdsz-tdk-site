import { Helmet } from "react-helmet";
import { withLayout } from "../layout/withLayout";
import { useEffect, useState } from "react";
import { fetchPresenters } from "../api/presenters.api";
import type { Presenter } from "../types/presenters.types";

const Contact = () => {
  const [presenters, setPresenters] = useState<Presenter[]>();

  const sortedPresenters = presenters ? [...presenters].sort((a, b) => a.order - b.order) : null;

  useEffect(() => {
    fetchPresenters().then((data) => setPresenters(data.data.map((item) => item.attributes)));
  }, []);

  if (!sortedPresenters) {
    return (
      <div className="h-min-screen px-10 py-20 md:mx-auto md:w-1/2 md:px-0">
        <Helmet>
          <title>32. TDK - Előadók</title>
        </Helmet>
        <h2 className="pb-10 text-center text-5xl font-bold">Előadók</h2>
        <div className="flex h-screen items-center justify-center text-sm text-gray-700">Betöltés</div>
      </div>
    );
  }

  return (
    <div className="h-min-screen py-20">
      <Helmet>
        <title>32. TDK - Előadók</title>
      </Helmet>
      <h2 className="pb-10 text-center text-5xl font-bold">Előadók</h2>
      <div className="space-y-6">
        {sortedPresenters.map((presenter, index) => {
          const isEven = index % 2 === 0;
          const bgClass = isEven ? "bg-white text-black" : "bg-tdk-primary text-white";

          return (
            <div key={presenter.image.data.id} className={`h-fit  ${bgClass}`}>
              <div className="mx-auto max-w-2xl py-10 px-10">
                <img
                  src={presenter.image.data.attributes.url}
                  alt={presenter.name}
                  className={`${
                    isEven ? "sm:float-right" : "sm:float-left"
                  } h-48 w-48 m-4 rounded-full object-cover drop-shadow`}
                  style={{ shapeOutside: "circle()" }}
                />
                <div className="">
                  <h3 className="text-3xl mb-8 font-semibold">
                    {presenter.name}
                  </h3>
                  {presenter.description && <p className="text-justify">{presenter.description}</p>}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default withLayout(Contact);

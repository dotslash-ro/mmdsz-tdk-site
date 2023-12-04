const Schedule = () => {
  return (
    <div className="bg-tdk-secondary py-20 px-20 text-white">
      <h2 className="pb-10 text-center text-5xl font-bold">Program</h2>
      <div>
        <h3 className="pb-12 text-2xl font-semibold">Szerda</h3>
        <p className="px-10 pb-2 text-lg font-light text-neutral-200">
          <span className="font-bold text-neutral-300">16:00-17:00</span> - Megnyitó
        </p>
        <p className="px-10 pb-2 text-lg font-light text-neutral-200">
          <span className="font-bold text-neutral-300">17:00-18:00</span> - prof. dr. Kulka Janina: Az emlőkarcinóma
          altípusok eltérő metasztatikus viselkedése és a metasztatikus progressziót kísérő evolúció
        </p>
        <p className="px-10 pb-2 text-lg font-light text-neutral-200">
          <span className="font-bold text-neutral-300">18:00-19:00</span> - prof. dr. Rényi-Vámos Ferenc: Tüdőátültetés
        </p>
        <p className="px-10 pb-2 text-lg font-light text-neutral-200">
          <span className="font-bold text-neutral-300">29:00-20:00</span> - dr. Káposztás Zsolt: A transplantációtól a
          daganatsebészetig, avagy Houstontól Kaposvárig
        </p>
        <p className="px-10 pb-2 text-lg font-light text-neutral-200">
          <span className="font-bold text-neutral-300">20:00-21:00</span> - dr. Somodi Krisztián: A laparascopia
          alkalmazása a daganat- illetve sérvsebészetben
        </p>
      </div>
    </div>
  );
};

export default Schedule;

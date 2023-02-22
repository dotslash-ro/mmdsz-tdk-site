import { withLayout } from "../layout/withLayout";

const Contact = () => {
  return (
    <div className="h-min-screen flex flex-grow flex-col px-10 py-20">
      <div className="flex flex-col justify-evenly md:flex-row">
        <div>
          <h3 className="py-10 text-3xl font-bold">Elérhetőségek</h3>
          <h4 className="py-4 text-xl font-semibold">Cím</h4>
          <div className="">
            540095 Marosvásárhely, str. Nicolae Grigorescu nr. 15A/1 (3-as
            bentlakás)
          </div>
          <h4 className="py-4 text-xl font-semibold">Telefon</h4>
          <div className="flex justify-between">
            <div>
              <span className="">Barthi Dóra</span>
              <span className="pl-2 text-sm font-bold text-neutral-700">
                Irodavezető
              </span>
              <div className="font-light italic">+40 765 411 295</div>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <span className="">Varga László</span>
              <span className="pl-2 text-sm font-bold text-neutral-700">
                MMDSZ elnök
              </span>
              <div className="font-light italic">+40 753 115 741</div>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <span className="">Biró Konrád-János</span>
              <span className="pl-2 text-sm font-bold text-neutral-700">
                Főszervező
              </span>
              <div className="font-light italic">+40 748 536 530</div>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <span className="">Deák Gellért-Gedeon</span>
              <span className="pl-2 text-sm font-bold text-neutral-700">
                Főszervező
              </span>
              <div className="font-light italic">+40 767 407 308</div>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <span className="">Márton Kincső</span>
              <span className="pl-2 text-sm font-bold text-neutral-700">
                Főszervező
              </span>
              <div className="font-light italic">+40 758 015 401</div>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <span className="">Miklós Noémi</span>
              <span className="pl-2 text-sm font-bold text-neutral-700">
                Főszervező
              </span>
              <div className="font-light italic">+40 741 761 518</div>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <span className="">Szabó-Benedek Nóra</span>
              <span className="pl-2 text-sm font-bold text-neutral-700">
                Főszervező
              </span>
              <div className="font-light italic">+40 749 967 824</div>
            </div>
          </div>
          <h4 className="py-4 text-xl font-semibold">Email</h4>
          <div className="">
            <span className="font-light italic">tdk@mmdsz.ro</span>
          </div>
        </div>
        <div>
          <h3 className="py-10 text-3xl font-bold">Küldj nekünk üzenetet</h3>

          <form>
            <div className="group relative z-0 mb-6 w-full">
              <input
                type="email"
                name="email"
                id="email"
                className="-500 peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0   text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder=" "
                required
              />
              <label
                htmlFor="email"
                className="peer-focus: absolute top-3 -z-10  origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600"
              >
                Email cím
              </label>
            </div>
            <div className="group relative z-0 mb-6 w-full">
              <input
                type="text"
                name="message"
                id="message"
                className="-500 peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0  text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder=" "
                required
              />
              <label
                htmlFor="message"
                className="peer-focus: absolute top-3 -z-10  origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600"
              >
                Üzenet
              </label>
            </div>
            <div className="group relative z-0 mb-6 w-full">
              <input
                type="text"
                name="name"
                id="name"
                className="-500 peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0  text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder=" "
                required
              />
              <label
                htmlFor="name"
                className="peer-focus: absolute top-3 -z-10  origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600"
              >
                Neved
              </label>
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-tdk-accent px-10 py-2 font-semibold uppercase text-white drop-shadow-md hover:underline xl:text-xl"
            >
              Küldés
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default withLayout(Contact);

import { withLayout } from "../layout/withLayout";

const Contact = () => {
  return (
    <div className="h-min-screen px-10 py-20 md:mx-auto md:w-1/2 md:px-0">
      <h2 className="pb-10 text-center text-5xl font-bold">Elérhetőségek</h2>
      <div className="space-y-8">
        <div>
          <h4 className="text-xl font-semibold">Cím</h4>
          <a
            className="hover:text-tdk-accent hover:underline"
            href="https://www.google.com/maps/place/1,+Caminul+nr.3,+Strada+Nicolae+Grigorescu+15%2FA,+T%C3%A2rgu+Mure%C8%99/@46.5533507,24.5709639,17.3z/data=!4m5!3m4!1s0x474bb64758ead0c1:0xd62cff584698cf3d!8m2!3d46.5533521!4d24.5730584?entry=ttu"
          >
            540095 Marosvásárhely, str. Nicolae Grigorescu nr. 15A/1 (3-as bentlakás)
          </a>
        </div>
        <div>
          <h4 className="text-xl font-semibold">Telefon</h4>
          <div className="space-y-4">
            <div className="flex justify-between">
              <div>
                <span className="">Barthi Dóra</span>
                <span className="pl-2 text-sm font-bold text-neutral-700">Irodavezető</span>
              </div>
              <a className="font-light italic hover:text-tdk-accent hover:underline" href="tel:+40 765 411 295">
                +40 765 411 295
              </a>
            </div>
            <div className="flex justify-between">
              <div>
                <span className="">Czink Gergő</span>
                <span className="pl-2 text-sm font-bold text-neutral-700">MMDSZ elnök</span>
              </div>
              <a className="font-light italic hover:text-tdk-accent hover:underline" href="tel:+40 753 115 741">
                +40 753 115 741
              </a>
            </div>
            <div className="flex justify-between">
              <div>
                <span className="">Barcsay Zselyke</span>
                <span className="pl-2 text-sm font-bold text-neutral-700">Főszervező</span>
              </div>
              <a className="font-light italic hover:text-tdk-accent hover:underline" href="tel:+40 747 647 457">
                +40 747 647 457
              </a>
            </div>
            <div className="flex justify-between">
              <div>
                <span className="">Biró Edina-Kata</span>
                <span className="pl-2 text-sm font-bold text-neutral-700">Főszervező</span>
              </div>
              <a className="font-light italic hover:text-tdk-accent hover:underline" href="tel:+40 746 412 041">
                +40 746 412 041
              </a>
            </div>
            <div className="flex justify-between">
              <div>
                <span className="">Geréd Ákos</span>
                <span className="pl-2 text-sm font-bold text-neutral-700">Főszervező</span>
              </div>
              <a className="font-light italic hover:text-tdk-accent hover:underline" href="tel:+40 741 100 578">
                +40 741 100 578
              </a>
            </div>
            <div className="flex justify-between">
              <div>
                <span className="">Miklós Noémi</span>
                <span className="pl-2 text-sm font-bold text-neutral-700">Főszervező</span>
              </div>
              <a className="font-light italic hover:text-tdk-accent hover:underline" href="tel:+40 741 761 518">
                +40 741 761 518
              </a>
            </div>
            <div className="flex justify-between">
              <div>
                <span className="">Gál Zsuzsánna</span>
                <span className="pl-2 text-sm font-bold text-neutral-700">Főszervező</span>
              </div>
              <a className="font-light italic hover:text-tdk-accent hover:underline" href="tel:+40 741 554 554">
                +40 741 554 554
              </a>
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-xl font-semibold">Email</h4>
          <div className="">
            <a className="font-light italic hover:text-tdk-accent hover:underline" href="mailto:tdk@mmdsz.ro">
              tdk@mmdsz.ro
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withLayout(Contact);

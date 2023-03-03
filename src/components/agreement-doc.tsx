// @ts-ignore
import exampleAgreementDocUrl from "../assets/tdk-pelda-nyilatkozat.docx";
// @ts-ignore
import agreementDocUrl from "../assets/tdk-nyilatkozat.docx";
import { SignupStep } from "./signup-wrapper";

interface AgreementDocFormProps {
  agreementDoc?: File;
  setAgreementDoc: (agreementDoc: File) => void;
  setCurrentStep: (step: SignupStep) => void;
}

const AgreementDoc = ({
  agreementDoc,
  setAgreementDoc,
  setCurrentStep,
}: AgreementDocFormProps) => {
  return (
    <div>
      <div className="ml-4">
        <p className="mt-8 text-gray-600">
          A saját hozzájárulási nyilatkozat nevű dokumentum igazolja a szerző
          hozzájárulását a Kivonathoz.{" "}
        </p>
        <p>
          <a className="text-sky-600 underline" href={exampleAgreementDocUrl}>
            Egy kitöltött, példa dokumentum ide kattintással tölthető le.
          </a>
          , Míg az eredeti, kitöltendő dokumentum{" "}
          <a className="text-sky-600 underline" href={agreementDocUrl}>
            innen tölthető le.
          </a>
        </p>
        <p className="text-gray-600">
          A kék színnel kiegészített részek példaként szolgálnak az űrlap
          kitöltéséhez. Kérünk, hogy figyelmesen olvasd végig a dokumentumot
          kitöltés közben. Amennyiben további kérdések merülnének fel, keress
          minket az e-mail címünkön (tdk@mmdsz.ro), vagy írj a konferencia
          Facebook oldalán.
        </p>
      </div>
      <div className="my-6 flex w-full items-center justify-center">
        <label
          htmlFor="agreementDoc"
          className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50"
        >
          {!agreementDoc ? (
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="h-16 w-16"
              >
                <path d="M23 17h-3v-3h-2v3h-3v2h3v3h2v-3h3v-2zm-7 5v2h-15v-24h10.189c3.163 0 9.811 7.223 9.811 9.614v2.386h-2v-1.543c0-4.107-6-2.457-6-2.457s1.518-6-2.638-6h-7.362v20h13z" />
              </svg>
              <p className="mb-2 py-3 text-gray-900">
                A hozzájárulási nyilatkozat feltöltéséhez kattints erre a mezőre
              </p>
              <p className="text-xs text-gray-500">.pdf vagy .docx</p>
            </div>
          ) : (
            <div>
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="h-16 w-16"
                >
                  <path d="M4 22v-20h16v11.543c0 4.107-6 2.457-6 2.457s1.518 6-2.638 6h-7.362zm18-7.614v-14.386h-20v24h10.189c3.163 0 9.811-7.223 9.811-9.614zm-10.967.614c2.258-4.05 3.826-6.13 5.967-7.999l-.278-.641c-2.596 1.616-3.993 2.833-6.106 5.231-1.125-.802-1.76-1.169-2.76-1.654l-.856.792c1.711 1.585 2.64 2.631 4.033 4.271z" />
                </svg>
                <p className="py-3 text-lg text-gray-900">
                  {agreementDoc.name}
                </p>
                <p className="mb-2 text-sm text-gray-500">
                  Módosításhoz húzz ide egy más fájlt vagy kattints erre a
                  mezőre
                </p>
              </div>
            </div>
          )}
          <input
            id="agreementDoc"
            type="file"
            name="document"
            accept="application/msword, application/pdf"
            className="hidden"
            onChange={(e) => {
              if (e.target.files) {
                setAgreementDoc(e.target.files[0]);
              }
            }}
          />
        </label>
      </div>
      <div className="flex flex-col justify-center gap-x-4 py-2 md:flex-row md:justify-evenly">
        <div className="flex w-full flex-col px-3">
          <div className="overflow-hidden rounded-full bg-gray-200">
            <div className="h-2 w-5/6 rounded-full bg-blue-400"></div>
          </div>
          <p className="pt-3 text-sm font-light text-gray-500">
            5/6 - Saját hozzájárulási nyilatkozat feltöltése
          </p>
        </div>
        {agreementDoc ? (
          <button
            className="mt-4 rounded-full bg-tdk-accent px-10 py-2 font-semibold uppercase text-white drop-shadow-md hover:underline xl:text-xl"
            onClick={() => {
              setCurrentStep("confirmSignup");
            }}
          >
            Tovább
          </button>
        ) : (
          <button
            className="mt-4 rounded-full bg-gray-300 px-10 py-2 font-semibold uppercase text-black drop-shadow-md xl:text-xl"
            disabled
            title="A továbblépéshez fel kell töltened a hozzájárulási nyilatkozatot!"
          >
            Tovább
          </button>
        )}
      </div>
    </div>
  );
};

export default AgreementDoc;

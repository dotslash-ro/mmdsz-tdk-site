import { useState } from "react";
import { SignupStep } from "./signup-wrapper";
import CoordinatorInfo, { CoordinatorInfoSchema } from "./coordinator-info";

interface CoordinatorInfosProps {
  setCurrentStep: (step: SignupStep) => void;
  setCoordinatorInfosParent: (CoordinatorInfos: Array<CoordinatorInfoSchema>) => void;
  defaultValues?: Array<CoordinatorInfoSchema>;
}

const CoordinatorInfos = ({ setCurrentStep, setCoordinatorInfosParent, defaultValues }: CoordinatorInfosProps) => {
  const [coordinatorCount, setCoordinatorCount] = useState(defaultValues?.length ?? 1);
  const [coordinatorInfos, setCoordinatorInfos] = useState<Array<CoordinatorInfoSchema>>([]);

  return (
    <div>
      {coordinatorCount == 0 ? (
        <div className="flex items-center justify-center py-20 text-sm font-light text-gray-500">
          Adj hozzá témavezetőket az "Témavezető hozzáadása" gombbal.
        </div>
      ) : (
        <div>
          {[...Array(coordinatorCount).keys()].map((index) => {
            return (
              <div key={index}>
                <CoordinatorInfo
                  setCoordinatorInfo={(coordinatorInfo) => setCoordinatorInfos([...coordinatorInfos, coordinatorInfo])}
                  defaultValues={defaultValues && defaultValues[index]}
                  removeCoordinatorForm={() => setCoordinatorCount(coordinatorCount - 1)}
                />
              </div>
            );
          })}
        </div>
      )}

      <button
        className="mt-6 mb-8 w-full rounded-full border border-gray-300 py-2 text-center uppercase text-black drop-shadow-md hover:bg-gray-100 hover:underline xl:text-lg"
        onClick={() => {
          setCoordinatorCount(coordinatorCount + 1);
        }}
      >
        Témavezető hozzáadása
      </button>
      <div className="flex flex-col justify-center gap-x-4 py-2 md:flex-row md:justify-evenly">
        <div className="flex w-full flex-col px-3">
          <div className="overflow-hidden rounded-full bg-gray-200">
            <div className="h-2 w-2/3 rounded-full bg-tdk-primary"></div>
          </div>
          <p className="mt-4 text-sm font-light text-gray-500">4/6 - Témavezető(k) adatai</p>
        </div>
        {coordinatorInfos.length > 0 ? (
          <button
            className="my-2 rounded-full bg-tdk-accent px-10 py-2 font-semibold uppercase text-white drop-shadow-md hover:underline xl:text-lg"
            onClick={() => {
              setCoordinatorInfosParent(coordinatorInfos);
              setCurrentStep("agreementDoc");
            }}
          >
            Tovább
          </button>
        ) : (
          <button
            className="my-2 rounded-full bg-gray-300 px-10 py-2 font-semibold uppercase drop-shadow-md xl:text-lg"
            disabled
          >
            Tovább
          </button>
        )}
      </div>
    </div>
  );
};

export default CoordinatorInfos;

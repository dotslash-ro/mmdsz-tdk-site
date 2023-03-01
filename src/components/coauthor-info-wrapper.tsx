import { useEffect, useState } from "react";
import CoAuthorInfo, { CoAuthorInfoSchema } from "./coauthor-info";
import { SignupStep } from "./signup-wrapper";

interface CoAuthorInfosProps {
  setCurrentStep: (step: SignupStep) => void;
  setCoAuthorInfosParent: (coAuthorInfos: Array<CoAuthorInfoSchema>) => void;
}

const CoAuthorInfos = ({
  setCurrentStep,
  setCoAuthorInfosParent,
}: CoAuthorInfosProps) => {
  const [coAuthorCount, setCoAuthorCount] = useState(0);
  const [coAuthorInfos, setCoAuthorInfos] = useState<Array<CoAuthorInfoSchema>>(
    []
  );

  return (
    <div>
      {coAuthorCount == 0 ? (
        <div className="flex items-center justify-center py-20 text-sm font-light text-gray-500">
          Adj hozzá társszerzőket az "Társszerző hozzáadása" gombbal.
        </div>
      ) : (
        <div>
          {[...Array(coAuthorCount).keys()].map((index) => {
            return (
              <div key={index}>
                <CoAuthorInfo
                  setCoAuthorInfo={(coAuthorInfo) =>
                    setCoAuthorInfos([...coAuthorInfos, coAuthorInfo])
                  }
                  removeCoAuthorForm={() => setCoAuthorCount(coAuthorCount - 1)}
                  index={index}
                />
              </div>
            );
          })}
        </div>
      )}

      <button
        className="mt-6 mb-8 w-full rounded-full border border-gray-300 py-2 text-center uppercase text-black drop-shadow-md hover:bg-gray-100 hover:underline xl:text-lg"
        onClick={() => {
          setCoAuthorCount(coAuthorCount + 1);
        }}
      >
        Társszerző hozzáadása
      </button>
      <div className="flex flex-col justify-center gap-x-4 py-2 md:flex-row md:justify-evenly">
        <div className="flex w-full flex-col px-3">
          <div className="overflow-hidden rounded-full bg-gray-200">
            <div className="h-2 w-1/2 rounded-full bg-blue-400"></div>
          </div>
          <p className="mt-4 text-sm font-light text-gray-500">
            3/6 - Társszerzők adatai
          </p>
        </div>
        <button
          className="my-2 rounded-full bg-tdk-accent px-10 py-2 font-semibold uppercase text-white drop-shadow-md hover:underline xl:text-xl"
          onClick={() => {
            setCoAuthorInfosParent(coAuthorInfos);
            setCurrentStep("coordinatorInfo");
          }}
        >
          Tovább
        </button>
      </div>
    </div>
  );
};

export default CoAuthorInfos;

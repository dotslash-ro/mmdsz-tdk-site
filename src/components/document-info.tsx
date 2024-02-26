import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { sectionList } from "../constants";
import { SignupStep } from "./signup-wrapper";
import { ClipLoader } from "react-spinners";

const DocumentInfoSchema = z.object({
  section: z.enum(sectionList, {
    errorMap: () => ({
      message: "Válassz egy témakört!",
    }),
  }),
  hungarianTitle: z.string().min(1, { message: "Add meg a Kivonatod magyar címét!" }),
  romanianTitle: z.string().min(1, { message: "Add meg a Kivonatod román címét!" }),
  englishTitle: z.string().min(1, { message: "Add meg a Kivonatod angol címét!" }),
  introduction: z.string().min(1, { message: 'Vezesd be a Kivonatod "Bevezetés" bekezdését!' }),
  mission: z.string().min(1, { message: 'Vezesd be a Kivonatod "Célkitűzések" bekezdését!' }),
  methods: z.string().min(1, { message: 'Vezesd be a Kivonatod "Módszerek" bekezdését!' }),
  results: z.string().min(1, { message: 'Vezesd be a Kivonatod "Eredmények" bekezdését!' }),
  conclusions: z.string().min(1, {
    message: 'Vezesd be a Kivonatod "Következtetések" bekezdését!',
  }),
});

export type DocumentInfoSchema = z.infer<typeof DocumentInfoSchema>;

interface DocumentInfoFormProps {
  setDocumentInfo: (DocumentInfo: DocumentInfoSchema) => void;
  setCurrentStep: (step: SignupStep) => void;
  defaultValues?: DocumentInfoSchema;
}

const DocumentInfo = ({ setDocumentInfo, setCurrentStep, defaultValues }: DocumentInfoFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<DocumentInfoSchema>({
    resolver: zodResolver(DocumentInfoSchema),
    mode: "onBlur",
    defaultValues,
  });

  const onSubmit: SubmitHandler<DocumentInfoSchema> = (data) => {
    setDocumentInfo(data);
    setCurrentStep("coAuthorInfo");
    localStorage.setItem("documentInfo", JSON.stringify(data));
  };

  if (isSubmitting) {
    return (
      <div className="flex h-48 items-center justify-center">
        <ClipLoader loading={true} />
      </div>
    );
  }

  return (
    <div>
      <form className="py-10 pr-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <label htmlFor="title" className="mb-2 block text-lg font-medium text-gray-900">
            Kivonat címe magyarul
          </label>
          <input
            type="text"
            id="title"
            data-error={errors.hungarianTitle}
            className="ml-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-tdk-primary focus:outline-none data-[error=true]:border-red-400"
            {...register("hungarianTitle")}
          />
          {errors.hungarianTitle && (
            <p className="mt-2 text-xs italic text-red-500"> {errors.hungarianTitle?.message}</p>
          )}
        </div>
        <div className="mb-6">
          <label htmlFor="title" className="mb-2 block text-lg font-medium text-gray-900">
            Kivonat címe románul
          </label>
          <input
            type="text"
            id="title"
            data-error={errors.romanianTitle}
            className="ml-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-tdk-primary focus:outline-none data-[error=true]:border-red-400"
            {...register("romanianTitle")}
          />
          {errors.romanianTitle && <p className="mt-2 text-xs italic text-red-500"> {errors.romanianTitle?.message}</p>}
        </div>
        <div className="mb-6">
          <label htmlFor="title" className="mb-2 block text-lg font-medium text-gray-900">
            Kivonat címe angolul
          </label>
          <input
            type="text"
            id="title"
            data-error={errors.englishTitle}
            className="ml-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-tdk-primary focus:outline-none data-[error=true]:border-red-400"
            {...register("englishTitle")}
          />
          {errors.englishTitle && <p className="mt-2 text-xs italic text-red-500"> {errors.englishTitle?.message}</p>}
        </div>
        <div className="mb-6">
          <label htmlFor="sections" className="mb-2 block text-lg font-medium text-gray-900">
            Témakör
          </label>
          <select
            id="sections"
            className="ml-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-tdk-primary focus:outline-none"
            {...register("section")}
          >
            {sectionList.map((section, index) => {
              return (
                <option className="text-md" key={index}>
                  {section}
                </option>
              );
            })}
          </select>
          {errors.section && <p className="mt-2 text-xs italic text-red-500"> {errors.section?.message}</p>}
        </div>
        <h3 className="mt-10 mb-4 block text-lg font-medium text-gray-900">Kivonat tartalmának feltöltése</h3>
        <div className="py-2">
          Formai követelmények:
          <ul className="list-disc py-2 text-sm text-gray-400">
            <li>A kivonat maximális hossza 2200 karakter (szóköz nélkül, cím nélkül).</li>
          </ul>
        </div>
        <div className="mb-6">
          <label htmlFor="introduction" className="mb-2 block text-sm font-medium text-gray-900">
            Bevezetés
          </label>
          <textarea
            id="introduction"
            className="sm:text-md block w-full whitespace-pre-line rounded-lg border border-gray-300 bg-gray-50 p-6 text-gray-900 focus:border-tdk-primary focus:outline-none"
            {...register("introduction")}
          />
          {errors.introduction && <p className="mt-2 text-xs italic text-red-500"> {errors.introduction?.message}</p>}
        </div>
        <div className="mb-6">
          <label htmlFor="mission" className="mb-2 block text-sm font-medium text-gray-900">
            Célkitűzések
          </label>
          <textarea
            id="mission"
            className="sm:text-md block w-full whitespace-pre-line rounded-lg border border-gray-300 bg-gray-50 p-6 text-gray-900 focus:border-tdk-primary focus:outline-none"
            {...register("mission")}
          />
          {errors.mission && <p className="mt-2 text-xs italic text-red-500"> {errors.mission?.message}</p>}
        </div>
        <div className="mb-6">
          <label htmlFor="methods" className="mb-2 block text-sm font-medium text-gray-900">
            Módszer
          </label>
          <textarea
            id="methods"
            className="sm:text-md block w-full whitespace-pre-line rounded-lg border border-gray-300 bg-gray-50 p-6 text-gray-900 focus:border-tdk-primary focus:outline-none"
            {...register("methods")}
          />
          {errors.methods && <p className="mt-2 text-xs italic text-red-500"> {errors.methods?.message}</p>}
        </div>
        <div className="mb-6">
          <label htmlFor="results" className="mb-2 block text-sm font-medium text-gray-900">
            Eredmények
          </label>
          <textarea
            id="results"
            className="sm:text-md block w-full whitespace-pre-line rounded-lg border border-gray-300 bg-gray-50 p-6 text-gray-900 focus:border-tdk-primary focus:outline-none"
            {...register("results")}
          />
          {errors.results && <p className="mt-2 text-xs italic text-red-500"> {errors.results?.message}</p>}
        </div>
        <div className="mb-6">
          <label htmlFor="conclusions" className="mb-2 block text-sm font-medium text-gray-900">
            Következtetés
          </label>
          <textarea
            id="conclusions"
            className="sm:text-md block w-full whitespace-pre-line rounded-lg border border-gray-300 bg-gray-50 p-6 text-gray-900 focus:border-tdk-primary focus:outline-none"
            {...register("conclusions")}
          />
          {errors.conclusions && <p className="mt-2 text-xs italic text-red-500"> {errors.conclusions?.message}</p>}
        </div>

        <div className="flex flex-col justify-center gap-x-4 py-2 md:flex-row md:justify-evenly">
          <div className="flex w-full flex-col px-3">
            <div className="overflow-hidden rounded-full bg-gray-200">
              <div className="h-2 w-1/3 rounded-full bg-tdk-primary"></div>
            </div>
            <p className="py-4 text-sm font-light text-gray-500">2/6 - Kivonat feltöltése</p>
          </div>
          {isValid ? (
            <button
              className="rounded-full bg-tdk-accent px-10 py-2 font-semibold uppercase text-white drop-shadow-md hover:underline xl:text-lg"
              type="submit"
            >
              Tovább
            </button>
          ) : (
            <button
              className="rounded-full bg-gray-300 px-10 py-2 font-semibold uppercase text-black drop-shadow-md xl:text-lg"
              disabled
              title="A továbblépéshez ki kell töltedened a kivonat adatait!"
            >
              Tovább
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default DocumentInfo;

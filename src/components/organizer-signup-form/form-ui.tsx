import type { ReactNode } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

export const inputClass =
  "block w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-gray-900 shadow-sm transition focus:border-tdk-accent focus:bg-white focus:outline-none focus:ring-2 focus:ring-tdk-accent/20";

export const textareaClass = `${inputClass} min-h-[9rem] whitespace-pre-line`;

export const ErrorText = ({ message }: { message?: string }) =>
  message ? <p className="mt-2 text-sm text-red-600">{message}</p> : null;

export const StepHeader = ({ step, total, title }: { step: number; total: number; title: string }) => (
  <div className="mb-10">
    <p className="text-sm font-semibold uppercase tracking-wide text-tdk-accent">
      {step} / {total}
    </p>
    <h2 className="mt-1 text-2xl font-bold text-gray-900 md:text-3xl">{title}</h2>
    <div className="mt-5 flex gap-1.5" aria-hidden>
      {Array.from({ length: total }, (_, i) => (
        <div key={i} className={`h-1.5 flex-1 rounded-full ${i < step ? "bg-tdk-accent" : "bg-gray-200"}`} />
      ))}
    </div>
  </div>
);

export const Field = ({
  label,
  htmlFor,
  hint,
  error,
  children,
}: {
  label: ReactNode;
  htmlFor: string;
  hint?: ReactNode;
  error?: string;
  children: ReactNode;
}) => (
  <div>
    <label htmlFor={htmlFor} className="mb-2 block font-semibold text-gray-900">
      {label}
    </label>
    {hint && <p className="-mt-1 mb-2 text-sm text-gray-500">{hint}</p>}
    {children}
    <ErrorText message={error} />
  </div>
);

export const Fieldset = ({
  legend,
  hint,
  error,
  children,
}: {
  legend: ReactNode;
  hint?: ReactNode;
  error?: string;
  children: ReactNode;
}) => (
  <fieldset>
    <legend className="mb-3 font-semibold text-gray-900">{legend}</legend>
    {hint && <p className="-mt-2 mb-3 text-sm text-gray-500">{hint}</p>}
    {children}
    <ErrorText message={error} />
  </fieldset>
);

/** A list of radio/checkbox options rendered as selectable cards. */
export const ChoiceList = ({
  type = "radio",
  idPrefix,
  options,
  registration,
  columns = 1,
}: {
  type?: "radio" | "checkbox";
  idPrefix: string;
  options: readonly string[];
  registration: UseFormRegisterReturn;
  columns?: 1 | 2;
}) => (
  <div className={`grid gap-2 ${columns === 2 ? "sm:grid-cols-2" : ""}`}>
    {options.map((option) => {
      const id = `${idPrefix}-${option}`;
      return (
        <label key={option} htmlFor={id} className="relative block cursor-pointer">
          <input
            type={type}
            value={option}
            id={id}
            className="peer absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 cursor-pointer accent-tdk-accent"
            {...registration}
          />
          <span className="block rounded-lg border border-gray-200 bg-white py-2.5 pl-11 pr-4 text-sm text-gray-900 transition hover:border-tdk-accent/60 peer-checked:border-tdk-accent peer-checked:bg-tdk-accent/5 peer-checked:font-medium">
            {option}
          </span>
        </label>
      );
    })}
  </div>
);

export const StepFooter = ({
  onBack,
  canProceed,
  nextLabel = "Tovább",
  disabledHint = "Töltsd ki a kötelező mezőket!",
}: {
  onBack?: () => void;
  canProceed: boolean;
  nextLabel?: string;
  disabledHint?: string;
}) => (
  <div className="mt-12 flex flex-col-reverse gap-3 border-t border-gray-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
    {onBack ? (
      <button
        type="button"
        onClick={onBack}
        className="rounded-full px-6 py-2 font-semibold uppercase text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
      >
        ← Vissza
      </button>
    ) : (
      <span />
    )}
    <button
      type="submit"
      disabled={!canProceed}
      title={canProceed ? undefined : disabledHint}
      className="rounded-full bg-tdk-accent px-10 py-2 font-semibold uppercase text-white drop-shadow-md transition hover:underline disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-600 disabled:drop-shadow-none disabled:hover:no-underline xl:text-lg"
    >
      {nextLabel}
    </button>
  </div>
);

export type StepProps<T> = {
  defaultValues?: Partial<T>;
  onNext: (data: T) => void;
  onBack: (draft: T) => void;
};

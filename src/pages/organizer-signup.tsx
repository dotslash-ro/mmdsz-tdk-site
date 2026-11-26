import { useRef } from "react";
import OrganizerSignupMultistepForm from "../components/organizer-signup-form";
import { withLayout } from "../layout/withLayout";

const OrganizerSignup = ({ enabled }: { enabled: boolean }) => {
  const scrollToRef = useRef<HTMLDivElement | null>(null);
  return (
    <div className="mx-auto max-w-3xl scroll-mt-20 px-5 py-16 md:py-20" ref={scrollToRef}>
      <h1 className="pb-12 text-center text-4xl font-bold md:pb-16 md:text-5xl">Szervezői Jelentkezés</h1>
      <OrganizerSignupMultistepForm scrollToRef={scrollToRef} enabled={enabled} />
    </div>
  );
};

export default withLayout(OrganizerSignup);

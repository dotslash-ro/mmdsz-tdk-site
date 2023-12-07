import { useRef } from "react";
import OrganizerSignupMultistepForm from "../components/organizer-signup-form";
import { withLayout } from "../layout/withLayout";

const OrganizerSignup = () => {
  const scrollToRef = useRef<HTMLDivElement | null>(null);
  return (
    <div className="px-5 py-20 md:mx-auto md:w-1/2 md:px-0" ref={scrollToRef}>
      <h1 className="pb-20 text-center text-5xl font-bold">Szervezői Jelentkezés</h1>
      <OrganizerSignupMultistepForm scrollToRef={scrollToRef}/>
    </div>
  );
};

export default withLayout(OrganizerSignup);

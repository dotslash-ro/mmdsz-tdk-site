import OrganizerSingupForm from "../components/organizer-signup-form";
import { withLayout } from "../layout/withLayout";

const OrganizerSignup = () => {
  return (
    <div className="px-5 py-20 md:mx-auto md:w-1/2 md:px-0">
      <h1 className="pb-20 text-center text-5xl font-bold">Szervezői Jelentkezés</h1>
      <OrganizerSingupForm />
    </div>
  );
};

export default withLayout(OrganizerSignup);

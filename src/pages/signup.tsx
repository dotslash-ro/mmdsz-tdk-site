import { Helmet } from "react-helmet";
import { withLayout } from "../layout/withLayout";
import SignupWrapper from "../components/signup-wrapper";

const Signup = () => {
  return (
    <>
      <Helmet>
        <title>32. TDK - Jelentkezés</title>
      </Helmet>
      <div className="mx-auto max-w-3xl">
        <SignupWrapper signupEnabled={true} />
      </div>
    </>
  );
};

export default withLayout(Signup);

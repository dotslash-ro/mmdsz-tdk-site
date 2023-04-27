import { ClipLoader } from "react-spinners";

interface WorkshopSignupButtonProps {
  hasSignedUp: boolean;
  canSignUp: boolean;
  hasLoggedIn: boolean;
  onSignUp: () => void;
  onCancelSignup: () => void;
  noOfAvailableSeats: number;
  loading: boolean;
}

const WorkshopSignupButton = ({
  hasSignedUp,
  hasLoggedIn,
  canSignUp,
  onSignUp,
  onCancelSignup,
  noOfAvailableSeats,
  loading,
}: WorkshopSignupButtonProps) => {
  if (!hasLoggedIn) {
    return null;
  }
  if (hasSignedUp) {
    return (
      <div className="flex w-full items-center justify-between">
        Már jelenteztél erre a workshopra!
        <button
          className="text-md rounded-full border px-6 py-4 font-light drop-shadow-md hover:underline"
          onClick={onCancelSignup}
        >
          {loading ? <ClipLoader /> : "Jelentkezés visszavonása"}
        </button>
      </div>
    );
  }

  if (noOfAvailableSeats <= 0) {
    return (
      <div className="flex w-full justify-center">
        Erre a műhelymunkára elfogytak a helyek. Esetleges felszabadult
        helyekért kövesd ezt az oldalt!
      </div>
    );
  }

  if (!canSignUp) {
    return (
      <div className="flex w-full justify-center">
        Nem jelentkezhetsz több műhelymunkára!
      </div>
    );
  }
  return (
    <button
      className="text-md rounded-full bg-tdk-primary px-6 py-4 font-semibold text-white hover:underline"
      onClick={onSignUp}
    >
      {loading ? <ClipLoader color="white" /> : "Jelentkezés"}
    </button>
  );
};

export default WorkshopSignupButton;

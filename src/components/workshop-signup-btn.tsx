import { ClipLoader } from "react-spinners";

interface WorkshopSignupButtonProps {
  hasSignedUp: boolean;
  canSignUp: boolean;
  hasLoggedIn: boolean;
  loading: boolean;
  onSignUp: () => void;
  onCancelSignup: () => void;
  noOfAvailableSeats: number;
  disable: boolean;
}

const WorkshopSignupButton = ({
  hasSignedUp,
  hasLoggedIn,
  canSignUp,
  loading,
  onSignUp,
  onCancelSignup,
  noOfAvailableSeats,
  disable,
}: WorkshopSignupButtonProps) => {
  if (!hasLoggedIn) {
    return null;
  }
  if (loading) {
    return (
      <div className="flex w-full items-center justify-between">
        Már jelenteztél erre a workshopra!
        <button className="text-md rounded-full border px-4 py-2 font-light drop-shadow-md hover:underline" disabled>
          <ClipLoader size={20} color="#000000" />
        </button>
      </div>
    );
  }
  if (hasSignedUp) {
    return (
      <div className="flex w-full items-center justify-between">
        Már jelenteztél erre a workshopra!
        <button
          className="text-md rounded-full border px-4 py-2 font-light drop-shadow-md hover:underline"
          onClick={onCancelSignup}
        >
          Jelentkezés visszavonása
        </button>
      </div>
    );
  }

  if (noOfAvailableSeats <= 0) {
    return (
      <div className="flex w-full justify-center">
        Erre a műhelymunkára elfogytak a helyek. Esetleges felszabadult helyekért kövesd ezt az oldalt!
      </div>
    );
  }

  if (!canSignUp) {
    return <div className="flex w-full justify-center">Nem jelentkezhetsz több műhelymunkára!</div>;
  }
  return (
    <button
      className="text-md rounded-full bg-tdk-primary px-4 py-2 font-semibold text-white hover:underline disabled:pointer-events-none disabled:opacity-75"
      onClick={onSignUp}
      disabled={disable}
    >
      Jelentkezés
    </button>
  );
};

export default WorkshopSignupButton;

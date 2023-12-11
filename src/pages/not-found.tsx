import { Link } from "react-router-dom";
import { withLayout } from "../layout/withLayout";

const NotFound = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2 text-2xl font-light text-neutral-500">
      Ezen az oldalon nem található tartalom.{" "}
      <Link to="/" className="text-sm text-tdk-accent hover:underline">
        Vissza a főoldalra
      </Link>
    </div>
  );
};

export default withLayout(NotFound);

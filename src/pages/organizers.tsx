import { withLayout } from "../layout/withLayout";

const Organizers = () => {
  return (
    <div className="px-10 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-stretch gap-10">
      <div className="rounded-lg border border-gray-300 drop-shadow-md flex justify-center items-center px-10 py-8">asd</div>
      <div className="rounded-lg border border-gray-300 drop-shadow-md flex justify-center items-center px-10 py-8">asd</div>
      <div className="rounded-lg border border-gray-300 drop-shadow-md flex justify-center items-center px-10 py-8">asd</div>
      <div className="rounded-lg border border-gray-300 drop-shadow-md flex justify-center items-center px-10 py-8">asd</div>
      <div className="rounded-lg border border-gray-300 drop-shadow-md flex justify-center items-center px-10 py-8">asd</div>
      <div className="rounded-lg border border-gray-300 drop-shadow-md flex justify-center items-center px-10 py-8">asd</div>
    </div>
  );
};

export default withLayout(Organizers);

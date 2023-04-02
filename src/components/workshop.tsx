export interface WorkshopProps {
  title: string;
  speakers: string;
  targetAudience: string;
  description: string;
  location: string;
  date: string;
  noOfAvailableSeats: number;
  noOfTotalSeats: number;
}

const Workshop = ({
  title,
  speakers,
  targetAudience,
  description,
  location,
  date,
  noOfAvailableSeats,
  noOfTotalSeats,
}: WorkshopProps) => {
  return (
    <div className="">
      <h2 className="pt-6 pb-2 text-3xl font-bold">{title}</h2>
      <h3 className="pb-2 text-xl font-light text-gray-700">{speakers}</h3>
      <h4 className="pb-6 text-sm text-gray-600">
        {location} - {date}
      </h4>
      <p className="pb-6 text-gray-700"> {description}</p>
      <div className="flex justify-between">
        <div>{targetAudience}</div>
        <div>
          {noOfAvailableSeats}/{noOfTotalSeats}
        </div>
        <button className="hover:underline ">Jelentkezés →</button>
      </div>
    </div>
  );
};

export default Workshop;

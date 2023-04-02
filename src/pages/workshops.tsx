import Workshop, { WorkshopProps } from "../components/workshop";
import { withLayout } from "../layout/withLayout";

const workshops: WorkshopProps[] = [
  {
    title: "A Day in the Life of an OB-GYN",
    speakers: "Dr. Muhammad Eli",
    targetAudience: "1.-6.",
    location: "Str. Gheorghe Doja 89.",
    date: "2023. május 15.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum dolor vel molestie maximus. Vestibulum et ultrices tortor. Nulla facilisi. Sed sed efficitur justo. Ut tristique tellus id hendrerit tincidunt. Fusce vulputate eu tellus ut ultrices. Cras eleifend, libero sed elementum ullamcorper, risus purus faucibus mauris, non facilisis magna nunc a odio. Sed luctus felis rhoncus dolor viverra consectetur ac vel metus. Proin quis enim sapien. Proin pellentesque metus orci, a ornare enim aliquet eget. Pellentesque varius felis ac neque viverra maximus. Vivamus eget ultricies metus, et fermentum nunc. Praesent sit amet elit velit. ",
    noOfAvailableSeats: 95,
    noOfTotalSeats: 100,
  },
];

const Workshops = () => {
  return (
    <div className="mx-auto py-20 px-5 lg:w-1/2">
      <h2 className="pb-10 text-center text-5xl font-bold">Workshopok</h2>
      {workshops.map((workshop) => (
        <Workshop {...workshop} />
      ))}
    </div>
  );
};

export default withLayout(Workshops);

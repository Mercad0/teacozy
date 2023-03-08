import AddressCard from "../Cards/AddressCard";
import Image from "next/image";

interface AddressProps {
  title?: string;
  src?: string;
  alt?: string;
}

function Address({
  title = "Locations",
  src = "https://content.codecademy.com/courses/freelance-1/unit-4/img-locations-background.jpg?_gl=1*1hzum4a*_ga*ODc5NTYxNDkyMy4xNjcwODcxMzAw*_ga_3LRZM6TM9L*MTY3ODIxOTg5My4zNS4xLjE2NzgyMTk5MjkuMjQuMC4w",
  alt = "another tea photo",
}: AddressProps) {
  const MoreAdresses = [
    {
      city: "Downtown",
      street: "384 West 4th St",
      suite: "Suie 108",
      state: "Portland, Maine",
    },
    {
      city: "East Bayside",
      street: "3433 Phisherman's Ave",
      suite: "(Northwest Corner)",
      state: "Portland, Maine",
    },
    {
      city: "Oakdale",
      street: "515 Crescent Avenue",
      suite: "Second, Floor",
      state: "Portland, Maine",
    },
  ];
  return (
    <>
      <h2 className="text-5xl font-bold mt-24 text-amber-500" id="locations">
        {title}
      </h2>
      <div className="flex flex-col items-center justify-center mt-6 relative">
        <Image
          src={src}
          alt={alt}
          width={1100}
          height={600}
          priority={true}
          className="h-[500px] w-[1100px]"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-12 py-2 justify-between">
          <div className="md:flex md:gap-10 gap-2">
            {MoreAdresses.map((address) => (
              <AddressCard
                key={address.city}
                street={address.street}
                city={address.city}
                suite={address.suite}
                state={address.state}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Address;

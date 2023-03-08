import AddressCard from "./Cards/AddressCard";

function Address() {
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
    <div className="md:flex md:gap-10 gap-2">
      {MoreAdresses.map((address) => (
        <AddressCard
          key={address.city}
          street={address.city}
          suite={address.suite}
          state={address.state}
        />
      ))}
    </div>
  );
}

export default Address;

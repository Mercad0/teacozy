interface CardProps {
  city?: string;
  street?: string;
  suite?: string;
  state?: string;
}

function AddressCard({
  city = "Downtown",
  street = "123 Main St",
  suite = "suite 123",
  state = "NY, NY",
}: CardProps) {
  return (
    <div className="w-36 h-36 md:w-72 md:h-60 bg-black m-2 py-2 rounded-lg text-center transition-all hover:scale-[1.02] justify-around opacity-75 hover:opacity-100 text-white">
      <div className="flex flex-col">
      <h3 className="md:text-4xl text-md font-bold mb-2 md:mb-4">{city}</h3>
      <p className="md:text-xl text-base font-light mb-2 md:mb-6">{street}</p>
      <p className="md:text-xl text-base font-light mb-2 md:mb-6">{suite}</p>
      <p className="md:text-xl text-base font-light mb-2 md:mb-4">{state}</p>
      </div>
    </div>
  );
}

export default AddressCard;

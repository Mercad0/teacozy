interface CardProps {
    city?: string;
    street?: string;
    suite?: string;
    state?: string;
    
}

function Address({
    city = "Downtown",
    street = "123 Main St",
    suite = "suite 123",
    state = "NY, NY",
 }: CardProps) {
  return (
    <div className="w-72 h-60 bg-black p-4 rounded-lg text-center flex-wrap transition-all hover:scale-[1.02] opacity-75 hover:opacity-100">
    <h3 className="text-4xl font-bold mb-4">{city}</h3>
    <p className="text-xl font-light mb-6">{street}</p>
    <p className="text-xl font-light mb-6">{suite}</p>
    <p className="text-xl font-light mb-4">{state}</p>
  </div>
  )
}

export default Address


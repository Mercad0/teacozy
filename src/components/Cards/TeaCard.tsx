interface CardProps {
  title?: string;
  src?: string;
  alt?: string;
}

function TeaCard({
  title = "amazing Tea",
  src = "https://www.foodandwine.com/thmb/6wTm7a0y87X97LK-ZMxe2787kI8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/different-types-of-tea-FT-BLOG0621-7c7fd231e66d4fea8ca9a47cad52ba79.jpg",
  alt = "Amazing Tea",
}: CardProps) {
  return (
    <div className="text-white flex flex-col md:w-96 md:h-80 w-72 h-60 text-center transition-all hover:scale-[1.06] mx-auto rounded-lg overflow-hidden hover:shadow-md hover:shadow-orange-500">
      <picture>
        <img src={src} alt={alt} className="mb-2 w-full h-72" />
      </picture>
      <div className="text-2xl py-4">
        <p>{title}</p>
      </div>
    </div>
  );
}

export default TeaCard;

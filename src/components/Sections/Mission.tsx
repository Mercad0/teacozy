import Image from "next/image"

interface MissionProps {
  title?: string,
  description?: string,
  src?: string,
  alt?: string,
}

function Mission({
  title = "Our Mission",
  description = "Handpicked, artisanally Curated, Free Range, Sustainable, Small Batch, Fair Trade, Organic Tea",
  src = "https://content.codecademy.com/courses/freelance-1/unit-4/img-mission-background.jpg?_gl=1*1hzum4a*_ga*ODc5NTYxNDkyMy4xNjcwODcxMzAw*_ga_3LRZM6TM9L*MTY3ODIxOTg5My4zNS4xLjE2NzgyMTk5MjkuMjQuMC4w",
  alt = "Some Tea"
}: MissionProps) {
  return (
    <div className="flex items-center justify-center h-full pt-[64px] relative text-white" id="mission">
        <Image
          src={src}
          alt={alt}
          width={800}
          height={100}
          priority={true}
          className="md:h-[700px] md:w-[1100px] w-96 h-80" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-black w-full py-2">
          <h2 className="md:text-4xl text-xl font-bold">{title}</h2>
          <h3 className="md:text-xl text-md font-light">
    {description}
          </h3>
        </div>
      </div>
  )
}


export default Mission
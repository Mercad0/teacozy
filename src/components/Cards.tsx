import TeaCard from "./Cards/TeaCard";

function Cards() {
  const TeaList = [
    {
      title: "Fall Berry Blitz Tea",
      alt: "Fall Berry Blitz Tea",
      src: "https://content.codecademy.com/courses/freelance-1/unit-4/img-berryblitz.jpg?_gl=1*1hzum4a*_ga*ODc5NTYxNDkyMy4xNjcwODcxMzAw*_ga_3LRZM6TM9L*MTY3ODIxOTg5My4zNS4xLjE2NzgyMTk5MjkuMjQuMC4w",
    },
    {
      title: "Spiced Rum Tea",
      alt: "Spiced Rum Tea",
      src: "https://content.codecademy.com/courses/freelance-1/unit-4/img-spiced-rum.jpg?_gl=1*1hzum4a*_ga*ODc5NTYxNDkyMy4xNjcwODcxMzAw*_ga_3LRZM6TM9L*MTY3ODIxOTg5My4zNS4xLjE2NzgyMTk5MjkuMjQuMC4w",
    },
    {
      title: "Seasonal Donuts",
      alt: "Seasonal Donuts",
      src: "https://content.codecademy.com/courses/freelance-1/unit-4/img-donut.jpg?_gl=1*1hzum4a*_ga*ODc5NTYxNDkyMy4xNjcwODcxMzAw*_ga_3LRZM6TM9L*MTY3ODIxOTg5My4zNS4xLjE2NzgyMTk5MjkuMjQuMC4w",
    },
    {
      title: "Myrtle Ave Tea",
      alt: "Myrtle Ave Tea",
      src: "https://content.codecademy.com/courses/freelance-1/unit-4/img-myrtle-ave.jpg?_gl=1*yjhkn4*_ga*ODc5NTYxNDkyMy4xNjcwODcxMzAw*_ga_3LRZM6TM9L*MTY3ODIyNjA4OS4zOC4xLjE2NzgyMjYwOTguNTEuMC4w",
    },
    {
      title: "Bedford Bizarre Tea",
      alt: "Bedford Bizarre Tea",
      src: "https://content.codecademy.com/courses/freelance-1/unit-4/img-bedford-bizarre.jpg?_gl=1*1hzum4a*_ga*ODc5NTYxNDkyMy4xNjcwODcxMzAw*_ga_3LRZM6TM9L*MTY3ODIxOTg5My4zNS4xLjE2NzgyMTk5MjkuMjQuMC4w",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center">
    <h2 className="text-5xl mt-24 font-bold py-2 text-orange-700" id="featuredTeas">
    Tea of the Month
  </h2>
  <h3 className="text-2xl font-light text-orange-500">What&rsquo;s Steeping at The Tea Cozy?</h3>
      <div className="mt-12 h-full max-w-screen flex flex-wrap justify-around gap-10">
        {TeaList.map((cards) => (
          <TeaCard
            key={cards.title}
            title={cards.title}
            alt={cards.alt}
            src={cards.src}
          />
        ))}
      </div>
      </div>
  );
}

export default Cards;

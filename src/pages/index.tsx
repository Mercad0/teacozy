import Card from "@/components/Card";


function Home() {
  return (
    <div className="text-white bg-black h-auto">
      <div className="h-16 fixed border-b bg-black border-b-white w-full shadow-md">
        <nav className="font-bold">
          <div className="flex items-center justify-between">
            <img
              className="h-14 pt-2 px-4"
              src="https://content.codecademy.com/courses/freelance-1/unit-4/img-tea-cozy-logo.png?_gl=1*1hzum4a*_ga*ODc5NTYxNDkyMy4xNjcwODcxMzAw*_ga_3LRZM6TM9L*MTY3ODIxOTg5My4zNS4xLjE2NzgyMTk5MjkuMjQuMC4w"
              alt="logo"
            />
            <div className="space-x-7 pr-4 text-2xl">
              <span className="hover:text-red-600">Mission</span>
              <span className="hover:text-red-600">Featured Tea</span>
              <span className="hover:text-red-600">Locations</span>
            </div>
          </div>
        </nav>
      </div>
      {/* Here we start the Main Content */}
      <div className="flex items-center justify-center h-full pt-[64px]">
        <img
          src="https://content.codecademy.com/courses/freelance-1/unit-4/img-mission-background.jpg?_gl=1*1hzum4a*_ga*ODc5NTYxNDkyMy4xNjcwODcxMzAw*_ga_3LRZM6TM9L*MTY3ODIxOTg5My4zNS4xLjE2NzgyMTk5MjkuMjQuMC4w"
          alt="some tea"
          className="h-[700px] w-[1000px]"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-black w-full py-2">
          <h2 className="text-4xl font-bold">Welcome to Tea Cozy</h2>
          <h3 className="text-xl font-light">
            Handpicked, artisanally Curated, Free Range, Sustainable, Small Batch, Fair Trade, Organic Tea
          </h3>
         </div>
      </div>
         <div className="flex-col text-center justify-center h-full pt-12">
        <h2  className="text-4xl font-bold py-2">Tea of the Month</h2>
        <h3 className="text-2xl font-light">
            What's Steeping at The Tea Cozy?
          </h3>
          </div>
          <div className="flex mt-8 w-11/12 mx-auto gap-10 flex-wrap justify-center">
            <Card title="Fall Berry Blitz Tea" alt="Fall Berry Blitz Tea" src="https://content.codecademy.com/courses/freelance-1/unit-4/img-berryblitz.jpg?_gl=1*1hzum4a*_ga*ODc5NTYxNDkyMy4xNjcwODcxMzAw*_ga_3LRZM6TM9L*MTY3ODIxOTg5My4zNS4xLjE2NzgyMTk5MjkuMjQuMC4w"/>
            <Card title="Spiced Rum Tea" alt="Spiced Rum Tea" src="https://content.codecademy.com/courses/freelance-1/unit-4/img-spiced-rum.jpg?_gl=1*1hzum4a*_ga*ODc5NTYxNDkyMy4xNjcwODcxMzAw*_ga_3LRZM6TM9L*MTY3ODIxOTg5My4zNS4xLjE2NzgyMTk5MjkuMjQuMC4w"/>
            <Card title="Seasonal Donuts" alt="Seasonal Donuts" src="https://content.codecademy.com/courses/freelance-1/unit-4/img-donut.jpg?_gl=1*1hzum4a*_ga*ODc5NTYxNDkyMy4xNjcwODcxMzAw*_ga_3LRZM6TM9L*MTY3ODIxOTg5My4zNS4xLjE2NzgyMTk5MjkuMjQuMC4w"/>
            <Card title="Myrtle Ave Tea" alt="Myrtle Ave Tea" src="https://content.codecademy.com/courses/freelance-1/unit-4/img-myrtle-ave.jpg?_gl=1*yjhkn4*_ga*ODc5NTYxNDkyMy4xNjcwODcxMzAw*_ga_3LRZM6TM9L*MTY3ODIyNjA4OS4zOC4xLjE2NzgyMjYwOTguNTEuMC4w"/>
            <Card title="Bedford Bizarre Tea" alt="Bedford Bizarre Tea" src="https://content.codecademy.com/courses/freelance-1/unit-4/img-bedford-bizarre.jpg?_gl=1*1hzum4a*_ga*ODc5NTYxNDkyMy4xNjcwODcxMzAw*_ga_3LRZM6TM9L*MTY3ODIxOTg5My4zNS4xLjE2NzgyMTk5MjkuMjQuMC4w"/>
         </div>
    </div>
  );
}

export default Home;

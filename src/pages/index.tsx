import Card from "@/components/Card";
import Address from "@/components/Address";

function Home() {
  return (
    <div className="text-white bg-black h-auto text-center">
      <nav className="h-16 fixed border-b bg-black border-b-white w-full shadow-md font-bold z-50">
        <div className="flex items-center justify-between">
          <img
            className="h-14 pt-2 px-4 transform hover:scale-105"
            src="https://content.codecademy.com/courses/freelance-1/unit-4/img-tea-cozy-logo.png?_gl=1*1hzum4a*_ga*ODc5NTYxNDkyMy4xNjcwODcxMzAw*_ga_3LRZM6TM9L*MTY3ODIxOTg5My4zNS4xLjE2NzgyMTk5MjkuMjQuMC4w"
            alt="logo"
          />
          <div className="space-x-7 pr-4 text-2xl flex">
            <h6 className="transform hover:scale-105 border-b-2">
              <a href="#mission" className="hover:text-red-600">
                Mission
              </a>
            </h6>
            <h6 className="transform hover:scale-110 border-b-2">
              <a href="#featuredTeas" className="hover:text-red-600">
                Featured Tea
              </a>
            </h6>
            <h6 className="transform hover:scale-105 border-b-2">
              <a href="#locations" className="hover:text-red-600">
                Locations
              </a>
            </h6>
          </div>
        </div>
      </nav>
      {/* Here we start the Main Content */}
      <div className="flex items-center justify-center h-full pt-[64px] relative"  id="mission">
        <img
          src="https://content.codecademy.com/courses/freelance-1/unit-4/img-mission-background.jpg?_gl=1*1hzum4a*_ga*ODc5NTYxNDkyMy4xNjcwODcxMzAw*_ga_3LRZM6TM9L*MTY3ODIxOTg5My4zNS4xLjE2NzgyMTk5MjkuMjQuMC4w"
          alt="some tea"
          className="h-[700px] w-[1100px]"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-black w-full py-2">
          <h2 className="text-4xl font-bold">Our Mission</h2>
          <h3 className="text-xl font-light">
            Handpicked, artisanally Curated, Free Range, Sustainable, Small
            Batch, Fair Trade, Organic Tea
          </h3>
        </div>
      </div>
      <div className="flex-col text-center justify-center mt-24" id="featuredTeas">
        <h2 className="text-4xl font-bold py-2">Tea of the Month</h2>
        <h3 className="text-2xl font-light">
          What's Steeping at The Tea Cozy?
        </h3>
      </div>
      <div className="flex mt-4 w-11/12 mx-auto gap-10 flex-wrap justify-center">
        <Card
          title="Fall Berry Blitz Tea"
          alt="Fall Berry Blitz Tea"
          src="https://content.codecademy.com/courses/freelance-1/unit-4/img-berryblitz.jpg?_gl=1*1hzum4a*_ga*ODc5NTYxNDkyMy4xNjcwODcxMzAw*_ga_3LRZM6TM9L*MTY3ODIxOTg5My4zNS4xLjE2NzgyMTk5MjkuMjQuMC4w"
        />
        <Card
          title="Spiced Rum Tea"
          alt="Spiced Rum Tea"
          src="https://content.codecademy.com/courses/freelance-1/unit-4/img-spiced-rum.jpg?_gl=1*1hzum4a*_ga*ODc5NTYxNDkyMy4xNjcwODcxMzAw*_ga_3LRZM6TM9L*MTY3ODIxOTg5My4zNS4xLjE2NzgyMTk5MjkuMjQuMC4w"
        />
        <Card
          title="Seasonal Donuts"
          alt="Seasonal Donuts"
          src="https://content.codecademy.com/courses/freelance-1/unit-4/img-donut.jpg?_gl=1*1hzum4a*_ga*ODc5NTYxNDkyMy4xNjcwODcxMzAw*_ga_3LRZM6TM9L*MTY3ODIxOTg5My4zNS4xLjE2NzgyMTk5MjkuMjQuMC4w"
        />
        <Card
          title="Myrtle Ave Tea"
          alt="Myrtle Ave Tea"
          src="https://content.codecademy.com/courses/freelance-1/unit-4/img-myrtle-ave.jpg?_gl=1*yjhkn4*_ga*ODc5NTYxNDkyMy4xNjcwODcxMzAw*_ga_3LRZM6TM9L*MTY3ODIyNjA4OS4zOC4xLjE2NzgyMjYwOTguNTEuMC4w"
        />
        <Card
          title="Bedford Bizarre Tea"
          alt="Bedford Bizarre Tea"
          src="https://content.codecademy.com/courses/freelance-1/unit-4/img-bedford-bizarre.jpg?_gl=1*1hzum4a*_ga*ODc5NTYxNDkyMy4xNjcwODcxMzAw*_ga_3LRZM6TM9L*MTY3ODIxOTg5My4zNS4xLjE2NzgyMTk5MjkuMjQuMC4w"
        />
      </div>
      <div className="flex flex-col items-center justify-center mt-28 relative">
        <h2 className="text-4xl font-bold mb-6" id="locations">Locations</h2>
        <img
          src="https://content.codecademy.com/courses/freelance-1/unit-4/img-locations-background.jpg?_gl=1*1hzum4a*_ga*ODc5NTYxNDkyMy4xNjcwODcxMzAw*_ga_3LRZM6TM9L*MTY3ODIxOTg5My4zNS4xLjE2NzgyMTk5MjkuMjQuMC4w"
          alt="another tea photo"
          className="h-[500px] w-[1100px]"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-12 py-2 justify-between">
          <Address
            city="Downtown"
            street="384 West 4th St"
            suite="Suie 108"
            state="Portland, Maine"
          />
          <Address
            city="East Bayside"
            street="3433 Phisherman's Ave"
            suite="(Northwest Corner)"
            state="Portland, Maine"
          />
          <Address
            city="Downtown"
            street="515 Crescent Avenue"
            suite="Second, Floor"
            state="Portland, Maine"
          />
        </div>
      </div>
      <footer className="text-4xl font-bold mt-24">The Tea Cozy
      <h4 className="text-2xl font-bold mb-3 mt-3">contact@teteacozy.com</h4>
      <h4 className="text-2xl font-bold mb-3">917-555-8904</h4>
      <h5 className="text-2xl font-bold mb-3 text-gray-600 text-left ml-8">Copyright The Tea Cozy 2023</h5>
      </footer>
      </div>
  );
}

export default Home;

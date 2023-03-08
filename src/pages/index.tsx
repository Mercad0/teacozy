import Mission from "@/components/Mission";
import NavBar from "@/components/Navbars/NavBar";
import Cards from "@/components/Cards";
import Address from "@/components/Address";
import Footer from "@/components/Footer";

function Home() {
  return (
    <div className="flex flex-col max-w-fit text-white relative text-center w-full max-h-full mb-40">
      <NavBar />
      <Mission />
      <h2 className="text-4xl mt-24 font-bold py-2" id="featuredTeas">
        Tea of the Month
      </h2>
      <h3 className="text-2xl font-light">What's Steeping at The Tea Cozy?</h3>
      <Cards />
      <div className="flex flex-col items-center justify-center mt-28 relative">
        <h2 className="text-4xl font-bold mb-6" id="locations">Locations</h2>
        <img
          src="https://content.codecademy.com/courses/freelance-1/unit-4/img-locations-background.jpg?_gl=1*1hzum4a*_ga*ODc5NTYxNDkyMy4xNjcwODcxMzAw*_ga_3LRZM6TM9L*MTY3ODIxOTg5My4zNS4xLjE2NzgyMTk5MjkuMjQuMC4w"
          alt="another tea photo"
          className="h-[500px] w-[1100px]"/>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-12 py-2 justify-between mt-8">
          <Address />
      </div>
      </div> 
     <Footer />
    </div>
  );
}

export default Home;

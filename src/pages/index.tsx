import Mission from "@/components/Sections/Mission";
import NavBar from "@/components/Navbars/NavBar";
import Cards from "@/components/Cards";
import Footer from "@/components/Footer";
import Address from "@/components/Sections/Address";

function Home() {
  return (
    <div className="flex flex-col max-w-fit text-white relative text-center w-full max-h-full mb-30">
      <NavBar />
      <Mission />
      <Cards />
      <Address />
     <Footer />
    </div>
  );
}

export default Home;

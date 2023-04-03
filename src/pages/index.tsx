import Mission from "@/components/Sections/Mission";
import NavBar from "@/components/Navbars/NavBar";
import Cards from "@/components/Cards";
import Footer from "@/components/Footer";
import Address from "@/components/Sections/Address";
import Head from "next/head";

function Home() {
  return (
    <div className="flex flex-col max-w-fit text-white relative text-center w-full max-h-full mb-30">
      <Head>
        <title>Tea Cozy</title>
        <meta name="description" content="Tea Cozy - Lots of Teas with different flavors! and Donuts" />
        <link rel="icon" href="/teaIcon.png" />
      </Head>
      <NavBar />
      <Mission />
      <Cards />
      <Address />
     <Footer />
    </div>
  );
}

export default Home;

import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import Services from "@/scenes/services";
import Gallery from "@/scenes/gallery";
import Reviews from "@/scenes/reviews";
import ContactUs from "@/scenes/contactUs";
import Footer from "@/scenes/footer";
import { useState, useEffect } from "react"
import { SelectedPage } from "@/shared/types";

function App() {

  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) {
        setIsTopOfPage(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (

    <div className="app bg-black">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage} />
      <Home
        setSelectedPage={setSelectedPage} />
      <Services
        setSelectedPage={setSelectedPage} />
      <Gallery
        setSelectedPage={setSelectedPage} />
      <Reviews
        setSelectedPage={setSelectedPage} />
      <ContactUs
        setSelectedPage={setSelectedPage} />
      <Footer />
    </div>

  )
}

export default App

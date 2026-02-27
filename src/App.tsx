import React from "react";
import Navbar from "./components/Navbar";
import ParallaxSection from "./components/ParallaxSection";
import { ServiceSection } from "./components/ServiceSection";
import { Footer } from "./components/Footer";
import { serviceItems } from "./data";
import SpringIntoActionSection from "./components/SpringIntoActionSection";
const App: React.FC = () => {
  const cards = [
    {
      src: "/service-photo/1.jpg",
      alt: "Conference and meeting",
      label: "Conference and Meeting",
    },
    {
      src: "/service-photo/2.jpg",
      alt: "Spring and summer events",
      label: "Spring and Summer Events",
    },
    {
      src: "/service-photo/3.jpg",
      alt: "Event rentals and props",
      label: "Event Rentals and Props",
    },
    {
      src: "/service-photo/venues.jpg",
      alt: "Event venue",
      label: "Venues",
    },
  ];

  return (
    <>
      <Navbar />
      <ParallaxSection />
      <div className="bg-primary z-10 h-1.5"></div>
      <SpringIntoActionSection cards={cards} />
      <div className="bg-primary z-10 h-1.5"></div>
      <ServiceSection items={serviceItems} />
      <Footer />
    </>
  );
};

export default App;

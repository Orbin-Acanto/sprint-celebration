import React from "react";
import Navbar from "./components/Navbar";
import ParallaxSection from "./components/ParallaxSection";
import { ServiceSection } from "./components/ServiceSection";
import { Footer } from "./components/Footer";
import { serviceItems } from "./data";
const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <ParallaxSection />
      <div className="bg-primary z-10 h-1.5"></div>
      <ServiceSection items={serviceItems} />
      <Footer />
    </>
  );
};

export default App;

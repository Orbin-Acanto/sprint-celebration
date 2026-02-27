import React from "react";

const ParallaxSection: React.FC = () => {
  return (
    <section
      className="
        relative 
        h-[50vh]
        overflow-hidden
        parallax-bg
        mt-28
      "
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/videos/video.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 h-full flex items-center justify-center">
        {/* <h2 className="text-primary text-4xl text-center md:text-6xl font-light tracking-wide drop-shadow-xl uppercase font-primary">
          The season of connection has arrived.
          <br /> Let's begin planning elevated experiences designed to bring
          people together beautifully.
        </h2> */}
      </div>
    </section>
  );
};

export default ParallaxSection;

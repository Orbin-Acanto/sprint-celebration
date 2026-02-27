"use client";

import React from "react";

type SpringCard = {
  src: string;
  alt: string;
  label: string;
};

interface SpringIntoActionSectionProps {
  cards: SpringCard[];
}

export const SpringIntoActionSection: React.FC<
  SpringIntoActionSectionProps
> = ({ cards }) => {
  const visibleCards = cards.slice(0, 4);

  return (
    <section className="border-y border-black/10 bg-gray-100 px-4 py-8 sm:px-6 sm:py-10 lg:px-12 lg:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <div className="border-l-2 border-primary pl-4 sm:pl-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500">
                Spring into Celebrating
              </p>

              <h2 className="mt-2 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl lg:text-[2rem]">
                Spring into Action
              </h2>
            </div>

            <div className="mt-4 space-y-3 text-sm leading-relaxed text-gray-600 sm:text-base">
              <p>
                Where meaningful gatherings are executed with strategy and
                precision. Through trusted partnerships and streamlined
                planning, we ensure every event is delivered seamlessly,
                producing measurable impact and lasting impressions.
              </p>

              <p>
                The season of connection has arrived. Let&apos;s begin planning
                elevated experiences designed to bring people together
                beautifully.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {visibleCards.map((card, idx) => (
                <article
                  key={idx}
                  className="group border border-black/10 bg-white"
                >
                  <div className="relative h-28 overflow-hidden sm:h-36 lg:h-40">
                    <img
                      src={card.src}
                      alt={card.alt}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-black/10 opacity-0 transition duration-300 group-hover:opacity-100" />
                  </div>

                  <div className="flex items-center justify-between border-t border-black/10 px-3 py-2 sm:px-4 sm:py-3">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-900 sm:text-xs">
                      {card.label}
                    </p>
                    <span className="text-[10px] font-medium text-gray-400 sm:text-xs">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpringIntoActionSection;

"use client";

import React, { useState, useRef, useEffect } from "react";
import { Property } from "@/types";
import HomePropertyCard from "./home-property-card";

export default function ForSale({ properties }: { properties: Property[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const calculatePageCount = () => {
      const containerWidth = scrollContainer.clientWidth;
      const cardWidth = scrollContainer.children[0]?.clientWidth || 0;
      const cardsPerPage = Math.max(1, Math.floor(containerWidth / cardWidth));
      const newPageCount = Math.ceil(properties.length / cardsPerPage);
      setPageCount(newPageCount);
    };

    const handleScroll = () => {
      const scrollLeft = scrollContainer.scrollLeft;
      const cardWidth = scrollContainer.children[0]?.clientWidth || 0;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setActiveIndex(newIndex);
    };

    calculatePageCount();
    scrollContainer.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", calculatePageCount);

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", calculatePageCount);
    };
  }, [properties.length]);

  return (
    <section className="w-full max-w-7xl my-4">
      <h2 className="text-2xl font-semibold capitalize">Properties for Sale</h2>
      <div
        ref={scrollRef}
        className="flex flex-nowrap gap-4 overflow-x-auto py-4 snap-x snap-mandatory no-scrollbar"
      >
        {properties.map((property) => (
          <HomePropertyCard
            key={property.id}
            property={property}
          />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {Array.from({ length: pageCount }, (_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full mx-1 transition-colors duration-300 ${
              Math.floor(activeIndex / (properties.length / pageCount)) ===
              index
                ? "bg-gray-600"
                : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
}

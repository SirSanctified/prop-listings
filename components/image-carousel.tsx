"use client";

import { Image as ImageType } from "@/types";
import Image from "next/image";
import { useState } from "react";

export default function ImageCarousel({ images }: { images: ImageType[] }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  return (
    <section className="w-full bg-gray-800 pb-1">
      <div className="w-full max-h-[600px] h-full">
        <Image
          src={images[activeImageIndex]?.filePath ?? "hero.jpg"}
          alt="Listing Image"
          width={"1080"}
          height={"720"}
          priority
          className="object-contain"
        />
      </div>
      <div className="m-2 mx-3 items-center flex gap-1 overflow-x-auto no-scrollbar">
        {images.map((image, index) => (
          <Image
            key={image.filePath}
            src={image.filePath}
            onClick={() => setActiveImageIndex(index)}
            height={"150"}
            width={"150"}
            loading="lazy"
            alt="Property Image"
            className="object-cover cursor-pointer"
          />
        ))}
      </div>
    </section>
  );
}

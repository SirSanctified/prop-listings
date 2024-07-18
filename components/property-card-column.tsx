"use client";

import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import {
  ArrowRightLeftIcon,
  ChevronLeft,
  ChevronRightIcon,
  HeartIcon,
  PhoneIcon,
} from "lucide-react";
import { Property } from "@/types";
import Link from "next/link";
import { AtSymbol, WhatsAppLogo } from "./home-property-card";
import { useState } from "react";

export default function ColumnPropertyCard({
  property,
}: {
  property: Property;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const handlePrevImage = () => {
    if (activeIndex === 0) {
      setActiveIndex(property.images.length - 1);
    } else {
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleNextImage = () => {
    if (activeIndex === property.images.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };
  return (
    <Card className="bg-white rounded-lg overflow-hidden min-w-full">
      <CardHeader className="p-0 relative">
        <Image
          src={property.images[activeIndex]?.filePath ?? "/hero.jpg"}
          alt={property.title}
          width={"500"}
          height={"500"}
          loading="lazy"
          className="min-h-[220px] object-cover w-full"
        />
        <div className="absolute top-2 left-2 bg-transparent flex items-center space-x-4">
          <p className="px-1 bg-gray-700 text-white rounded-sm">Featured</p>
          <p className="px-2 bg-primary text-white rounded-sm">
            {property.status}
          </p>
        </div>
        <Button
          variant={"ghost"}
          size={"icon"}
          onClick={handlePrevImage}
          className="absolute text-white top-1/3 left-1 z-10"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <Button
          variant={"ghost"}
          size={"icon"}
          onClick={handleNextImage}
          className="absolute text-white top-1/3 right-1 z-10"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </Button>
        <div className="absolute px-2 bottom-2 left-0 w-full bg-transparent text-white flex items-center justify-between">
          <p>${property.price.split(" ").join(", ")}</p>
          <div className="space-x-2">
            <Button
              className="bg-black/30"
              size={"icon"}
            >
              <ArrowRightLeftIcon className="w-5 h-5" />
            </Button>
            <Button
              className="bg-black/30"
              size={"icon"}
            >
              <HeartIcon className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="items-start w-full space-y-1 px-4 py-2 flex flex-col">
        <p className="text-sm w-full text-start text-primary capitalize">
          {property.type}
        </p>
        <h4 className="font-medium capitalize line-clamp-1">
          {property.title}
        </h4>
        <p className="text-sm w-full text-start text-muted-foreground capitalize">
          {property.address}
        </p>
        <div className="flex gap-4 items-start justify-center">
          <span>Beds: {property.bedrooms}</span>
          <span>Baths: {property.bathrooms}</span>
          <span className="uppercase">{property.propertySize}</span>
        </div>
      </CardContent>
      <CardFooter className="border-t border-gray-400 flex items-center justify-between gap-4 px-4 py-2">
        <div className="flex items-center gap-2">
          <Button
            variant={"outline"}
            size={"icon"}
            className="border-primary hover:bg-primary hover:text-white transition-all duration-300 ease-linear rounded-xl text-primary"
          >
            <WhatsAppLogo className="w-5 h-5" />
          </Button>
          <Button
            variant={"outline"}
            size={"icon"}
            className="border-primary hover:bg-primary hover:text-white transition-all duration-300 ease-linear rounded-xl text-primary"
          >
            <PhoneIcon className="w-5 h-5" />
          </Button>
          <Button
            variant={"outline"}
            size={"icon"}
            className="border-primary hover:bg-primary hover:text-white transition-all duration-300 ease-linear rounded-xl text-primary"
          >
            <AtSymbol className="w-5 h-5" />
          </Button>
        </div>
        <Link href={`/listings/${property.id}`}>
          <Button
            variant={"outline"}
            className="border-primary text-md  hover:bg-primary hover:text-white transition-all duration-300 ease-linear rounded-xl text-primary"
          >
            Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

"use client";

import { cn } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Switcher() {
  const [listingType, setListingType] = useState("sale");
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleTypeChange = (type: "sale" | "rent") => {
    setListingType(type);
    const params = new URLSearchParams(searchParams);
    if (type) {
      params.set("query", type);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="bg-white shadow flex items-center gap-1 rounded-full w-max p-1 transition-all duration-300 ease-linear">
      <div
        onClick={() => handleTypeChange("sale")}
        className={cn(
          "h-full p-2 py-1 rounded-full transition-all duration-500 ease-linear",
          listingType === "sale" ? "bg-primary text-white" : "bg-transparent"
        )}
      >
        For Sale
      </div>
      <div
        onClick={() => handleTypeChange("rent")}
        className={cn(
          "h-full p-2 py-1 rounded-full transition-all duration-500 ease-linear",
          listingType === "rent" ? "bg-primary text-white" : "bg-transparent"
        )}
      >
        To Rent
      </div>
    </div>
  );
}

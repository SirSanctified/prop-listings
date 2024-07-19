"use client";

import ColumnPropertyCard from "./property-card-column";
import { Property } from "@/types";
import { Button } from "./ui/button";
import { LayoutGridIcon, ListIcon } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function PropertiesList({
  properties,
}: {
  properties: Property[];
}) {
  const [view, setView] = useState<"list" | "grid">("list");
  return (
    <div className="w-full space-y-4">
      <div className="p-2 py-1 border bg-white border-gray-300 rounded-lg flex items-center justify-between gap-4">
        <span>Sort by:</span>
        <span>10 Search Results</span>
        <div className="flex space-x-2">
          <Button
            variant={"outline"}
            size={"icon"}
            onClick={() => setView("list")}
            className={cn(
              "border-primary hover:bg-primary hover:text-white transition-all duration-300 ease-linear rounded-lg text-primary",
              view === "list" && "bg-primary text-white"
            )}
          >
            <ListIcon className="w-4 h-4" />
          </Button>
          <Button
            variant={"outline"}
            size={"icon"}
            onClick={() => setView("grid")}
            className={cn(
              "border-primary hover:bg-primary hover:text-white transition-all duration-300 ease-linear rounded-lg text-primary",
              view === "grid" && "bg-primary text-white"
            )}
          >
            <LayoutGridIcon className="w-4 h-4" />
          </Button>
        </div>
      </div>
      <div
        className={cn(
          "transition-all duration-300 ease-linear gap-4 grid",
          view === "grid" && "grid sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-3"
        )}
      >
        {properties.map((property) => (
          <ColumnPropertyCard
            key={property.id}
            property={property}
            view={view}
          />
        ))}
      </div>
    </div>
  );
}

import ColumnPropertyCard from "./property-card-column";
import { Property } from "@/types";
import { Button } from "./ui/button";
import {
  Grid3X3Icon,
  LayoutGridIcon,
  ListIcon,
  ListOrderedIcon,
} from "lucide-react";

export default function PropertiesList({
  properties,
}: {
  properties: Property[];
}) {
  return (
    <div className="w-full space-y-4">
      <div className="p-2 py-1 border bg-white border-gray-300 rounded-lg flex items-center justify-between gap-4">
        <span>Sort by:</span>
        <span>10 Search Results</span>
        <div className="flex space-x-2">
          <Button
            variant={"outline"}
            size={"icon"}
            className="border-primary hover:bg-primary hover:text-white transition-all duration-300 ease-linear rounded-lg text-primary"
          >
            <ListIcon className="w-4 h-4" />
          </Button>
          <Button
            variant={"outline"}
            size={"icon"}
            className="border-primary hover:bg-primary hover:text-white transition-all duration-300 ease-linear rounded-lg text-primary"
          >
            <LayoutGridIcon className="w-4 h-4" />
          </Button>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-1 gap-4 xl:grid-cols-3">
        {properties.map((property) => (
          <ColumnPropertyCard
            key={property.id}
            property={property}
          />
        ))}
      </div>
    </div>
  );
}

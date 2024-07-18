import { type Property } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function ListingDetails({ property }: { property: Property }) {
  return (
    <Card className="w-full">
      <CardHeader className="px-4">
        <CardTitle>Description</CardTitle>
      </CardHeader>
      <CardContent className="px-4">
        <p>{property.description}</p>
        <div className="mt-4 border-y border-gray-400 py-6">
          <h4 className="text-lg font-semibold">Property Details</h4>
          <div className="flex flex-wrap gap-6 justify-between items-center">
            <div>
              <p>Property ID: {property.id}</p>
              <p>Property Size: {property.propertySize}</p>
              <p>Property Beds: {property.bedrooms}</p>
              <p>Property Baths: {property.bathrooms}</p>
            </div>
            <div>
              <p>Property Type: {property.type}</p>
              <p>Year Built: {property.yearBuilt}</p>
              <p>Property ID: {property.id}</p>
              <p>Property ID: {property.id}</p>
            </div>
            <div>
              <p>Property Status: {property.status}</p>
              <p>Property Price: ${property.price.split(" ").join(", ")}</p>
              <p>Property ID: {property.id}</p>
              <p>Property ID: {property.id}</p>
            </div>
          </div>
        </div>
        <div className="pt-6">
          <h4 className="text-lg font-semibold">Property Features</h4>
        </div>
      </CardContent>
    </Card>
  );
}

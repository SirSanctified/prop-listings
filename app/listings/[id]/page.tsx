import Error from "@/components/error";
import ImageCarousel from "@/components/image-carousel";
import ListingDetails from "@/components/listing-details";
import ListingHeader from "@/components/listing-header";
import ListingSideBar from "@/components/listing-sidebar";
import { getPropertyById } from "@/lib/fetchers";

export const revalidate = 60;

export const metadata = {
  title: "RealtyConnect - Property Details",
  description: "Property Details",
};
export default async function ListingPage({
  params,
}: {
  params: { id: string };
}) {
  const { data, error } = await getPropertyById(params.id);
  if (error || !data) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Error message={error ? error : "No data"} />{" "}
      </div>
    );
  }
  metadata.title = `RealtyConnect - ${data.title}`;
  metadata.description = data.description;

  return (
    <div className="min-h-screen grid max-w-7xl p-4 mx-auto md:grid-cols-[1fr_400px] content-start gap-4 pt-8">
      <div className="w-full space-y-4">
        <ListingHeader
          name={data.title}
          address={data.address}
          price={data.price}
        />
        <ImageCarousel images={data.images} />
        <ListingDetails property={data} />
      </div>
      <ListingSideBar listingId={params.id} />
    </div>
  );
}

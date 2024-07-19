import Error from "@/components/error";
import FilterSidebar from "@/components/filter-sidebar";
import PropertiesList from "@/components/properties-list";
import { getPropertiesForSaleOrRent } from "@/lib/fetchers";

export const revalidate = 60;

export default async function ListingsPage({
  searchParams,
}: {
  searchParams: { query: "sale" | "rent" | undefined };
}) {
  const { data, error } = await getPropertiesForSaleOrRent(
    searchParams.query ?? "sale"
  );
  return (
    <section className="w-full max-w-7xl mx-auto grid gap-4 md:grid-cols-[300px_1fr] py-8">
      <FilterSidebar />
      <div>
        {error || !data ? (
          <Error message={error ? error : "No data"} />
        ) : (
          <PropertiesList properties={data} />
        )}
      </div>
    </section>
  );
}

import CTACards from "@/components/cta-cards";
import Error from "@/components/error";
import ForRent from "@/components/for-rent";
import ForSale from "@/components/for-sale";
import Hero from "@/components/hero";
import { getLatestProperties } from "@/lib/fetchers";

export const revalidate = 60;

export default async function Home() {
  const { data, error } = await getLatestProperties();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      {error || !data ? (
        <Error message={`Properties for Sale : ${error ? error : "No data"}`} />
      ) : (
        <ForSale properties={data?.latestPropertiesForSale!} />
      )}
      {error || !data ? (
        <Error message={`Properties for Rent : ${error ? error : "No data"}`} />
      ) : (
        <ForRent properties={data?.latestPropertiesToRent!} />
      )}
      <CTACards />
    </main>
  );
}

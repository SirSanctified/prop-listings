import ForRent from "@/components/for-rent";
import ForSale from "@/components/for-sale";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <ForSale />
      <ForRent />
    </main>
  );
}

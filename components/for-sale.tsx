import HomePropertyCard from "./home-property-card";

export default function ForSale() {
  return (
    <section className="w-full max-w-7xl my-4">
      <h2 className="text-2xl font-semibold capitalize">Properties for Sale</h2>
      <div className="flex gap-4 overflow-x-auto py-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <HomePropertyCard key={index} />
        ))}
      </div>
    </section>
  );
}

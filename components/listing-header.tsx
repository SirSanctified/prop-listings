export default function ListingHeader({
  name,
  price,
  address,
}: {
  name: string;
  price: string;
  address: string;
}) {
  return (
    <div className="w-full flex flex-col sm:flex-row items-end gap-4">
      <div className="w-full">
        <h1 className="text-2xl font-semibold">{name}</h1>
        <p className="text-sm text-muted-foreground">{address}</p>
      </div>
      <div className="w-full flex flex-col items-start sm:items-end">
        <p className="text-2xl font-semibold">${price}/mo</p>
      </div>
    </div>
  );
}

export default function Error({ message }: { message?: string }) {
  return (
    <div
      className="bg-red-100 border border-red-400 text-red-700 px-4 my-4 py-3 flex flex-col gap-4 items-center rounded relative"
      role="alert"
    >
      <strong className="font-bold">Error!</strong>
      <span className="block sm:inline">{message}</span>
    </div>
  );
}
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

export default function Pagination({
  pages,
  currentPage = 1,
  limit = 10,
  setLimit,
  setCurrentPage,
}: {
  pages: number;
  currentPage?: number;
  limit?: number;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div className="text-sm flex space-x-4 items-center justify-center text-muted-foreground bg-white w-full shadow py-2 px-4">
      <div
        className="p-1 cursor-pointer"
        onClick={() => setCurrentPage(1)}
      >
        <ChevronsLeft className="h-4 w-4" />
      </div>
      <div
        className="p-1 cursor-pointer"
        onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)}
      >
        <ChevronLeft className="h-4 w-4" />
      </div>
      {Array.from({ length: Math.ceil(pages) }).map((_, page) => (
        <div
          key={page}
          className="p-1 cursor-pointer"
          onClick={() => setCurrentPage(page + 1)}
        >
          {page + 1}
        </div>
      ))}
      <div
        className="p-1 cursor-pointer"
        onClick={() =>
          setCurrentPage(currentPage < pages ? currentPage + 1 : pages)
        }
      >
        <ChevronRight className="h-4 w-4" />
      </div>
      <div
        className="p-1 cursor-pointer"
        onClick={() => setCurrentPage(pages)}
      >
        <ChevronsRight className="h-4 w-4" />
      </div>
      <select
        value={limit}
        onChange={(e) => {
          setCurrentPage(1);
          setLimit(Number(e.target.value));
        }}
        className="p-1 cursor-pointer focus:outline-none"
      >
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
      </select>
    </div>
  );
}

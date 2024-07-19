import { ChevronDownIcon, XIcon } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Input } from "./ui/input";
import Switcher from "./switcher";

export default function FilterSidebar() {
  return (
    <div className="flex flex-col gap-4 items-start justify-start">
      <Switcher />
      <Card className="w-full py-4">
        <CardContent className="grid gap-2 pb-1">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="bg-white h-full p-2  rounded-lg border border-gray-300 flex items-center justify-between gap-4 w-full">
                Property Types{" "}
                <ChevronDownIcon className="w-5 h-5 opacity-70" />
              </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="min-w-[200px]">
              <div className="relative w-full min-h-8 pr-6">
                <XIcon className="absolute right-1 top-0 w-4 h-4" />
              </div>
              <DropdownMenuCheckboxItem className="text-normal">
                Commercial
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem className="text-normal">
                Educational
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem className="text-normal">
                Leisure/Hospitality
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem className="text-normal">
                Residential
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Input
            className="w-full h-10 border-gray-300"
            placeholder="Surburb, City, Province, Country"
          />
          <div className="grid grid-cols-2 gap-2">
            <Input
              className="w-full h-10 border-gray-300"
              placeholder="Min. Price"
            />
            <Input
              className="w-full h-10 border-gray-300"
              placeholder="Max. Price"
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Input
              className="w-full h-10 border-gray-300"
              placeholder="Min. Beds"
            />
            <Input
              className="w-full h-10 border-gray-300"
              placeholder="Max. Beds"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

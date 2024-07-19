import { ChevronDownIcon, SearchIcon, XIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Switcher from "./switcher";

export default function Hero() {
  return (
    <section className="bg-[url(/hero.jpg)] bg-cover bg-center bg-no-repeat w-screen">
      <div className="bg-black/70 w-full flex flex-col justify-center items-center px-4  min-h-[300px]">
        <div className="max-w-4xl w-full mx-auto space-y-4 py-4">
          <Switcher />
          <div className="rounded-lg bg-white px-4 py-6 w-full flex items-start space-y-2 sm:items-center flex-col sm:flex-row sm:space-x-1 sm:space-y-0">
            <DropdownMenu>
              <DropdownMenuTrigger
                role="button"
                asChild
              >
                <div className="bg-white h-full p-2  rounded-lg border border-gray-300 flex items-center justify-between gap-4 w-full sm:max-w-44">
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
            <div className="flex items-center gap-1 w-full">
              <Input
                className="w-full h-10 border-gray-300"
                placeholder="Surburb, City, Province, Country"
              />
              <Button className="h-10 uppercase">
                <SearchIcon className="w-4 h-4 mr-2 hidden sm:inline" /> search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

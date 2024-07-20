import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { PhoneIcon } from "lucide-react";
import { Property } from "@/types";
import Link from "next/link";

export default function HomePropertyCard({ property }: { property: Property }) {
  return (
    <Card className=" bg-white rounded-lg overflow-hidden min-w-full snap-start sm:min-w-[398px] max-h-[400px]">
      <CardHeader className="p-0">
        <Image
          src={property.images[0]?.filePath ?? "/hero.jpg"}
          alt={property.title}
          width={"500"}
          height={"500"}
          loading="lazy"
          className="max-h-[300px] object-cover w-full"
        />
      </CardHeader>
      <CardContent className="items-start w-full space-y-1 px-4 py-2 flex flex-col">
        <p className="text-sm w-full text-start text-muted-foreground capitalize">
          {property.type}
        </p>
        <p className="font-medium capitalize line-clamp-1">{property.title}</p>
        <p className="text-sm w-full text-start text-muted-foreground capitalize">
          {property.address}
        </p>
        <div className="flex gap-4 items-start justify-center">
          <span>Beds: {property.bedrooms}</span>
          <span>Baths: {property.bathrooms}</span>
          <span className="uppercase">{property.propertySize}</span>
        </div>
      </CardContent>
      <CardFooter className="border-t border-gray-400 flex items-center justify-between gap-4 px-4 py-2">
        <div className="flex items-center gap-2">
          <Button
            variant={"outline"}
            size={"icon"}
            className="border-primary hover:bg-primary hover:text-white transition-all duration-300 ease-linear rounded-xl text-primary"
          >
            <WhatsAppLogo className="w-5 h-5" />
            <span className="sr-only">Chat with agent on Whatsapp</span>
          </Button>
          <Button
            variant={"outline"}
            size={"icon"}
            className="border-primary hover:bg-primary hover:text-white transition-all duration-300 ease-linear rounded-xl text-primary"
          >
            <PhoneIcon className="w-5 h-5" />
            <span className="sr-only">Call agent</span>
          </Button>
          <Button
            variant={"outline"}
            size={"icon"}
            className="border-primary hover:bg-primary hover:text-white transition-all duration-300 ease-linear rounded-xl text-primary"
          >
            <AtSymbol className="w-5 h-5" />
            <span className="sr-only">Email agent</span>
          </Button>
        </div>
        <Link href={`/listings/${property.id}`}>
          <Button
            variant={"outline"}
            className="border-primary text-md  hover:bg-primary hover:text-white transition-all duration-300 ease-linear rounded-xl text-primary"
          >
            Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

export function AtSymbol(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
      />
    </svg>
  );
}

export function WhatsAppLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-whatsapp"
      viewBox="0 0 16 16"
      {...props}
    >
      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
    </svg>
  );
}

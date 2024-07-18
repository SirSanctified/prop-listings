import { BanknoteIcon, BuildingIcon, HomeIcon } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";

export default function CTACards() {
  return (
    <div className="grid gap-4 md:grid-cols-3 my-6 max-w-7xl mx-auto">
      <Card>
        <CardHeader>
          <HomeIcon className="w-16 h-16 text-primary mx-auto" />
          <h3 className="text-2xl font-semibold mx-auto">Buy A Property</h3>
        </CardHeader>
        <CardContent>
          <p>
            Find your place with an immersive photo experience and the most
            listings, including things you win&apos;t find anywhere else.
          </p>
        </CardContent>
        <CardFooter>
          <Button
            variant={"outline"}
            className="border-primary text-md w-full hover:bg-primary hover:text-white transition-all duration-300 ease-linear rounded-xl text-primary capitalize"
          >
            Browse Properties for Sale
          </Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <BanknoteIcon className="w-16 h-16 text-primary mx-auto" />
          <h3 className="text-2xl font-semibold mx-auto">Sell A Property</h3>
        </CardHeader>
        <CardContent>
          <p>
            Find your place with an immersive photo experience and the most
            listings, including things you win&apos;t find anywhere else.
          </p>
        </CardContent>
        <CardFooter>
          <Button
            variant={"outline"}
            className="border-primary text-md w-full hover:bg-primary hover:text-white transition-all duration-300 ease-linear rounded-xl text-primary capitalize"
          >
            see your options
          </Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <BuildingIcon className="w-16 h-16 text-primary mx-auto" />
          <h3 className="text-2xl font-semibold mx-auto">Rent A Property</h3>
        </CardHeader>
        <CardContent>
          <p>
            Find your place with an immersive photo experience and the most
            listings, including things you win&apos;t find anywhere else.
          </p>
        </CardContent>
        <CardFooter>
          <Button
            variant={"outline"}
            className="border-primary text-md w-full hover:bg-primary hover:text-white transition-all duration-300 ease-linear rounded-xl text-primary capitalize"
          >
            Find rentals
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

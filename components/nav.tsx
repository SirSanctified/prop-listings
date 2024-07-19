"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Logo from "./logo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ChevronDown, MenuIcon, UserCircle2Icon } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "./ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";

const links: { title: string; href: string }[] = [
  {
    title: "Harare",
    href: "#",
  },
  {
    title: "Bulawayo",
    href: "#",
  },
  {
    title: "Masvingo",
    href: "#",
  },
  {
    title: "Chinhoyi",
    href: "#",
  },
  {
    title: "Gweru",
    href: "#",
  },
  {
    title: "Gokwe",
    href: "#",
  },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white dark:bg-slate-900/75 backdrop-blur-sm border-slate-300 dark:border-slate-700/80">
      <nav className="flex items-center gap-4 justify-between max-w-7xl px-4 py-2 mx-auto">
        <Link
          href="/"
          passHref
        >
          <Logo />
        </Link>

        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>For Sale</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-1 px-4 py-1 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {links.map((link) => (
                    <ListItem
                      key={link.title}
                      title={link.title}
                      href={link.href}
                    />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>To Rent</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-1 px-4 py-1 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {links.map((link) => (
                    <ListItem
                      key={link.title}
                      title={link.title}
                      href={link.href}
                    />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="#"
                legacyBehavior
                passHref
              >
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  New Developments
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="#"
                legacyBehavior
                passHref
                className="text-muted-foreground hover:text-primary"
              >
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Showdays
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="#"
                legacyBehavior
                passHref
                className="text-muted-foreground hover:text-primary"
              >
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Agencies
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="#"
                legacyBehavior
                passHref
                className="text-muted-foreground hover:text-primary"
              >
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Blog
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <DropdownMenu>
          <DropdownMenuTrigger className="border ml-auto lg:ml-0 border-gray-700 hover:text-blue-900 hover:border hover:border-primary focus:border-primary rounded-full items-center flex gap-2 px-2 py-1">
            Login <UserCircle2Icon className="w-6 h-6" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-gray-700  rounded-xl text-white">
            <DropdownMenuItem>Signup</DropdownMenuItem>
            <DropdownMenuItem>Login</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <MobileNav />
      </nav>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-blue-900 focus:bg-accent focus:text-blue-900",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant={"ghost"}
          size={"icon"}
          className="lg:hidden cursor-pointer hover:text-blue-900 hover:border hover:border-primary focus:border-primary"
        >
          <MenuIcon />
          <span className="sr-only">Open Navigation Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="flex flex-col items-center justify-center">
          <div className="mx-auto rounded-full flex items-center justify-center border border-primary p-4 px-5">
            <Logo />
          </div>
          <SheetDescription className="text-3xl">
            RealtyConnect
          </SheetDescription>
        </SheetHeader>
        <div className="w-full mt-8">
          <ul className="group flex flex-1 list-none items-start flex-col space-x-1 w-full">
            <li className="py-2 text-normal font-medium w-full">
              <Collapsible>
                <CollapsibleTrigger className="flex items-center justify-between w-full">
                  For Sale
                  <ChevronDown className="ml-auto h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <ul className="grid gap-1 px-4 py-1 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {links.map((link) => (
                      <li
                        key={link.title}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-blue-900 focus:bg-accent focus:text-blue-900"
                      >
                        <SheetClose asChild>
                          <Link href={link.href}>{link.title}</Link>
                        </SheetClose>
                      </li>
                    ))}
                  </ul>
                </CollapsibleContent>
              </Collapsible>
            </li>
            <li className="py-2 text-normal font-medium w-full">
              <Collapsible>
                <CollapsibleTrigger className="flex items-center justify-between w-full">
                  To Rent
                  <ChevronDown className="ml-auto h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <ul className="grid gap-1 px-4 py-1 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {links.map((link) => (
                      <li
                        key={link.title}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-blue-900 focus:bg-accent focus:text-blue-900"
                      >
                        <SheetClose asChild>
                          <Link href={link.href}>{link.title}</Link>
                        </SheetClose>
                      </li>
                    ))}
                  </ul>
                </CollapsibleContent>
              </Collapsible>
            </li>
            <li className="py-2 text-normal font-medium w-full">
              <SheetClose asChild>
                <Link
                  href="#"
                  legacyBehavior
                  passHref
                  className={navigationMenuTriggerStyle()}
                >
                  New Developments
                </Link>
              </SheetClose>
            </li>
            <li className="py-2 text-normal font-medium w-full">
              <SheetClose asChild>
                <Link
                  href="#"
                  legacyBehavior
                  passHref
                  className={navigationMenuTriggerStyle()}
                >
                  Showdays
                </Link>
              </SheetClose>
            </li>
            <li className="py-2 text-normal font-medium w-full">
              <SheetClose asChild>
                <Link
                  href="#"
                  legacyBehavior
                  passHref
                  className={navigationMenuTriggerStyle()}
                >
                  Agencies
                </Link>
              </SheetClose>
            </li>
            <li className="py-2 text-normal font-medium w-full">
              <SheetClose asChild>
                <Link
                  href="#"
                  legacyBehavior
                  passHref
                  className={navigationMenuTriggerStyle()}
                >
                  Blog
                </Link>
              </SheetClose>
            </li>
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
}

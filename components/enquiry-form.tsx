"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { WhatsAppLogo } from "./home-property-card";
import { Button } from "./ui/button";
import { PhoneCallIcon } from "lucide-react";
import { enquiryFormSchema, EnquiryFormValues } from "@/shemas";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import Link from "next/link";
import axios from "axios";

export default function EnquiryForm({ listingId }: { listingId: string }) {
  const form = useForm<EnquiryFormValues>({
    resolver: zodResolver(enquiryFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
  });
  const onSubmit: SubmitHandler<EnquiryFormValues> = async (data) => {
    try {
      await axios.post("https://fsboafrica.com/api/enquiries/create", {
        ...data,
        listingId,
        dialingCode: "+263",
        ownedBy: "mambambopritchard@gmail.com",
      });
      form.reset();
      form.reset();
      alert("Message sent successfully");
    } catch (error) {
      alert("An error occurred while sending message, please try again");
    }
  };
  return (
    <div className="w-full flex flex-col items-center bg-white p-4 pt-8  rounded-lg shadow">
      <div className="w-max mx-auto rounded overflow-hidden">
        <Image
          src={"/logo.jpg"}
          alt="logo"
          width={150}
          height={150}
          className="object-contain mx-auto"
        />
        <h2 className="text-2xl font-semibold text-center">
          Housing Investment
        </h2>
      </div>
      <div className="w-full mt-4 space-y-2">
        <Button
          variant={"outline"}
          className="border-primary hover:bg-primary w-full hover:text-white transition-all duration-300 ease-linear rounded-xl text-primary"
        >
          <WhatsAppLogo className="w-5 h-5 mr-2" /> WhatsApp Agent
        </Button>
        <Button
          variant={"outline"}
          className="border-primary hover:bg-primary w-full hover:text-white transition-all duration-300 ease-linear rounded-xl text-primary"
        >
          <PhoneCallIcon className="w-5 h-5 mr-2" /> Call Agent
        </Button>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full mt-4"
        >
          <fieldset className="w-full flex flex-col space-y-2">
            <FormField
              name="firstName"
              control={form.control}
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="First Name"
                      {...field}
                      className="border border-gray-400 rounded-lg"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="lastName"
              control={form.control}
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Last Name"
                      {...field}
                      className="border border-gray-400 rounded-lg"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Email"
                      {...field}
                      className="border border-gray-400 rounded-lg"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="phoneNumber"
              control={form.control}
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Phone Number"
                      {...field}
                      className="border border-gray-400 rounded-lg"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="message"
              control={form.control}
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Enter your message"
                      {...field}
                      className="border border-gray-400 rounded-lg"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full rounded-full"
            >
              Send Message
            </Button>
          </fieldset>
          <p className="text-start text-muted-foreground mt-4 ">
            By sending enquiry message, you agree to Sold.co.zw&apos;s{" "}
            <Link
              href="#"
              className="text-primary font-bold hover:underline transition-all duration-300 ease-linear"
            >
              Terms & Conditions
            </Link>
            .
          </p>
        </form>
      </Form>
    </div>
  );
}

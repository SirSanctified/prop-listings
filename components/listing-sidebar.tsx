import { Facebook, LinkedinIcon, MailIcon } from "lucide-react";
import { WhatsAppLogo } from "./home-property-card";
import { TwitterLogoIcon } from "@radix-ui/react-icons";
import EnquiryForm from "./enquiry-form";

export default function ListingSideBar({listingId}: {listingId: string}) {
  return (
    <aside className="w-full flex flex-col px-2 gap-8">
      <div className="w-full flex self-end gap-1 justify-end">
        <div className="w-max h-max p-1 bg-blue-800">
          <Facebook className="w-8 h-8 text-white" />
        </div>
        <div className="w-max h-max p-1 bg-green-500">
          <WhatsAppLogo className="w-8 h-8 text-white" />
        </div>
        <div className="w-max h-max p-1 bg-blue-800">
          <LinkedinIcon className="w-8 h-8 text-white" />
        </div>
        <div className="w-max h-max p-1 bg-black">
          <TwitterLogoIcon className="w-8 h-8 text-white" />
        </div>
        <div className="w-max h-max p-1 bg-gray-600">
          <MailIcon className="w-8 h-8 text-white" />
        </div>
      </div>
      <EnquiryForm listingId={listingId} />
    </aside>
  );
}

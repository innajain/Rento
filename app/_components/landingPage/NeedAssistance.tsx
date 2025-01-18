import Image from "next/image";
import Letter from "@/public/Letter.png";
import WhatsApp from "@/public/whatsapp.png";
import Call from "@/public/Phone Calling Rounded.png";
import { Heading } from "./Heading";

export function NeedAssistance() {
  return (
    <div className="flex justify-between items-center">
      <Heading
        titleBeforeRed="Need Assistance?"
        red=""
        titleAfterRed=""
        subHeading="Feel free to reach out with any questions."
      />
      <div className="flex gap-12">
        {assistance.map((assist, index) => (
          <a
            key={index}
            href={assist.link}
            target={assist.isExternal ? "_blank" : "_self"}
            rel={assist.isExternal ? "noopener noreferrer" : undefined}
            className="flex items-center border rounded-xl p-4 px-12 flex-col gap-4"
          >
            <Image src={assist.icon} alt="icon" width={48} height={48} />
            <div className="flex flex-col gap-2">
              <span className="text-lg font-bold">{assist.description}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

const assistance = [
  {
    icon: WhatsApp,
    description: "WhatsApp us",
    link: "https://wa.me/919876543210", // WhatsApp API link
    isExternal: true,
  },
  {
    icon: Call,
    description: "+91 9876543210",
    link: "tel:+919876543210", // Telephone link
    isExternal: false,
  },
  {
    icon: Letter,
    description: "Email us",
    link: "mailto:email@example.com", // Mailto link
    isExternal: false,
  },
];

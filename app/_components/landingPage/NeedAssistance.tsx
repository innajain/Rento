import Image from "next/image"
import Letter from "@/public/Letter.png"
import WhatsApp from "@/public/whatsapp.png"
import Call from "@/public/Phone Calling Rounded.png"
import { Heading } from "./Heading"

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
        {assistance.map((assist, index) => {
          return (
            <div
              key={index}
              className="flex items-center border rounded-xl p-4 px-12 flex-col gap-4"
            >
              <Image src={assist.icon} alt="icon" width={48} height={48} />
              <div className="flex flex-col gap-2">
                <span className="text-lg font-bold">{assist.description}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
const assistance = [
  {
    icon: WhatsApp,
    description: "WhatsaApp us",
  },
  {
    icon: Call,
    description: "+91 9876543210",
  },
  {
    icon: Letter,
    description: "Email us",
  },
]

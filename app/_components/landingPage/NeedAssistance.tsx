import Image from "next/image"
import { Heading, HeadingDiv, SubHeading } from "./MainLandingPage"
import Letter from "@/public/Letter.png"
import WhatsApp from "@/public/whatsapp.png"
import Call from "@/public/Phone Calling Rounded.png"

export function NeedAssistance() {
  return (
    <div className="flex justify-between items-center">
      <HeadingDiv>
        <Heading>Need Assistance?</Heading>
        <SubHeading>Feel free to reach out with any questions.</SubHeading>
      </HeadingDiv>
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

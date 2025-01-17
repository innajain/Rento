import { Open_Sans } from "next/font/google"
import Image from "next/image"
import PartershipSvg from "@/public/Partnership-bro 2.svg"
import BankNote from "@/public/Banknote-bro 1.svg"

const opensans = Open_Sans({ subsets: ["latin"] })

export function PartnerCashback() {
  return (
    <div className="flex w-full gap-20 h-60">
      {partnerCashbackData.map((item) => (
        <div className="border-2 border-[#D8D8D8] rounded-2xl h-full flex-1 flex gap-10">
          <div className="flex flex-col p-5 gap-2 text-[#2A2A2A]">
            <p className="text-3xl font-semibold">{item.title}</p>
            <p className={opensans.className}>{item.description}</p>
          </div>
          <Image
            src={item.svg}
            alt="partner"
            className="w-auto aspect-square object-cover mr-10"
            width={200}
            height={200}
          />
        </div>
      ))}
    </div>
  )
}

const partnerCashbackData = [
  {
    title: "Partner with Us!",
    description:
      "Recommend PGs and Flats and get upto 500/- off on your next month's rent!",
    svg: PartershipSvg,
  },

  {
    title: "Earn Cashback!",
    description:
      "Get 500/- cashback on your first room booking after filling in all necessary details",
    svg: BankNote,
  },
]

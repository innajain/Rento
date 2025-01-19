import { Button, Card, CardBody } from "@nextui-org/react"
import Image from "next/image"
import Link from "next/link"
import { Open_Sans } from "next/font/google"
import WifiIcon from "@/public/wifi.svg"
import AcIcon from "@/public/ac.svg"
import SingleOccu from "@/public/single_occu.svg"
import MultiOccu from "@/public/multi_occu.svg"
import Crown from "@/public/premium_crown.svg"
import WifiIconPremium from "@/public/wifi_premium.svg"
import AcIconPremium from "@/public/ac_premium.svg"
import SingleOccuPremium from "@/public/single_occu_premium.svg"
import MultiOccuPremium from "@/public/multi_occu_premium.svg"
import ShortStayIcon from "@/public/short_stay_pink.svg"
import ShortStayPremium from "@/public/short_stay_premium.svg"
const opensans = Open_Sans({ subsets: ["latin"] })

export function RoomCard({
  data,
  premium,
}: {
  data: RoomData
  premium: boolean
}) {
  return (
    <div>
      <Card
        isHoverable
        className={
          "h-[220px] w-[500px] p-3 " + (premium && "border-1 border-[#C59856]")
        }
        radius="lg"
      >
        <CardBody
          className={
            "rounded-lg p-0 " + (premium ? "" : "border-1 border-[#D8D8D8]")
          }
        >
          <div className="flex h-full">
            {/* chatgpt do this: instead of just one image, i want a slider with multiple images. for now just use the same image 3 times. there shall be left and right arrows to navigate */}
            <Image
              src={data.image}
              alt="room"
              width={200}
              height={200}
              priority
              className="object-cover h-full w-2/5 rounded-l-md"
            />

            <div
              className={
                "flex flex-col justify-between p-3 w-full " +
                (premium && "pt-0")
              }
            >
              <div className={"flex flex-col "}>
                {premium && (
                  <p className="flex items-center gap-2 text-[#C59856] text-xs bg-opacity-10 bg-[#C59856] rounded-md px-2 py-1 self-start">
                    <Image src={Crown} alt="crown" />
                    Premium
                  </p>
                )}
                <div className={opensans.className}>
                  <Link
                    href={"/room"}
                    className="font-semibold hover:underline"
                  >
                    {data.title}
                  </Link>
                  <p className="text-[10px] text-[#979797] ml-[2px]">
                    {data.address}
                  </p>
                  <div className="h-1" />

                  <div className="flex gap-1 flex-wrap">
                    {data.tags.map((tag, index) => (
                      <TagElement key={tag} tag={tag} premium={premium} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-semibold text-xs">
                  Rs. <span className={"text-lg " + (
                    premium && "text-[#C59856]"
                  )}>{data.pricePerMonth}/-</span>{" "}
                  per month
                </p>

                <div className="flex gap-3 mt-auto">
                  <Button
                    as={Link}
                    className={
                      "flex-1 text-white " +
                      (premium ? " bg-[#C59856]" : " bg-[#FE6F61]")
                    }
                    size="sm"
                    href="/room/book"
                  >
                    Book Now
                  </Button>
                  <Button
                    as={Link}
                    href="/room/visit"
                    variant="bordered"
                    className={
                      "flex-1 font-semibold " +
                      (premium
                        ? "border-[#C59856] text-[#C59856]"
                        : "border-[#FE6F61] text-[#FE6F61]")
                    }
                    size="sm"
                  >
                    Site Visit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export type RoomData = {
  title: string
  address: string
  tags: RoomTag[]
  pricePerMonth: string
  image: string
}

type RoomTag = "A/C" | "WiFi" | "Single Occupancy" | "Triple Occupancy" | "Short Stay"

const tagIconMap: Record<RoomTag, string> = {
  "A/C": AcIcon,
  WiFi: WifiIcon,
  "Single Occupancy": SingleOccu,
  "Triple Occupancy": MultiOccu,
  "Short Stay": ShortStayIcon,
}
const tagPremiumIconMap: Record<RoomTag, string> = {
  "A/C": AcIconPremium,
  WiFi: WifiIconPremium,
  "Single Occupancy": SingleOccuPremium,
  "Triple Occupancy": MultiOccuPremium,
  "Short Stay": ShortStayPremium,
}

const tagColorClassMap: Record<
  RoomTag,
  {
    bg: string
    text: string
  }
> = {
  "A/C": {
    bg: "bg-[#F0FFF0]",
    text: "text-[#3EAF3F]",
  },
  WiFi: {
    bg: "bg-[#F0FFF0]",
    text: "text-[#3EAF3F]",
  },
  "Single Occupancy": {
    bg: "bg-[#FFFCF0]",
    text: "text-[#FFC130]",
  },
  "Triple Occupancy": {
    bg: "bg-[#FFFCF0]",
    text: "text-[#FFC130]",
  },
  "Short Stay": {
    bg: "bg-[#ffeaee]",
    text: "text-[#ed3a56]",
  },
}

function TagElement({ tag, premium }: { tag: RoomTag; premium: boolean }) {
  return (
    <div
      className={
        "rounded-[0.3rem] flex gap-1 text-[10px] items-center justify-between p-[5px] font-semibold " +
        (premium
          ? "border-1 border-[#C59856] text-[#C59856]"
          : tagColorClassMap[tag].bg + " " + tagColorClassMap[tag].text)
      }
    >
      <Image
        src={premium ? tagPremiumIconMap[tag] : tagIconMap[tag]}
        width={16}
        height={16}
        alt={tag}
        className="object-cover"
      />
      {tag}
    </div>
  )
}

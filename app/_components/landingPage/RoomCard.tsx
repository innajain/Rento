import { Button, Card, CardBody } from "@nextui-org/react"
import Image from "next/image"
import Link from "next/link"
import { Open_Sans } from "next/font/google"
const opensans = Open_Sans({ subsets: ["latin"] })

import WifiIcon from "@/public/wifi.svg"
import AcIcon from "@/public/ac.svg"
import SingleOccu from "@/public/single_occu.svg"
import MultiOccu from "@/public/multi_occu.svg"

export function RoomCard({ data }: { data: RoomData }) {
  return (
    <div>
      <Card isHoverable className="h-[200px] w-[500px] p-3" radius="lg">
        <CardBody className="rounded-lg border-1 border-[#D8D8D8] p-0">
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

            <div className="flex flex-col justify-between p-3 w-full">
              <div className={"flex flex-col " + opensans.className}>
                <Link href={"/room"} className="font-semibold hover:underline">
                  {data.title}
                </Link>
                <p className="text-[10px] text-[#979797] ml-[2px]">
                  {data.address}
                </p>
                <div className="h-1" />

                <div className="flex gap-1 flex-wrap">
                  {data.tags.map((tag, index) => (
                    <TagElement key={tag} tag={tag} />
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-semibold text-xs">
                  Rs. <span className="text-lg">{data.pricePerMonth}/-</span>{" "}
                  per month
                </p>

                <div className="flex gap-3 mt-auto">
                  <Button
                    as={Link}
                    className="flex-1 bg-[#FE6F61] text-white"
                    size="sm"
                    href="/room/book"
                  >
                    Book Now
                  </Button>
                  <Button
                    as={Link}
                    href="/room/visit"
                    variant="bordered"
                    className="flex-1 border-[#FE6F61] text-[#FE6F61] font-semibold"
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

type RoomTag = "A/C" | "WiFi" | "Single Occupancy" | "Triple Occupancy"

const tagIconMap: Record<RoomTag, string> = {
  "A/C": AcIcon,
  WiFi: WifiIcon,
  "Single Occupancy": SingleOccu,
  "Triple Occupancy": MultiOccu,
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
}

function TagElement({ tag }: { tag: RoomTag }) {
  return (
    <div
      className={`rounded-lg flex gap-1 text-[10px] items-center justify-between p-1 font-semibold ${tagColorClassMap[tag].bg} ${tagColorClassMap[tag].text}`}
    >
      <Image src={tagIconMap[tag]} alt={tag} />
      {tag}
    </div>
  )
}

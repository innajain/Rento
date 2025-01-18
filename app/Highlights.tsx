import { Card, CardBody } from "@nextui-org/react"
import Image from "next/image"

export function Highlights() {
  return (
    <div className="flex gap-20 justify-between">
      {highlights.map((x) => (
        <HighlightCard key={x.heading} data={x} />
      ))}
    </div>
  )
}

function HighlightCard({ data }: { data: HighlightData }) {
  return (
    <Card className="h-32 w-full rounded-3xl p-3" disableRipple>
      <CardBody className="p-0">
        <div className="w-full h-full border-1 border-[#D8D8D8] rounded-2xl flex">
          <Image src={data.image} alt="home" width={116} height={116} />
          <div className="w-6" />
          <div className="flex flex-col justify-center">
            <p className="text-xl font-semibold">{data.heading}</p>
            <p className="text-[#979797]">{data.description}</p>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

type HighlightData = {
  image: string
  heading: string
  description: string
}

const highlights: HighlightData[] = [
  {
    image: "/bed.png",
    heading: "1 lakh+ Beds",
    description: "Book the one perfect for you",
  },
  {
    image: "/building.png",
    heading: "35+ DU Colleges",
    description: "Search accomodation by your college",
  },
  {
    image: "/star.png",
    heading: "4.8+ Rating",
    description: "What our students think about us",
  },
]

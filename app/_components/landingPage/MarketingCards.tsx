import { Card, CardBody } from "@nextui-org/react"
import Image from "next/image"
import c1 from "@/public/c1.png"
import c2 from "@/public/c2.png"
import c3 from "@/public/c3.png"
import c4 from "@/public/c4.png"

export function MarketingCards() {
  return (
    <div className="bg-landingPage-gray-light4 flex gap-10 justify-between">
      {cards.map((card, index) => {
        return (
          <Card key={index} className="flex-1">
            <CardBody className="flex items-center flex-col gap-6 py-4 self-center">
              <Image src={card.icon} alt="icon" width={48} height={48} />
              <div className="flex text-center flex-col gap-4">
                <span className="text-lg font-bold">{card.heading}</span>
                <span className="text-xs">{card.description}</span>
              </div>
            </CardBody>
          </Card>
        )
      })}
    </div>
  )
}

const cards = [
  {
    heading: "One Click Booking",
    description: "Book your perfect student accommodation instantly",
    icon: c1,
  },
  {
    heading: "Lowest Price Guaranteed",
    description: "Find a lower price and we will match it. No questions asked",
    icon: c2,
  },
  {
    heading: "24/7 Customer Support",
    description: "Each and every query will be answered instantly",
    icon: c3,
  },
  {
    heading: "100% Verified Properties",
    description: "We only list the properties after proper research",
    icon: c4,
  },
]

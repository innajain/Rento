import Image from "next/image"
import {
  Heading,
  HeadingDiv,
  HighLightedText,
  SubHeading,
} from "./MainLandingPage"
import Arrow from "@/public/arrow.png"
import Home from "@/public/Home.png"
import FileCheck from "@/public/File Check.png"
import Magnifier from "@/public/Minimalistic Magnifer.png"

export function BookSteps() {
  return (
    <>
      <HeadingDiv>
        <Heading>
          Book your favourite room in{" "}
          <HighLightedText>3 simple steps</HighLightedText>
        </Heading>
        <SubHeading>
          What do our 10k+ Students have to say about their experience with ROR
        </SubHeading>
      </HeadingDiv>
      <div className="flex gap-4">
        {bookingCard.map((card, index) => {
          return (
            <div className="flex gap-4 items-center " key={index}>
              <div className="flex border rounded-xl p-3 flex-col gap-4">
                <Image src={card.icon} alt="icon" width={48} height={48} />
                <div className="flex flex-col gap-2">
                  <span className="text-lg font-bold">{card.heading}</span>
                  <span className="text-xs">{card.description}</span>
                </div>
              </div>
              {index !== 2 && (
                <Image src={Arrow} alt="arrow" width={100} height={1} />
              )}
            </div>
          )
        })}
      </div>
    </>
  )
}

const bookingCard = [
  {
    heading: "Discover & Choose",
    description:
      "Choose and pick from a plethora of verified student Flats & PGs",
    icon: Magnifier,
  },
  {
    heading: "Fill in your details",
    description:
      "Fill in all your necessary personal details required for the booking.",
    icon: FileCheck,
  },
  {
    heading: "Accommodation Secured!",
    description: "Take it easy, pack up, and embark on a new chapter of life!",
    icon: Home,
  },
]

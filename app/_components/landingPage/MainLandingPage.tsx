"use client"
import styled from "styled-components"
import c1 from "@/public/c1.png"
import c2 from "@/public/c2.png"
import c3 from "@/public/c3.png"
import c4 from "@/public/c4.png"
import Home from "@/public/Home.png"
import FileCheck from "@/public/File Check.png"
import Magnifier from "@/public/Minimalistic Magnifer.png"
import Arrow from "@/public/arrow.png"
import Image from "next/image"
import { Button, Card, CardBody, image } from "@nextui-org/react"
import Letter from "@/public/Letter.png"
import WhatsApp from "@/public/whatsapp.png"
import Call from "@/public/Phone Calling Rounded.png"
import n1 from "@/public/n1.png"
import n2 from "@/public/n2.png"
import n3 from "@/public/n3.png"
import n4 from "@/public/n4.png"
import n5 from "@/public/n5.png"
import o1 from "@/public/o1.png"
import o2 from "@/public/o2.png"
import o3 from "@/public/o3.png"
import o4 from "@/public/o4.png"
import o5 from "@/public/o5.png"
import s1 from "@/public/s1.png"
import s2 from "@/public/s2.png"
import s3 from "@/public/s3.png"
import s4 from "@/public/s4.png"
import s5 from "@/public/s5.png"
import { useRef } from "react"
import { Open_Sans } from "next/font/google"
import Link from "next/link"
import WifiIcon from "@/public/wifi.svg"
import AcIcon from "@/public/ac.svg"
import SingleOccu from "@/public/single_occu.svg"
import MultiOccu from "@/public/multi_occu.svg"

const CardsContainer = styled.div`
  display: flex;
  gap: 2rem;
  padding: 3rem;
`
const ScrollableContainer = styled.div`
  display: flex;
  gap: 2rem;
  overflow-x: scroll;
`
const PropertyCard = styled.div``
const Heading = styled.span`
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 2.5rem;
`
const SubHeading = styled.span`
  font-size: 1rem;
  line-height: 1.5rem;
  color: #979797;
  font-weight: 500;
`
const HighLightedText = styled(Heading)`
  color: #fe6f61;
`
const WhiteContainer = styled.div`
  padding: 4rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`
const HeadingDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`
const GrayContainer = styled.div`
  padding: 4rem;
  background-color: #f9fafb;
`
export default function MainLandingPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-5">
        <Heading>
          Your <HighLightedText>Perfect</HighLightedText> Accommodation
        </Heading>
        <HorizontalScrollList>
          {perfectAccommodation.map((roomData, index) => (
            <RoomCard key={index} data={roomData} />
          ))}
        </HorizontalScrollList>
      </div>
      <CardsContainer className="bg-landingPage-gray-light4 flex justify-between">
        {cards.map((card, index) => {
          return (
            <Card key={index}>
              <CardBody className="flex items-center flex-col gap-6 py-4 w-2/3 self-center">
                <Image src={card.icon} alt="icon" width={48} height={48} />
                <div className="flex text-center flex-col gap-4">
                  <span className="text-lg font-bold">{card.heading}</span>
                  <span className="text-xs">{card.description}</span>
                </div>
              </CardBody>
            </Card>
          )
        })}
      </CardsContainer>
      <HeadingDiv>
        <Heading>
          Popular areas for <HighLightedText>students</HighLightedText> in Delhi
        </Heading>
        <SubHeading>
          Book student accommodations near universities around Delhi
        </SubHeading>
      </HeadingDiv>
      <div className="flex flex-col gap-4 ">
        {campuses.map((campus, index) => {
          return (
            <div
              key={index}
              className="flex p-2 py-4 rounded-lg flex-col gap-4 bg-primary"
            >
              <span className="text-2xl text-white text-center font-bold">
                {campus.campus}
              </span>
              <div className="flex justify-evenly">
                {campus.images.map((image, index) => {
                  return (
                    <div key={index} className="flex flex-col gap-2">
                      {index !== 4 ? (
                        <Image
                          src={image.image}
                          alt="image"
                          width={200}
                          height={200}
                        />
                      ) : (
                        <Image
                          className="rounded-2xl border-[10px]"
                          src={image.image}
                          alt="image"
                          width={200}
                          height={200}
                        />
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
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
                  <span className="text-lg font-bold">
                    {assist.description}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
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
const campuses = [
  {
    campus: "North Campus",
    images: [
      {
        image: n1,
        name: "Kamalanagar",
      },
      {
        image: n2,
        name: "Kalyan Vihar",
      },
      {
        image: n3,
        name: "Roop Nagar",
      },
      {
        image: n4,
        name: "Ghanta Ghar",
      },
      {
        image: n5,
        name: "Shakti Nagar",
      },
    ],
  },
  {
    campus: "South Campus",
    images: [
      {
        image: s1,
        name: "Staya Niketan",
      },
      {
        image: s2,
        name: "Moti Bagh",
      },
      {
        image: s3,
        name: "Vasant Vihar",
      },
      {
        image: s4,
        name: "Naraina Vihar",
      },
      {
        image: s5,
        name: "Rajouri Garden",
      },
    ],
  },
  {
    campus: "Off Campus",
    images: [
      {
        image: o1,
        name: "Laxmi Nagar",
      },
      {
        image: o2,
        name: "Mukherjee Nagar",
      },
      {
        image: o3,
        name: "Old Rajendra Nagar",
      },
      {
        image: o4,
        name: "Karol Bagh",
      },
      {
        image: o5,
        name: "Hauz Khas",
      },
    ],
  },
]

function HorizontalScrollList({ children }: { children: React.ReactNode }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="flex items-center relative group">
      <button
        className="absolute z-10 bg-white text-gray-700 w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity text-xl"
        onClick={() => scroll("left")}
      >
        &#8249;
      </button>
      <div
        className="flex overflow-x-scroll scroll-smooth gap-4 p-4 w-full scrollbar-hide"
        ref={scrollContainerRef}
      >
        {children}
      </div>
      <button
        className="absolute -right-4 z-10 bg-white text-gray-700 w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity text-xl"
        onClick={() => scroll("right")}
      >
        &#8250;
      </button>
    </div>
  )
}

const opensans = Open_Sans({ subsets: ["latin"] })

function RoomCard({ data }: { data: RoomData }) {
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
                  Rs. <span className="text-lg">7,000/-</span> per month
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

type RoomData = {
  title: string
  address: string
  tags: RoomTag[]
  pricePerMonth: number
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

const perfectAccommodation: RoomData[] = [
  {
    title: "Micheal Jackson 1st Floor R2",
    address: "Vasanat Vihar, South Delhi",
    tags: ["A/C", "WiFi", "Single Occupancy"],
    pricePerMonth: 7000,
    image: "/78c3c990590b6c112e5b5cb34f1fbfac.png",
  },
  {
    title: "Micheal Jackson 1st Floor R3",
    address: "Vasanat Vihar, South Delhi",
    tags: ["WiFi", "Triple Occupancy"],
    pricePerMonth: 8000,
    image: "/7a003bb4ff178a2ea451a316e3b92202.png",
  },
]

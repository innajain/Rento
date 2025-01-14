import HomePageSearchForm from "./_components/HomePageSearchBarForm"
import { getAllCollegesDetails } from "@/actions/colleges/getAllCollegesDetails"
import Image from "next/image"
import HomeImage from "../public/ror-home-img.png"
import HomePageNavbar from "./_components/landingPage/HomePageNavbar"
import MainLandingPage from "./_components/landingPage/MainLandingPage"
import { Card, CardBody } from "@nextui-org/react"

const BG_IMG_HEIGHT_PX = 600

export default async function HomePage() {
  const colleges = await getAllCollegesDetails()
  const collegeNamesAndIdsArr = colleges.map((college: any) => {
    return {
      collegeName: college.name,
      collegeId: college._id,
    }
  })

  return (
    <>
      <BgImage height={BG_IMG_HEIGHT_PX} />
      <div className="flex-col flex items-center justify-center ">
        <HomePageNavbar />
        <HomePageTitle mt={32*4}/>
        <HomePageSearchForm collegeNamesAndIdsArr={collegeNamesAndIdsArr} mt={14*4}/>
        <div
          className="absolute w-full px-40"
          style={{ top: BG_IMG_HEIGHT_PX }}
        >
          <Highlights />
          <MainLandingPage />
        </div>
      </div>
    </>
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

function Highlights() {
  return (
    <div className="flex gap-20 -translate-y-1/2 justify-between">
      {highlights.map((x) => (
        <HighlightCard key={x.heading} data={x} />
      ))}
    </div>
  )
}

function HomePageTitle({mt}: {mt?: number}) {
  mt = mt??0
  return (
    <div className="text-white flex flex-col gap-4 items-center h-24" style={{marginTop: mt}}>
      <span className="text-5xl font-bold tracking-wider">
        Student Centric Accommodation Platform
      </span>
      <span className="text-2xl  tracking-wider">
        affordable & comfortable living, just steps away from campus!
      </span>
    </div>
  )
}

function BgImage({height}: {height: number}) {
  return (
    <Image
      src={HomeImage}
      alt="home"
      className="absolute -z-20 pointer-events-none select-none"
      style={{ height }}
    />
  )
}

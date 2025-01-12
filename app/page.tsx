import HomePageSearchForm from "./_components/HomePageSearchBarForm"
import { getAllCollegesDetails } from "@/actions/colleges/getAllCollegesDetails"
import Image from "next/image"
import HomeImage from "../public/ror-home-img.png"
import HomePageNavbar from "./_components/landingPage/HomePageNavbar"
import MainLandingPage from "./_components/landingPage/MainLandingPage"
import BedImage from "../public/bed.png"
import { X } from "lucide-react"

export default async function HomePage() {
  const colleges = await getAllCollegesDetails()
  return (
    <div>
      <Image
        src={HomeImage}
        alt="home"
        objectFit="cover"
        className="absolute -z-20 h-[750px]"
      />
      <div className="py-8 px-20">
        <HomePageNavbar />
        <div className="mt-48 flex-col gap-4 flex items-center justify-center">
          <div className="text-white flex flex-col gap-4 items-center">
            <span className="text-6xl font-bold tracking-wider">
              Student Centric Accommodation Platform
            </span>
            <span className="text-3xl  tracking-wider">
              affordable & comfortable living, just steps away from campus!
            </span>
          </div>
          <HomePageSearchForm
            collegeNamesAndIdsArr={colleges.map((college: any) => {
              return {
                collegeName: college.name,
                collegeId: college._id,
              }
            })}
          />
        </div>
      </div>
      <div className="absolute top-[750px] w-full px-40">
        <div className="flex gap-20 -translate-y-1/2 justify-between">
          {highlights.map((x, index) => (
            <HighlightCard key={x.heading} data={x} />
          ))}
        </div>
        <MainLandingPage />
      </div>
    </div>
  )
}

function HighlightCard({ data }: { data: HighlightData }) {
  return (
    <div className="h-36 w-full rounded-3xl bg-white shadow-xl p-3">
      <div className="w-full h-full border-2 border-[#D8D8D8] rounded-2xl flex">
        <Image src={data.image} alt="home" width={116} height={116} />
        <div className="flex flex-col ml-7 justify-center">
          <span className="text-2xl font-semibold">{data.heading}</span>
          <span className="text-[#979797]">{data.description}</span>
        </div>
      </div>
    </div>
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

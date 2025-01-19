import HomePageSearchForm from "./_components/HomePageSearchBarForm"
import { getAllCollegesDetails } from "@/actions/colleges/getAllCollegesDetails"
import Image from "next/image"
import HomeImage from "../public/ror-home-img.png"
import HomePageNavbar from "./_components/landingPage/HomePageNavbar"
import { Highlights } from "./Highlights"
import { HomePageTitle } from "./HomePageTitle"
import { YourPerfectAccommodation } from "./_components/landingPage/YourPerfectAccommodation"
import { PremiumAcomodation } from "./_components/landingPage/PremiumAcomodation"
import { MarketingCards } from "./_components/landingPage/MarketingCards"
import { PopularAreas } from "./_components/landingPage/PopularAreas"
import { PartnerCashback } from "./_components/landingPage/PartnershipCashback"
import { Testimonials } from "./_components/landingPage/Testimonials"
import { BookingSteps } from "./_components/landingPage/BookSteps"
import { NeedAssistance } from "./_components/landingPage/NeedAssistance"
import { WhereWeOperate } from "./_components/landingPage/WhereWeOperate"
import { Footer } from "./_components/landingPage/Footer"
import { ShortStays } from "./_components/landingPage/ShortStays"
import { FlatmateNeeded } from "./_components/landingPage/FlatmateNeeded"

const BG_IMG_HEIGHT_PX = 650

export default async function HomePage() {
  const colleges = await getAllCollegesDetails()
  const uniqueCollegesMap = new Map()

  colleges.forEach((college: any) => {
    if (!uniqueCollegesMap.has(college.name)) {
      uniqueCollegesMap.set(college.name, college._id)
    }
  })

  const collegeNamesAndIdsArr = Array.from(
    uniqueCollegesMap,
    ([collegeName, collegeId]) => ({
      collegeName,
      collegeId,
    })
  )

  return (
    <>
      <Image
        src={HomeImage}
        alt="home"
        className="absolute -z-20 pointer-events-none select-none"
        style={{ height: BG_IMG_HEIGHT_PX }}
      />
      <div className="flex-col flex items-center justify-center ">
        <HomePageNavbar />
        <HomePageTitle mt={32 * 4} />
        <HomePageSearchForm
          collegeNamesAndIdsArr={collegeNamesAndIdsArr}
          mt={14 * 4}
        />
      </div>
      <div
        className="absolute w-full flex flex-col gap-8"
        style={{ top: BG_IMG_HEIGHT_PX - 128 / 2 }}
      >
        <div className="px-20">
          <Highlights />
        </div>
        <div className="bg-[#F9FAFB] px-20 py-10">
          <YourPerfectAccommodation />
        </div>
        <div className="px-20">
          <PremiumAcomodation />
        </div>
        <div className="px-20 pt-10">
          <ShortStays />
        </div>
        <div className="px-20 pt-10">
          <FlatmateNeeded />
        </div>
        <div className="bg-[#F9FAFB] px-20 py-10">
          <MarketingCards />
        </div>
        <div className="px-20 gap-16 flex flex-col">
          <PopularAreas />
          <PartnerCashback />
        </div>
        <div className="bg-[#FEFBF2] px-20 py-10">
          <Testimonials />
        </div>
        <div className="px-20">
          <BookingSteps />
        </div>
        <div className="bg-[#F9FAFB] px-20 py-10">
          <NeedAssistance />
        </div>
        <div className="px-20">
          <WhereWeOperate />
        </div>
        <Footer />
      </div>
    </>
  )
}

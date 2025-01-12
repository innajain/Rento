import HomePageSearchForm from "./_components/HomePageSearchBarForm"
import { getAllCollegesDetails } from "@/actions/colleges/getAllCollegesDetails"
import Image from "next/image"
import HomeImage from "../public/ror-home-img.png"
import HomePageNavbar from "./_components/landingPage/HomePageNavbar"
import MainLandingPage from "./_components/landingPage/MainLandingPage"

export default async function HomePage() {
  const colleges = await getAllCollegesDetails()
  return (
    <div>
      <Image
        src={HomeImage}
        alt="home"
        objectFit="cover"
        className="absolute -z-20 h-[71%]"
      />
      <div className="py-8 px-20">
        <HomePageNavbar />
        <div className="mt-48 flex-col gap-4 flex items-center justify-center">
          <div className="text-white flex flex-col gap-4 items-center">
            <span className="text-5xl font-bold tracking-wider">
              Student Centric Accommodation Platform
            </span>
            <span className="text-xl  tracking-wider">
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
        <MainLandingPage />
      </div>
    </div>
  )
}

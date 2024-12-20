
import HomePageSearchForm from "./_components/HomePageSearchBarForm";
import { getAllCollegesDetails } from "@/actions/colleges/getAllCollegesDetails";
import Image from "next/image";
import HomeImage from "../public/ror-home-img.png"
import HomePageNavbar from "./_components/landingPage/HomePageNavbar";
import MainLandingPage from "./_components/landingPage/MainLandingPage";
import { fetchR2Data } from "@/actions/cloudflare/fetchR2Data";

export default async function IndexPage() {
  const colleges = await getAllCollegesDetails()
  const x = await fetchR2Data()
  console.log(x.filter(obj => obj.images.length === 0), "contents are here")
  return (
    <div className="h-screen">
  <div className="relative">
  <div className="absolute top-0 left-0 w-full z-20">
    <HomePageNavbar/>
   </div>
      <Image 
        alt="home-img" 
        src={HomeImage}
        layout="responsive" 
        width={1000} 
        height={600} 
        className="object-cover"
      />
      <div className="absolute inset-0 flex-col gap-4 z-10 flex items-center justify-center">
       <div className="text-white flex flex-col gap-4 items-center">
        <span className="text-5xl font-bold tracking-wider">Student Centric Accommodation Platform</span>
        <span className="text-xl  tracking-wider">affordable & comfortable living, just steps away from campus!</span>
       </div>
       <HomePageSearchForm collegeNamesAndIdsArr={colleges.map((college:any)=>{
      return{
        collegeName:college.name,
        collegeId:college._id
      }
    })} />
      </div>
    </div>
    <MainLandingPage/>
  </div>
  )
}

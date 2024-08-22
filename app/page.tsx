
import Campuses from "./_components/Campuses";
import HomePageSearchForm from "./_components/HomePageSearchBarForm";
import SecondaryNavbar from "./_components/SecondaryNavbar";
import { Select, SelectItem } from "@nextui-org/react";
import { getAllCollegesDetails } from "@/actions/colleges/getAllCollegesDetails";



export default async function IndexPage() {
  const colleges = await getAllCollegesDetails()
  return (
    <div className="h-screen">
    <HomePageSearchForm collegeNamesAndIdsArr={colleges.map((college:any)=>{
      return{
        collegeName:college.name,
        collegeId:college._id
      }
    })} />
    {/* <SecondaryNavbar/> */}
    <Campuses/>
  </div>
  )
}

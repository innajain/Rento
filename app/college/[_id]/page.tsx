import { getAllCollegesDetails } from "@/actions/colleges/getAllCollegesDetails";
import { getCollegeDetails } from "@/actions/colleges/getCollegeDetail";
import { getDistanceFromCollege } from "@/actions/distance";
import CollegeRoutePageBreadCrumb from "@/app /_components/breadcrumb/CollegeRoutePageBreadCrumb";
import CollegePropertiesFilterBar from "@/app /_components/filters/CollegePropertiesFilterBar";
import PropertyGrid from "@/app /_components/properties/PropertyGrid";
import { Properties } from "@/utils/types/sanity.types";

export async function generateStaticParams() {
  const collegeIds = await getAllCollegesDetails("_id")
  return collegeIds
}

export default async function CollegeRoutePage({params}:{params:{_id:string}}) {
  const collegeArr = await getCollegeDetails(params._id)
  const college = collegeArr[0]
  const propertiesLength = college.properties?.length
  const distancesPromises = college.properties?.map(async(property)=>{
      const distance = await getDistanceFromCollege({origin:college.location,destination:(property as unknown as Properties).location})
      return distance
  })
  const distancesArr:string[] = await Promise.all(distancesPromises || [])
  return (
   <div className="px-2">
    <CollegeRoutePageBreadCrumb collegeName={college.name} />
    <CollegePropertiesFilterBar/>
    <PropertyGrid distancesArr={distancesArr} college={college} properties={college.properties as unknown as Properties[]} />
   </div>
    
  )
}

import { getAllPropertiesIds } from "@/actions/properties/getAllPropertiesIds"
import { getPropertyDetails } from "@/actions/properties/getPropertyDetails"
import PropertyCard from "@/app /_components/properties/PropertyCard"



export async function generateStaticParams(){
    const propertiesIds:{_id:string}[] = await getAllPropertiesIds()
    return propertiesIds
}

export default async function PropertyRoutePage({params}:{params:{_id:string}}) {
  const property = await getPropertyDetails(params._id)
  return (
    <div>
        <PropertyCard property={property} />
    </div>
  )
}

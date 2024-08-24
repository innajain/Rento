"use client"
import { Colleges, Properties } from "@/utils/types/sanity.types"
import CollegeProperty from "./CollegeProperty"
import { useFilteredProperties } from "@/utils/filters/hooks/useFilteredProperties"
import { FilterPrimaryKeys } from "@/utils/filters/types/types"


interface Props{
    properties:Properties[]
    college:Colleges
    distancesArr:string[]
}

export default function PropertyGrid(props:Props) {
  const {properties,college} = props
  const filteredProperties = useFilteredProperties(properties,FilterPrimaryKeys.Properties)
  return (
    <div className="flex flex-col gap-4">
    <span className="text-lg tracking-wider">Showing <span className="text-primary bg-background p-1 rounded-full font-bold">{filteredProperties.length}</span>  Results</span>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {filteredProperties?.map((property,index)=> {
        return (
          <CollegeProperty distance={props.distancesArr[index]} collegeName={college.name} key={index} property={property as unknown as  Properties} />
        )
      })}

    </div>
    </div>
   
  )
}

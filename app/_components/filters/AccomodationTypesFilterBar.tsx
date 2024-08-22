"use client"
import { FilterDefinitionKeys } from "@/utils/filters/availableFilterDefinitions";
import { collegePropertiesFiltersState } from "@/utils/state/collegePropertiesFiltersState";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { useRecoilState } from "recoil";

enum AccommodationType{
  PG="PG",
  Hostel="Hostel",
  Flat="Flat",
  RK="RK"
}
export default function AccomodationTypesFilterBar() {
    const [filtersArray,setFiltersArray] = useRecoilState(collegePropertiesFiltersState)
    const accomodationTypes = [{
    type:"PG",
    subTypes:[{label:"Single Bed",value:"pgB1"},{label:"Double Bed",value:"pgB2"},{label:"Triple Bed",value:"pgB3"}]
  },
    {
        type:"Hostel",
        subTypes:[{label:"Single Bed",value:"hostelB1"},{label:"Double Bed",value:"hostelB2"},{label:"Triple Bed",value:"hostelB3"}]
    },
    {
        type:"Flat",
        subTypes:[{label:"1BHK",value:"flatB1"},{label:"2BHK",value:"flatB2"},{label:"3BHK",value:"flatB3"}]
    },
    {
        type:"RK",
        subTypes:[{label:"1rk",value:"rkB1"},{label:"2rk",value:"rkB2"},{label:"rk",value:"rkB3"}]
    }
]
 const isSelectedDropDownItem = (value:string)=>filtersArray.find((filter)=>filter.value===value)
  return (
    <div className="flex gap-8">
     {
      accomodationTypes.map((accomodationType,i)=>
        <Dropdown>
          <DropdownTrigger >
            {
              filtersArray.find((filter)=>filter.filterKey===accomodationType.type)?
              <Button variant="bordered" size="sm" radius="full" className="bg-primary text-white">
              {accomodationType.type}
            </Button>:
            <Button size="sm" className="border-primary " radius="full" variant="bordered">
            {accomodationType.type}
          </Button>
            }
            
          </DropdownTrigger>
          <DropdownMenu closeOnSelect={false}>
            {accomodationType.subTypes.map((subType)=>
              isSelectedDropDownItem(subType.value)?
              <DropdownItem 
              className="bg-primary text-white"
              onClick={() => setFiltersArray(filtersArray.filter(filter => filter.value !== subType.value))}
              key={i}
            >
              {subType.label}
            </DropdownItem>:
              <DropdownItem onClick={()=>setFiltersArray([...filtersArray,{value:subType.value,filterDefinitionKey:FilterDefinitionKeys.AccommodationType,filterKey:accomodationType.type}])} key={i}>{subType.label}</DropdownItem>
            )}
          </DropdownMenu>
        </Dropdown>
        
      )
     }
    </div>
  )
}

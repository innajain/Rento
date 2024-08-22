"use client"

import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react"
import { collegePropertiesFilters } from "@/utils/filters/variants/collegePropertiesFilters";
import { useFilter } from "@/utils/filters/hooks/useFilter";
import { Properties } from "@/utils/types/sanity.types";
import { isSelectedOption } from "@/utils/filters/hooks/isSelectedOption";
import {Checkbox} from "@nextui-org/react";
import { FilterPrimaryKeys } from "@/utils/filters/types/types";

export default function CollegePropertiesFilterBar() {
  const {handleFilter} = useFilter<Properties>({primaryKey:FilterPrimaryKeys.Properties})
  const selectedOptionStyles ="bg-primary text-white hover:bg-primary"
  return (
      <div className="flex mt-4 gap-4 relative">
          {
            collegePropertiesFilters.map((filter)=>
              filter.filterDropDownCustomComponent?
              <div></div>:
              <Dropdown>
                <DropdownTrigger>
                  <Button>{filter.filterButtonLabel}</Button>
                </DropdownTrigger>
                <DropdownMenu closeOnSelect={false}>
                  {
                    filter.filterDropDownOptions?.map((option)=>
                      <DropdownItem  onPress={()=>handleFilter({modelPropertyToFilter:filter.modelPropertyToFilter,filterType:filter.filterType,value:option.value})} key={option.value}>
                         <Checkbox onChange={()=>handleFilter({modelPropertyToFilter:filter.modelPropertyToFilter,filterType:filter.filterType,value:option.value})} isSelected={isSelectedOption({optionValue:option.value,primaryKey:FilterPrimaryKeys.Properties})} size="sm">{option.label}</Checkbox>
                        </DropdownItem>
                    ) || []
                  }
                </DropdownMenu>
              </Dropdown>
            )
          }
    </div>
  )
}

"use client"
import { FilterDefinitionKeys } from "@/utils/filters/availableFilterDefinitions";
import { collegePropertiesFiltersState } from "@/utils/state/collegePropertiesFiltersState";
import { FilterDropdownProps } from "@/utils/types/collegePropertiesFilterBarTypes";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Slider, Button} from "@nextui-org/react";
import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

export default function BudgetFilterDropDown() {
  const [value,setValue] = useState<number>(0)
  const setFiltersArr = useSetRecoilState(collegePropertiesFiltersState)
  const filtersArr = useRecoilValue(collegePropertiesFiltersState)
  console.log(filtersArr)
  const handleBudgetChange = (value: number) => {
    setValue(value);
    setFiltersArr((prevFilters) => {
      const existingBudgetFilterIndex = prevFilters.findIndex(
        (filter) => filter.filterDefinitionKey === FilterDefinitionKeys.Budget
      );
  
      const newFilter = {
        label: "Budget",
        value: value.toString(),
        filterDefinitionKey: FilterDefinitionKeys.Budget,
      };
  
      if (existingBudgetFilterIndex > -1) {
        const updatedFilters = [...prevFilters];
        updatedFilters[existingBudgetFilterIndex] = newFilter;
        return updatedFilters;
      } else {
        return [...prevFilters, newFilter];
      }
    });
  };
  return (
    <Dropdown>
    <DropdownTrigger>
      <Button size="sm" variant="bordered" className="border-primary"  radius="full">
        Budget
      </Button>
    </DropdownTrigger>
    <DropdownMenu closeOnSelect={false} variant="flat">
    <DropdownItem>
    <Slider
      label="Price Range"
      step={50} 
      size="sm"
      minValue={0} 
      defaultValue={0}
      maxValue={1000}
      getValue={(value)=>value==0?"Set a value":value}
      value={value}
      onChange={(value)=>handleBudgetChange(value)}
      formatOptions={{style: "currency", currency: "INR"}}
      className="max-w-md"
    />
     </DropdownItem>
    </DropdownMenu>
  </Dropdown>
  )
}

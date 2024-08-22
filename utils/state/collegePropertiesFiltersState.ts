import { atom } from "recoil";
import { FilterDefinitionKeys } from "../filters/availableFilterDefinitions";

interface Filter{
    value: string;
    filterDefinitionKey: FilterDefinitionKeys
    filterKey?:string
}
const filtersArr = localStorage.getItem('filtersArr')
export const collegePropertiesFiltersState = atom<Filter[]>({
    key: "collegePropertiesFiltersState",
    default: filtersArr?JSON.parse(filtersArr):[]
})
import { useRecoilState } from "recoil";
import { filtersStateAtom } from "../state/filtersArrayState";

interface HandleFilterParams<Model extends object> {
    filterType: "multiple" | "single";
    modelPropertyToFilter: keyof Model;
    value: unknown;
  }
  
  export const useFilter = <Model extends object>({primaryKey}: {primaryKey:string}) => {
    const [filtersArray,setFiltersArray] = useRecoilState(filtersStateAtom<Model>(primaryKey))
  
    const handleFilter = ({
      filterType,
      modelPropertyToFilter,
      value,
    }: HandleFilterParams<Model>) => {
  
      if (filterType === "single") {
        type Value = Model[keyof Model];
        const existingFilterIndex = filtersArray.findIndex(
          (filterItem) => filterItem.modelPropertyToFilter === modelPropertyToFilter
        );
  
        if (existingFilterIndex !== -1) {
          setFiltersArray(
            [
              ...filtersArray.slice(0, existingFilterIndex),
              ...filtersArray.slice(existingFilterIndex + 1),
            ]
          );
        } else {
          setFiltersArray(
            [
              ...filtersArray,
              { modelPropertyToFilter, value: value as Value },
            ]
          );
        }
      } else if (filterType === "multiple") {
        const existingFilterIndex = filtersArray.findIndex(
          (filterItem) => filterItem.modelPropertyToFilter === modelPropertyToFilter
        );
  
        if (existingFilterIndex !== -1) {
          const existingFilter = filtersArray[existingFilterIndex];
          if (existingFilter.value === value) {
            setFiltersArray(
              filtersArray.filter(
                (filter) => !(filter.modelPropertyToFilter === modelPropertyToFilter && filter.value === value)
              )
            );
          } else {
            setFiltersArray(
              [
                ...filtersArray,
                { modelPropertyToFilter, value },
              ]
            );
          }
        } else {
          setFiltersArray(
            [
              ...filtersArray,
              { modelPropertyToFilter, value },
            ]
          );
        }
      }
    };
  
    return { handleFilter };
  };
  
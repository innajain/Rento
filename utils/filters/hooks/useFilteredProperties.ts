import { availableFilterDefinitions } from "../availableFilterDefinitions";
import { Properties } from "@/utils/types/sanity.types";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { filtersStateAtom } from "../state/filtersArrayState";

export const useFilteredProperties = (properties: Properties[], primaryKey: string) => {
  const filtersArray = useRecoilValue(filtersStateAtom<Properties>(primaryKey))

  useEffect(() => {
    localStorage.setItem(`${primaryKey}`, JSON.stringify(filtersArray));
  }, [filtersArray]);

  if (filtersArray.length === 0) {
    return properties;
  }

  const filteredAndRankedProperties = properties
    .map((property) => {
      const matchCount = filtersArray.reduce((count, filter) => {
        const filterDefinition = availableFilterDefinitions[filter.modelPropertyToFilter as keyof typeof availableFilterDefinitions];
        return filterDefinition(property, filter.value) ? count + 1 : count;
      }, 0);

      return {
        property,
        matchCount,
      };
    })
    .filter(({ matchCount }) => matchCount > 0)
    .sort((a, b) => b.matchCount - a.matchCount)
    .map(({ property }) => property);

  return filteredAndRankedProperties;
};

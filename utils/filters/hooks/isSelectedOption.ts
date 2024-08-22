import { useRecoilValue } from "recoil";
import { filtersStateAtom } from "../state/filtersArrayState";

interface IsSelectedOptionParams<Model extends object> {
  optionValue: unknown;
  primaryKey: string; 
}

export const isSelectedOption = <Model extends object>({
  optionValue,
  primaryKey,
}: IsSelectedOptionParams<Model>) => {
  const filtersArray = useRecoilValue(filtersStateAtom<Model>(primaryKey))

  return !!filtersArray.find(filter => filter.value === optionValue);
};

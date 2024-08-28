import { atom } from 'recoil';
import {memoize} from "lodash"

interface FilterItem<Model> {
  modelPropertyToFilter: keyof Model;
  value: any;
}
export const filtersStateAtom = memoize(<Model>(filterKey:string)=> atom<FilterItem<Model>[]>({
  key: `${filterKey}`, 
  default:[] 
}))

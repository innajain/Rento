// import { useRecoilState, useRecoilValue, RecoilState } from "recoil"
// import { Filter } from "../types/types"
// import { filteredModelArraysObjectState } from "../state/filteredModelState"
// import { appliedFiltersState } from "../state/appliedFilterIdsState"

// interface UseFilterDefinitionParams<Model>{
//     model:Model
//     filterKey:string
//     filterDefinition: Filter<Model>['filterDefinition']
// }
// export const useFilterDefinition = <Model>(params:UseFilterDefinitionParams<Model>) =>{
//     const {model,filterDefinition,filterKey}= params
//     const appliedFiltersArr = useRecoilValue(appliedFiltersState<Model>())
//     const [filteredModelArraysObject,setFilteredModelArraysObject] = useRecoilState(filteredModelArraysObjectState<Model>())
//     const appliedFilter = appliedFiltersArr.find(appliedFilter=>appliedFilter.filterKey===filterKey)
//     if(appliedFilter){
//         const prevFilteredModelArray = filteredModelArraysObject.prevFilteredModelArray
//         const currentFilteredModelArray = prevFilteredModelArray.filter((model)=>filterDefinition({model,modelPropertyToFilter:appliedFilter.modelPropertyToFilter,value}))
//         // const currentFilteredModelArray = prevFilteredModelArray.filter((model)=>{
//         //     return filterDefinition({model,property:filterKey,value:model[filterKey]})
//         // })
//         // setFilteredModelArraysObject({prevFilteredModelArray,currentFilteredModelArray})

//     }


// }
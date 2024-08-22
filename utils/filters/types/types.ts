import { ReactNode } from "react"

interface Option{
    label:string
    value:string
}
export enum FilterButtonLabels{
    Budget="Budget",
    PG="PG",
    Hostel="Hostel",
    Flat="Flat",
    RoomsAndKitchen="Rooms and kitchen"
}
export interface Filter<Model>{
    modelPropertyToFilter:keyof Model
    filterType:"multiple"|"single"
    customComponent?:ReactNode
    filterButtonLabel:string
    filterDropDownCustomComponent?:ReactNode
    filterDropDownOptions?:Option[]
}
export enum FilterPrimaryKeys{
    Properties="Property",
    Rooms="Rooms"
}
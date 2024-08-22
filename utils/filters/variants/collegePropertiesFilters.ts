import { Properties } from "@/utils/types/sanity.types";
import { Filter, FilterButtonLabels } from "../types/types";

export const collegePropertiesFilters:Filter<Properties>[] =[
    {
        filterButtonLabel:FilterButtonLabels.Budget,
        modelPropertyToFilter:"minPrice",
        filterType:"single",
        // filterDropDownCustomComponent:   
    },
    {
        filterButtonLabel:FilterButtonLabels.PG,
        modelPropertyToFilter:"propertyType",
        filterType:"multiple",
        filterDropDownOptions:[
            {
                label:"Single Bed",value:"pgB1"
            },
            {
                label:"Double Bed",value:"pgB2"
            },
            {
                label:"Triple Bed",value:"pgB3"
            },
        ]
    },
    {
        filterButtonLabel:FilterButtonLabels.Hostel,
        modelPropertyToFilter:"propertyType",
        filterType:"multiple",
        filterDropDownOptions:[
            {
                label:"Single Bed",value:"hostelB1"
            },
            {
                label:"Double Bed",value:"hostelB2"
            },
            {
                label:"Triple Bed",value:"hostelB3"
            },
        ]
    },
    {
        filterButtonLabel:FilterButtonLabels.Flat,
        modelPropertyToFilter:"propertyType",
        filterType:"multiple",
        filterDropDownOptions:[
            {
                label:"1 BHK",value:"flatB1"
            },
            {
                label:"2 BHK",value:"flatB2"
            },
            {
                label:"3 BHK",value:"flatB3"
            },
        ]
    },
    {
        filterButtonLabel:FilterButtonLabels.RoomsAndKitchen,
        modelPropertyToFilter:"propertyType",
        filterType:"multiple",
        filterDropDownOptions:[
            {
                label:"1 RK",value:"rk1"
            },
            {
                label:"1 RK",value:"rk2"
            },
            {
                label:"1 RK",value:"rk3"
            },
        ]
    }

]
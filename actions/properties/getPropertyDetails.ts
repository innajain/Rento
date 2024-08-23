'use server'

import { handleAction } from "@/utils/handleAction"
import { sanityClient } from "@/utils/sanityClient"

export const getPropertyDetails = async (propertyId:string)=>handleAction(
    async()=>{
        const properties = await sanityClient.fetch(`
            *[_type == "properties" && _id == "${propertyId}"]{
            _id,
             name,
             location,
             minPrice,
             propertyType,
             amenities[]->,
             rooms,
             area->,
            }`)
        return properties
    },
    
)
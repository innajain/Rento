'use server'

import { handleAction } from "@/utils/handleAction"
import { fetchR2Data } from "../cloudflare/fetchR2Data"

export const getCloudFlareProperty = (propertyName:string)=>handleAction(async()=>{
    const cloudFlareProperties = await fetchR2Data()
    const cloudflareProperty = cloudFlareProperties.filter(item=>{
        const cloudflarePropertyName = item.key.replace(/\s+/g, '').toLowerCase();
        return cloudflarePropertyName.includes(propertyName.replace(/\s+/g, '').toLowerCase())
    })
    return cloudflareProperty[0]
})
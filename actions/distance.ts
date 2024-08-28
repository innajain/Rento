'use server'

import { handleAction } from "@/utils/handleAction"
import { Geopoint } from "@/utils/types/sanity.types"

interface Params{
    origin:Geopoint
    destination:Geopoint

}
export const getDistanceFromCollege = async (params:Params)=>handleAction(async()=>{
        const {origin,destination} = params
        const res = await fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${origin.lat},${origin.lng}&destinations=${destination.lat},${destination.lng}&mode=walking&key=AIzaSyAv5V-iR1jzCMEmDscz2eo2JILOUlQp3-o`)
        const data = await res.json()
        return data.rows[0].elements[0].distance.text
    }
)

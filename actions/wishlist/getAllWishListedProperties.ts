'use server'

import { connectToDb } from "@/utils/connectToDb"
import { getUserIdFromToken } from "../utils/getUserIdFromToken"
interface Params{
    token?:string
}
export const getAllWishListedProperties = async ({token}:Params)=>{
    const pool = await connectToDb()
    const userId = await getUserIdFromToken(token??'')
    const [rows] = await pool.query<any[]>("SELECT * FROM wishlists")
    console.log(rows)
    return rows
}
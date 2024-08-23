'use server'

import { connectToDb } from "@/utils/connectToDb"
import { getUserIdFromToken } from "../utils/getUserIdFromToken"
import { handleAction } from "@/utils/handleAction"
import { authenticateUser } from "../utils/authenticateUser"
interface Params{
    token?:string
}
export const getAllWishListedProperties = async ({token}:Params)=> handleAction(async()=>{
    const pool = await connectToDb()
    const userId = await authenticateUser({token:token??''})
    const [rows] = await pool.query<any[]>("SELECT * FROM wishlists WHERE userId = ?",[userId])
    return rows
})
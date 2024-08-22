'use server'
import { connectToDb } from "@/utils/connectToDb"
import { handleAction } from "@/utils/handleAction";
import { getUserIdFromToken } from "../utils/getUserIdFromToken";
import { authenticateUser } from "../utils/authenticateUser";

export interface WishListItem {
    propertyName: string;
    isRoom: boolean;
    roomDetails?: string;
    propertyType: string
    propertyId: string;
    propertyImages:string
    token?: string;
}

export const addToWishlist = async ({ propertyName, propertyType,token, roomDetails, isRoom,propertyId,propertyImages }: WishListItem) => {
    try{
        const pool = await connectToDb()
        const userId = await authenticateUser({token:token??''})
        if(!userId) throw new Error('User not found')
        // const [rows] = await pool.query<any[]>("INSERT INTO wishlists (propertyName, propertyType, userId, roomDetails, isRoom,propertyId,propertyImages) VALUES (?,?,?,?,?,?,?)", [propertyName, propertyType,userId, roomDetails??'', isRoom,propertyId,propertyImages])   
    }catch(err){
        throw new Error()
    }

}
      


            

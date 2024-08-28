'use server'
import { connectToDb } from "@/utils/connectToDb"
import { handleAction } from "@/utils/handleAction";
import { authenticateUser } from "../utils/authenticateUser";
import { ErrorCode } from "../error/types";
import { revalidatePath } from "next/cache";

export interface WishListItem {
    propertyName: string;
    isRoom: boolean;
    roomDetails?: string;
    propertyType: string
    propertyId: string;
    propertyImages:string
    token?: string;
}

export const addToWishlist = async ({ propertyName, propertyType,token, roomDetails, isRoom,propertyId,propertyImages }: WishListItem) => handleAction(async()=>{
        const pool = await connectToDb()
        const userId = await authenticateUser({token:token??''})
        if(!userId) throw new Error(ErrorCode.UNAUTHORIZED)
        const [rows]: any[] = await pool.query<any[]>("INSERT INTO wishlists (propertyName, propertyType, userId, roomDetails, isRoom,propertyId,propertyImages) VALUES (?,?,?,?,?,?,?)", [propertyName, propertyType,userId, roomDetails??'', isRoom,propertyId,propertyImages])
        if(rows.affectedRows===0){
            throw new Error(ErrorCode.INTERNAL_SERVER_ERROR)  
        }
        revalidatePath('/wishlist')
    }
)
      


            

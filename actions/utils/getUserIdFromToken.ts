'use server'
import { handleAction } from "@/utils/handleAction";
import jwt from "jsonwebtoken"
import { JwtPayload } from "jwt-decode";
const secretKey = 'your-secret-key'; 


export const getUserIdFromToken = async(jwtToken:string)=>handleAction({
    action:async ()=>{
        const decoded = jwt.verify(jwtToken,secretKey) as JwtPayload
        if(decoded && 'userId' in decoded && decoded.userId){
            return decoded.userId
        }
    },
    errorMessage:"Invalid token"
})
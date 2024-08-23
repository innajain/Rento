'use server'
import { handleAction } from "@/utils/handleAction";
import jwt from "jsonwebtoken"
import { JwtPayload } from "jwt-decode";
import { ErrorCode } from "../error/types";
const secretKey = 'your-secret-key'; 


export const getUserIdFromToken = async(jwtToken:string)=>handleAction(async ()=>{
        const decoded = jwt.verify(jwtToken,secretKey) as JwtPayload
        if(decoded && 'userId' in decoded && decoded.userId){
            return decoded.userId
        }else{
            throw new Error(ErrorCode.UNAUTHORIZED)
        }
    },
)
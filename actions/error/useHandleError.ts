"use client"
import { authAtom } from "@/utils/auth/authAtom"
import { useRecoilState } from "recoil"
import { ErrorCode } from "./types"
import toast from "react-hot-toast"
import { LoginModalAtom } from "@/utils/state/LoginModalAtom"
import { config } from "@/utils/config"


export const useHandleError = ()=>{
    const [auth,setAuth] = useRecoilState(authAtom)
    const [loginModalState,setLoginModalState] = useRecoilState(LoginModalAtom)

    const handleError = (error:any)=>{
        if(error instanceof Error){
            switch(error.message){
                case ErrorCode.UNAUTHORIZED:
                    setAuth({...auth,isAuthenticated:false})
                    setLoginModalState({isOpen:true})
                    // toast.error("You are not authorized. Please Login")
                    break
                case ErrorCode.NOT_FOUND:
                    setAuth({...auth,isAuthenticated:false})
                    setLoginModalState({isOpen:true})
                    toast.error("Resource not found")
                    break
                case ErrorCode.JWT_EXPIRED:
                    setAuth({...auth,isAuthenticated:false})
                    setLoginModalState({isOpen:true})
                    toast.error("Session Expired. Please Login")
                    break
                default:
                    if(config.env==="DEV"){
                        console.error(error)
                    }
                toast.error("Something went wrong!")
                    return 
            }
        }
    }
    return {handleError}
}
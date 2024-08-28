"use client"
import { executeLocalStorageAction, LocalStorageItems } from "@/utils/auth/executeLocalStorageAction"

export const getLocalStorageToken = ()=>{
    return executeLocalStorageAction({actionType:"get",itemName:LocalStorageItems.Token})
}
'use server'
import { config } from "./config";


  
export async function handleAction<ReturnVal>(action:()=>Promise<ReturnVal>){
    try {
      const result = await action();
      return result;
    } catch (err) {
      if(config.env==="DEV"){
        if(err instanceof Error){
          console.error(err.stack)
        }
        throw err
      }
      throw err
    }
  }
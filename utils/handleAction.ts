'use server'
import { config } from "./config";

type HandleActionParams<ReturnVal extends unknown> = {
    action: () => Promise<ReturnVal>;
    errorMessage?: string;
  };
  
export async function handleAction<ReturnVal>({
    action,
    errorMessage,
  }: HandleActionParams<ReturnVal>) {
    try {
      const result = await action();
      return result;
    } catch (err) {
      if(config.env==="DEV"){
        console.error(err)
        throw new Error(errorMessage)
      }
      throw new Error(errorMessage)
    }
  }
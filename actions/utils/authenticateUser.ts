"use server";

import { connectToDb } from "@/utils/connectToDb";
import { getUserIdFromToken } from "./getUserIdFromToken";
import { handleAction } from "@/utils/handleAction";
import { ErrorCode } from "../error/types";

interface Params {
  token: string;
}

export const authenticateUser = async ({ token }: Params) => handleAction(async ()=>{
    if (!token) throw new Error(ErrorCode.UNAUTHORIZED)
    const pool = await connectToDb();
    const userId = await getUserIdFromToken(token);
    if (!userId) throw new Error(ErrorCode.UNAUTHORIZED)
    const [rows] = await pool.query<any[]>(`SELECT * FROM users WHERE id = ?`, [
      userId,
    ]);
    if (rows.length > 0) {
      return userId;
    }
    return null;
}
)

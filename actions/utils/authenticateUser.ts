"use server";

import { connectToDb } from "@/utils/connectToDb";
import { getUserIdFromToken } from "./getUserIdFromToken";

interface Params {
  token: string;
}

export const authenticateUser = async ({ token }: Params) => {
  try {
      console.log(token, "tookeeengiuegfu efougeofgeiofgieioghio fioegwfio ego");
    if (!token) throw new Error("Token not provided");
    const pool = await connectToDb();
    const userId = await getUserIdFromToken(token);
    if (!userId) throw new Error("User not found");
    const [rows] = await pool.query<any[]>(`SELECT * FROM users WHERE id = ?`, [
      userId,
    ]);
    if (rows.length > 0) {
      return userId;
    }
    return null;
  } catch (err) {
    throw new Error();
  }
};

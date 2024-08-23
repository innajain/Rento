'use server'

import { connectToDb } from "@/utils/connectToDb"
import { handleAction } from "@/utils/handleAction"
interface Params{
    token:string
}
export const getCurrentUser = async ({token}:Params) => handleAction(
    async () => {
        const pool = await connectToDb();
        const decoded = jwt.verify
        const [rows] = await pool.query<any[]>('SELECT * FROM users WHERE email = ?', [email]);

        if (rows.length === 0) {
            throw new Error('User not found');
        }

        return rows[0];
    },
   
);
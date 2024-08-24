'use server'
import { connectToDb } from "@/utils/connectToDb";
import { handleAction } from "@/utils/handleAction";
import { authenticateUser } from "../utils/authenticateUser";
import { ErrorCode } from "../error/types";
import { revalidatePath } from "next/cache";

export interface RemoveWishListItem {
    propertyId: string;
    token?: string;
}

export const removeFromWishlist = async ({ propertyId, token }: RemoveWishListItem) => handleAction(async () => {
    const pool = await connectToDb();
    const userId = await authenticateUser({ token: token ?? '' });
    if (!userId) throw new Error(ErrorCode.UNAUTHORIZED);
    const [result] = await pool.query<any[]>("DELETE FROM wishlists WHERE propertyId = ? AND userId = ?", [propertyId, userId]);
    if (result.affectedRows === 0) {
        throw new Error(ErrorCode.NOT_FOUND);
    }
    revalidatePath('/wishlist');
});

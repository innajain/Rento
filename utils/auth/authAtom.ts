"use client"
import { getLocalStorageToken } from "@/actions/utils/getLocalStorageToken";
import { atom } from "recoil";

export const authAtom = atom({
    key: 'authAtom',
    default: {
        isAuthenticated: !!getLocalStorageToken(),
    }
})
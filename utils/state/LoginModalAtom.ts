import { atom } from "recoil";

export const LoginModalAtom = atom<{isOpen:boolean}>({
    key: "LoginModalAtom",
    default: {
        isOpen: false,
    },
})
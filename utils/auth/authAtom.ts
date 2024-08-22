import { atom } from "recoil";
interface AuthState{
    isAuthenticated:boolean;
}
export const authAtom = atom({
    key: 'authAtom',
    default: {
        isAuthenticated: false,
    }
})
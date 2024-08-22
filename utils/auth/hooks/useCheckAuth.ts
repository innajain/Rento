
import { useSetRecoilState } from "recoil";
import { authAtom } from "../authAtom";
import toast from "react-hot-toast";
import { config } from "@/utils/config";
import { authenticateUser } from "@/actions/utils/authenticateUser";
import { executeLocalStorageAction, LocalStorageItems } from "../executeLocalStorageAction";

interface Args {
    token?: string;
    [key: string]: any;
}

interface UseCheckAuthParams<T extends Args> {
    action: (args: T) => Promise<any>;
    errorToast?: string;
    successToast?: string;
}

export const useCheckAuth = <T extends Args>({
    action,
    errorToast,
    successToast,
}: UseCheckAuthParams<T>) => {
    const setAuth = useSetRecoilState(authAtom);
    const useCheckAuthFunc =  async (args: T) => {
        const token = executeLocalStorageAction({ actionType: "get", itemName: LocalStorageItems.Token });
        const oauth = executeLocalStorageAction({ actionType: "get", itemName: LocalStorageItems.OAuth });
        if (!token || !oauth) {
            executeLocalStorageAction({ actionType: "remove", itemName: LocalStorageItems.Token });
            executeLocalStorageAction({ actionType: "remove", itemName: LocalStorageItems.OAuth });
            setAuth({ isAuthenticated: false });
            toast.error('You are unauthorized. Please login');
            return
        }

        try {
            const res: { code: number } | any = await authenticateUser({ token });
            if ('code' in res && res.code === 0) {
                executeLocalStorageAction({ actionType: "remove", itemName: LocalStorageItems.Token });
                executeLocalStorageAction({ actionType: "remove", itemName: LocalStorageItems.OAuth });
                toast.error('You are unauthorized. Please login');
                setAuth({ isAuthenticated: false });
                return;
            }
            return await action({ ...args, token });
        } catch (err) {
            if (config.env === "DEV") {
                console.error(err);
            }
            errorToast && toast.error(errorToast);
        }
    };
    return useCheckAuthFunc;
};

export enum LocalStorageItems{
    OAuth="oauth",
    Token="token",
    LoginTime="in_ty"
}
interface Params{
    actionType:"set"|"get"|"remove"
    itemName: LocalStorageItems
    item?:unknown
}
export const executeLocalStorageAction = ({ actionType, itemName, item }: Params) => {
    switch (actionType) {
        case "set":
            localStorage.setItem(itemName, JSON.stringify(item));
            break;
        case "get":
            return JSON.parse(localStorage.getItem(itemName) || 'null');
        case "remove":
            localStorage.removeItem(itemName);
            break;
        default:
            throw new Error(`Unsupported action type: ${actionType}`);
    }
};
export function setLocalStorageItem<T extends unknown>(key:string,value:T){
    setLocalStorageItem(key,JSON.stringify(value));
}
import { useRecoilValue } from "recoil"
import { roomsFilteredState } from "../state/roomsFilteredState"

export const useFilteredRooms = ()=>{
    const filteredRooms = useRecoilValue(roomsFilteredState)
    
}
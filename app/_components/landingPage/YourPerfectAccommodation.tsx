import { useRef } from "react"
import { RoomCard, RoomData } from "./RoomCard"
import { HorizontalScrollList } from "./HorizontalScrollList"

export function YourPerfectAccommodation() {
  return (
    <div className="flex flex-col gap-5">
      <p className="font-bold text-4xl">
        Your <span className="text-[#fe6f61]">Perfect</span> Accommodation
      </p>
      <HorizontalScrollList>
        {perfectAccommodation.map((roomData, index) => (
          <RoomCard key={index} data={roomData} />
        ))}
      </HorizontalScrollList>
    </div>
  )
}



export const perfectAccommodation: RoomData[] = [
  {
    title: "Micheal Jackson 1st Floor R2",
    address: "Vasanat Vihar, South Delhi",
    tags: ["A/C", "WiFi", "Single Occupancy"],
    pricePerMonth: "7,000",
    image: "/78c3c990590b6c112e5b5cb34f1fbfac.png",
  },
  {
    title: "Micheal Jackson 1st Floor R3",
    address: "Vasanat Vihar, South Delhi",
    tags: ["WiFi", "Triple Occupancy"],
    pricePerMonth: "8,000",
    image: "/7a003bb4ff178a2ea451a316e3b92202.png",
  },
]
import { HorizontalScrollList } from "./HorizontalScrollList"
import { RoomCard } from "./RoomCard"
import { perfectAccommodation } from "./YourPerfectAccommodation"

export function PremiumAcomodation() {
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

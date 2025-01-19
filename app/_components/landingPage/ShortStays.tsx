import { RoomCard, RoomData } from "./RoomCard"
import { HorizontalScrollList } from "./HorizontalScrollList"
import { perfectAccommodation } from "./YourPerfectAccommodation"
import { Heading } from "./Heading"

export function ShortStays() {
  return (
    <div className="flex flex-col gap-5">
      <Heading titleBeforeRed="" red="Short" titleAfterRed="Stays" />
      <HorizontalScrollList>
        {perfectAccommodation.map((roomData, index) => (
          <RoomCard key={index} data={roomData} premium={false} />
        ))}
      </HorizontalScrollList>
    </div>
  )
}
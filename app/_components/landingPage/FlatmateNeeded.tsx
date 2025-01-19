import { RoomCard, RoomData } from "./RoomCard"
import { HorizontalScrollList } from "./HorizontalScrollList"
import { perfectAccommodation } from "./YourPerfectAccommodation"
import { Heading } from "./Heading"

export function FlatmateNeeded() {
  return (
    <div className="flex flex-col gap-5">
      <Heading titleBeforeRed="Flatmate" red="Needed" titleAfterRed="" />
      <HorizontalScrollList>
        {perfectAccommodation.map((roomData, index) => (
          <RoomCard key={index} data={roomData} premium={false} />
        ))}
      </HorizontalScrollList>
    </div>
  )
}
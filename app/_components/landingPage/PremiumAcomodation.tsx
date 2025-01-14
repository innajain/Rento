import Image from "next/image"
import { HorizontalScrollList } from "./HorizontalScrollList"
import { RoomCard } from "./RoomCard"
import { perfectAccommodation } from "./YourPerfectAccommodation"
import Star from "@/public/Star 1.svg"

export function PremiumAcomodation() {
  return (
    <div className="flex flex-col gap-5 bg-[#F8F3EF] border-[#C59856] border-2 rounded-3xl pl-6 pt-6 relative">
        <div className="absolute w-[200px] right-0 top-0 h-full rounded-r-[22px] bg-gradient-to-r from-[#C59856]/0 via-[#C59856]/30 via-48% to-[#C59856]/50" />
      <p className="font-bold text-4xl text-[#AE8549] flex gap-5">
        <Image src={Star} alt="star" />
        Premium Accommodation Show-Off</p>
      <HorizontalScrollList>
        {perfectAccommodation.map((roomData, index) => (
          <RoomCard key={index} data={roomData} premium/>
        ))}
      </HorizontalScrollList>
    </div>
  )
}

"use client"
import { BookingSteps } from "./BookSteps"
import { NeedAssistance } from "./NeedAssistance"
import { YourPerfectAccommodation } from "./YourPerfectAccommodation"
import { MarketingCards } from "./MarketingCards"
import { PopularAreas } from "./PopularAreas"
import { PremiumAcomodation } from "./PremiumAcomodation"
import { PartnerCashback } from "./PartnershipCashback"
import { Testimonials } from "./Testimonials"
import { Open_Sans } from "next/font/google"
import { Heading } from "./Heading"
import { WhereWeOperate } from "./WhereWeOperate"

export default function MainLandingPage() {
  return (
    <div className="flex flex-col gap-16">
      <YourPerfectAccommodation />
      <PremiumAcomodation />
      <MarketingCards />
      <PopularAreas />
      <PartnerCashback />
      <Testimonials />
      <BookingSteps />
      <NeedAssistance />
      <WhereWeOperate />
    </div>
  )
}


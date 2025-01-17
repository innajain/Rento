"use client"
import styled from "styled-components"
import { BookingSteps } from "./BookSteps"
import { NeedAssistance } from "./NeedAssistance"
import { YourPerfectAccommodation } from "./YourPerfectAccommodation"
import { MarketingCards } from "./MarketingCards"
import { PopularAreas } from "./PopularAreas"
import { PremiumAcomodation } from "./PremiumAcomodation"
import Image from "next/image"
import { PartnerCashback } from "./PartnershipCashback"
import { Testimonials } from "./Testimonials"

export const Heading = styled.span`
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 2.5rem;
`
export const SubHeading = styled.span`
font-size: 1rem;
  line-height: 1.5rem;
  color: #979797;
  font-weight: 500;
  `
  export const HighLightedText = styled(Heading)`
  color: #fe6f61;
`
export const HeadingDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

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
    </div>
  )
}

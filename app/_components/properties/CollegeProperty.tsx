"use client"
import { Properties } from "@/utils/types/sanity.types"
import { PersonStanding } from "lucide-react"
import { memo } from 'react';
import { Button, Card, CardBody } from "@nextui-org/react";
import CustomCarousel from "../carousel/Carousel";
import Image from "next/image";
import { urlForImage } from "@/utils/image";
import { LandPlot } from 'lucide-react';
import styled from "styled-components";
import {Chip} from "@nextui-org/react";
import { Check } from 'lucide-react';
import { distance } from "framer-motion";
import { useRouter } from "next/navigation";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const PropertyName = styled.span`
  font-size: 2rem;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #f3f4f6;
  border-radius: 0.5rem;
  padding: 0.25rem 0.5rem;
`;
const InfoText = styled.span`
  font-size: 0.75rem;
`;
const AreaContainer = styled.div`
  display: flex;
  max-width: 10rem;
  align-items: center;
  gap: 0.5rem;
  background-color: #f3f4f6;
  border-radius: 0.5rem;
  padding: 0.25rem 0.5rem;
`;

interface Props{
  property:Properties
  collegeName?:string
  distance?:string
}
function CollegeProperty(props:Props) {
  const router = useRouter()
  const handleClick = async () => {
    localStorage.setItem('distance', JSON.stringify({
      distance: props.distance,
      collegeName: props.collegeName
    }));

    router.push(`/property/${props.property._id}`);
  };

  return (
    <Card className="max-w-full ">
    <CardBody className="flex flex-row gap-4">
      <CustomCarousel carouselStyle={{maxWidth:"20rem"}}>
        {
          props.property?.rooms?.[0]?.images?.map((image,index)=>{
            return (
              <Image alt="property-grid-image" width={1000} height={1000} src={urlForImage(image)} key={index} />
            )
          })
        }
      </CustomCarousel>
      <Container>
          <PropertyName>{props.property.name}</PropertyName>
          <InfoContainer>
            <PersonStanding size={20} />
            <InfoText>Within {props.distance} of {props.collegeName} college</InfoText>
          </InfoContainer>
          <AreaContainer>
            <LandPlot />
            <InfoText>{props.property?.area?.areaName as string}</InfoText>
          </AreaContainer>
          <div className="grid grid-cols-4">
            {
              props.property?.amenities?.map((amenity, index) => {
                return (
                  <Chip startContent={<Check size={14} />} key={index} className="bg-white border-primary border text-sm rounded-lg" >{amenity.amenityName}</Chip>
                )
              })
            }

          </div>
        <div className="mt-auto mb-6 flex flex-col gap-4">
        <Button  radius="sm" size="lg" className="text-xl bg-secondary text-white"> 
            Rooms From &#8377;{props.property.minPrice}
          </Button>
        <div  className="b-4 flex w-full justify-center">
            <Button onClick={handleClick} radius="sm" className="w-full" size="lg" color="primary">
               View Details
            </Button>
        </div>
        </div>
        </Container>
    </CardBody>
    </Card>
  )
}
export default memo(CollegeProperty)
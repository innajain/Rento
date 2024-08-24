"use client"
import { Button, Card, CardBody, CardFooter, Skeleton } from "@nextui-org/react";
import Image from "next/image";
import CustomCarousel from "../carousel/Carousel";
import { getAllWishListedProperties } from "@/actions/wishlist/getAllWishListedProperties";
import { getLocalStorageToken } from "@/actions/utils/getLocalStorageToken";
import { useAuthenticatedQuery } from "@/utils/hooks/useAuthenticatedQuery";
import { getRoomType, RoomType } from "@/utils/rooms/hooks/getRoomType";
import { CircleCheckBig } from "lucide-react";
import styled from "styled-components";
import RemoveFromWihsListButton from "./RemoveFromWihsListButton";

const StyledSpan = styled.span`
  padding: 0.5rem;
  border-radius: 0.5rem;
  display: flex;
  gap: 1rem;
`;
export default function WishListPropertiesGrid() {
  const { data, isLoading, isSuccess } = useAuthenticatedQuery({
    queryKey: ["wishListedProperties"],
    queryFunc: async () => {
      const token = getLocalStorageToken();
      return await getAllWishListedProperties({ token });
    },
  });
 return (
 <Skeleton isLoaded={!isLoading}>
<div className="p-[5rem] mt-[1rem] mx-[2rem] h-screen rounded-2xl xl:gird-cols-3 lg:grid-cols-2  bg-background">
  {
    isSuccess && data && data.length>0 && data.map((property: any, i: number) => {
      const parsedImages = JSON.parse(property.propertyImages);
      const parsedPropertyTypesArray = JSON.parse(property.propertyType) as RoomType[]
      const accomodationType = getRoomType(parsedPropertyTypesArray[0]).split('-')[0]
      const roomOptionsArray = parsedPropertyTypesArray.map((property:RoomType)=> getRoomType(property).split('-')[1] )

      return (
        <Card className="max-w-[45vw] w-full" key={i}>
          <CardBody className="flex flex-row gap-4">
            <CustomCarousel carouselStyle={{maxWidth:"20rem"}}>
              {parsedImages.map((image: string, j: number) => (
                <Image
                  key={j}
                  src={image}
                  alt="Property Image"
                  width={500}
                  height={500}
                />
              ))}
            </CustomCarousel>
        <div className="flex flex-col w-full">
        <div className="flex flex-col gap-4">
              <span className="text-2xl">{property.propertyName}</span>
              <StyledSpan className="bg-background">
                <CircleCheckBig className="text-primary" />
                {accomodationType}
              </StyledSpan>
              {
                roomOptionsArray.map((option:string,i:number)=>
                 <StyledSpan className="bg-background">
                <CircleCheckBig className="text-primary" />
                   {option}
                 </StyledSpan>
                   )
              }
            </div>
            <div className="flex w-full  mt-auto flex-col gap-2 mb-4">
              <RemoveFromWihsListButton radius="sm" size="lg" propertyId={property.propertyId}/>
              <Button radius="sm" className="text-white" color="primary" size="lg">
                View Details
              </Button>
            </div>
        </div>
           
           
          </CardBody>
        </Card>
      );
  })}
</div>
</Skeleton>
 )
   
}

  

 

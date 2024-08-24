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
<div className="gap-2 p-1 grid-cols-1 lg:p-1 md:mx-2 md:p-3 mt-[1rem] grid md:grid-cols-2 lg:mx-[2rem] rounded-2xl lg:grid-cols-2   bg-background">
  {
    isSuccess && data && data.length>0 && data.map((property: any, i: number) => {
      const parsedImages = JSON.parse(property.propertyImages);
      const parsedPropertyTypesArray = JSON.parse(property.propertyType) as RoomType[]
      const accomodationType = getRoomType(parsedPropertyTypesArray[0]).split('-')[0]
      const roomOptionsArray = parsedPropertyTypesArray.map((property:RoomType)=> getRoomType(property).split('-')[1] )

      return (
        <Card  key={i}>
          <CardBody className="flex gap-4 flex-row md:flex-col md:gap-4 lg:flex-row lg:gap-4">
          <CustomCarousel carouselClassName="lg:max-w-[20rem] max-w-[20rem] lg:h-[20rem] md:max-w-[30rem]">
              {parsedImages.map((image: string, j: number) => (
                <Image
                  key={j}
                  src={image}
                  alt="Property Image"
                  width={1000}
                  height={1000}
                />
              ))}
            </CustomCarousel>
        <div className="flex lg:w-full w-full  flex-col md:gap-2 justify-between">
        <div className="flex flex-col gap-4">
              <span className="text-2xl md:text-lg">{property.propertyName}</span>
              <StyledSpan className="bg-background md:text-sm">
                <CircleCheckBig className="text-primary" />
                {accomodationType}
              </StyledSpan>
              {
                roomOptionsArray.map((option:string,i:number)=>
                 <StyledSpan className="bg-background md:text-sm">
                <CircleCheckBig className="text-primary" />
                   {option}
                 </StyledSpan>
                   )
              }
            </div>
            <div className="flex w-full mb-4 flex-col gap-2 ">
              <RemoveFromWihsListButton radius="sm" size="lg" propertyId={property.propertyId}/>
              <Button radius="sm" className="text-white " color="primary" size="lg">
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

  

 

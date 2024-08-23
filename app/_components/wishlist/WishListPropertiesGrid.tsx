"use client"
import { Card, CardBody, Skeleton } from "@nextui-org/react";
import Image from "next/image";
import CustomCarousel from "../carousel/Carousel";
import { getAllWishListedProperties } from "@/actions/wishlist/getAllWishListedProperties";
import { getLocalStorageToken } from "@/actions/utils/getLocalStorageToken";
import { useAuthenticatedQuery } from "@/utils/hooks/useAuthenticatedQuery";
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
  {
    isSuccess && data && data.length>0 && data.map((property: any, i: number) => {
      const parsedImages = JSON.parse(property.propertyImages);
      return (
        <Card key={i}>
          <CardBody>
            <CustomCarousel>
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
          </CardBody>
        </Card>
      );
  })}
</Skeleton>
 )
   
}

  

 

"use client";

import { getAllWishListedProperties } from "@/actions/wishlist/getAllWishListedProperties";
import { useCheckAuth } from "@/utils/auth/hooks/useCheckAuth";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";

export default function WishListPropertiesGrid() {
  const [wishlistProperties, setWishlistProperties] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const getWishListedProperties = useCheckAuth({
    action: getAllWishListedProperties,
    errorToast: "Error getting wishlisted properties",
    successToast: "Wishlisted properties fetched",
  });
  useEffect(() => {
    const fn = async () => {
      setLoading(true);
      const res = await getWishListedProperties({});
      setWishlistProperties(res);
      setLoading(false);
    };
    fn();
  }, []);
  return (
    <>
      {wishlistProperties?.map((property, i) => {
        return (
            <Card key={i}>
                <CardBody>
                    <Image src={property} alt="whishListImage" />
                </CardBody>

            </Card>
        )
      })}
      <Toaster />
    </>
  );
}

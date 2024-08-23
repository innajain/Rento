"use server";
import { handleAction } from "@/utils/handleAction";
import { sanityClient } from "@/utils/sanityClient";
import { Colleges } from "@/utils/types/sanity.types";

export const getCollegeDetails = async (collegeId: string) =>
  handleAction( async () => {
      const college: Colleges[] = await sanityClient.fetch(`
          *[_type == "colleges" && _id == "${collegeId}"] {
          name,
          campus,
          location,
          properties[]->{name,location,minPrice,propertyType,amenities[]->,rooms,area->,_id},
          majorAreas[]->,
          _id,
          minPrice
        }`);
      return college;
    },
  );

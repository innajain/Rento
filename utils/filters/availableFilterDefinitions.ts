import { Properties } from "../types/sanity.types";

type FilterableProperties = Extract<keyof Properties, 'minPrice' | 'propertyType'>;

type AvailableFilterDefinitions = {
  [key in FilterableProperties]: (property: Properties, value: string | unknown| any[]) => boolean;
};

export const availableFilterDefinitions: AvailableFilterDefinitions = {
  minPrice: (property: Properties, value ) =>
    Number(property.minPrice) <= Number(value),

  propertyType: (property: Properties, value) =>
    !!property.propertyType?.find((propertyType) => propertyType === value as string),
};

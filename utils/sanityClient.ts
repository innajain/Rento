
import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: '8x7iwdly',
  dataset: 'production',
  apiVersion: '2024-08-17', 
  useCdn: false, 
});
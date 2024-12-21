
import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: 'zvdb59in',
  dataset: 'production',
  apiVersion: '2024-08-17', 
  useCdn: false, 
});
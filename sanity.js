import { createClient, createCurrentUserHook } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'
export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: "2022-08-02",
    useCdn: process.env.NODE_ENV === "production"
};
const builder = imageUrlBuilder(config)
export const sanityClient = createClient(config)
export function urlFor(source) {
    return builder.image(source)
  }
export const useCurrentUser = createCurrentUserHook(config)
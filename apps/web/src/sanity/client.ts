import { createClient } from "next-sanity";

export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: "2025-07-09",
    useCdn: false,
    // The `development` dataset is private, so even published-perspective reads
    // need a token. `defineLive`'s serverToken only covers drafts/stega fetches.
    token: process.env.SANITY_API_READ_TOKEN,
});
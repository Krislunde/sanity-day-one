import { createClient } from "next-sanity";

export const client = createClient({
    projectId: "ek6is3er",
    dataset: "development",
    apiVersion: "2025-07-09",
    useCdn: false,
});
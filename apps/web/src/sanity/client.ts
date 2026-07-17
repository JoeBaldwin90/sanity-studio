import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "m2ptu8ki",
  dataset: "production",
  apiVersion: "2025-07-09",
  useCdn: false,
});
import { init } from "@immich/sdk";
import type { AstroIntegration } from "astro";

export const immichIntegration: AstroIntegration = {
    name: "immich-integration",
    hooks: {
        "astro:server:start": async () => {
            if (!process.env.IMMICH_API_KEY) {
                throw new Error("IMMICH_API_KEY is not set");
            }
            init({
                baseUrl: "https://photos.danielpower.ca/api",
                apiKey: process.env.IMMICH_API_KEY,
            });
            console.log("Immich SDK initialized");
        }
    }
}
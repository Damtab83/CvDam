import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://Damtab83.github.io",
  base: "CvDam",
  trailingSlash: "always",
  integrations: [tailwind()],
});

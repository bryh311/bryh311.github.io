// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://bryh311.github.io",
  base: "/",
  markdown: {
    shikiConfig: {
      theme: "everforest-light",
    },
  },
});

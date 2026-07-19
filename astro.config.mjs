// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // TODO: reemplazar por el dominio final cuando esté disponible
  site: "https://ivatam-repuestos.com",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});

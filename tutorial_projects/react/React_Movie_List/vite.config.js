import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Set the base path to your repository name
  base: "/React_Movie_List/",
  plugins: [react()],
});

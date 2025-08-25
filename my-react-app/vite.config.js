import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [
//     react({
//       jsxRuntime: "classic", // 👈 important for React 16
//     }),
//   ],
// });

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Firebase Hosting expects dist
  },
});
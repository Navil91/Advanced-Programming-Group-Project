import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote_app",
      filename: "remoteEntry.js",
      exposes: {
        "./NavBar": "./src/components/widgets/NavBar.jsx",
        "./Style": "./src/components/ui/style.css",
        "./Avatar": "./src/components/ui/avatar.jsx",
      },
      shared: [
        "react",
        "@chakra-ui/react",
        "lucide-react",
        "firebase/auth",
        "react-router-dom",
      ],
    }),
  ],
  build: {
    target: "es2022", // or 'modules' for modern browsers
  },
});

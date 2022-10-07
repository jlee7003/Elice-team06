import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
    },
    resolve: {
        alias: [
            { find: "@", replacement: path.resolve(__dirname, "./src") },
            { find: "@components", replacement: path.resolve(__dirname, "./src/components") },
            { find: "@pages", replacement: path.resolve(__dirname, "./src/pages") },
            { find: "@recoil", replacement: path.resolve(__dirname, "./src/recoil") },
            { find: "@routes", replacement: path.resolve(__dirname, "./src/routes") },
            { find: "@styles", replacement: path.resolve(__dirname, "./src/styles") },
        ],
    },
});

import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    return {
        plugins: [react()],
        server: {
            port: 8080,
        },
        resolve: {
            alias: [{ find: "@", replacement: path.resolve(__dirname, "./src") }],
        },
    };
});

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    build: {
        manifest: true,
        rollupOptions: {
            input: "resources/scripts/main.ts",
        },
    },
    server: {
        https: true,
        cors: true,
        hmr: {
            host: "localhost",
        },
    },
    plugins: [vue()],
    optimizeDeps: {
        include: ["@inertiajs/inertia", "@inertiajs/inertia-vue3"],
    },
});

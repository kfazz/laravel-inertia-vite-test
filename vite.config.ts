// vite.config.js
import { createVuePlugin } from 'vite-plugin-vue2';
import { defineConfig } from "vite";
//import vue from "@vitejs/plugin-vue";

export default defineConfig({
    build: {
        manifest: true,
        rollupOptions: {
            input: "resources/scripts/main.js",
        },
    },
    server: {
        https: false,
        cors: true,
        hmr: {
            host: "localhost",
        },
    },
    plugins: [createVuePlugin(/*options*/)],
    //plugins: [vue()],
    optimizeDeps: {
        include: ["@inertiajs/inertia", "@inertiajs/inertia-vue3"],
    },
});

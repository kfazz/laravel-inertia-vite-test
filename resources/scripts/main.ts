import { createApp, h } from "vue";
import { App, plugin } from "@inertiajs/inertia-vue3";
import "vite/dynamic-import-polyfill";

const el = document.getElementById("app")!;

createApp({
    render: () =>
        h(App, {
            initialPage: JSON.parse(el.dataset.page!),
            resolveComponent: async (name: string) => {
                const page = await import(`../views/front/${name}.vue`);
                return page.default;
            },
        }),
})
    .use(plugin)
    .mount(el);

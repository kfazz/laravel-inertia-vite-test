import Vue from "vue";
import { App, plugin } from "@inertiajs/inertia-vue";
import "vite/dynamic-import-polyfill";

const el = document.getElementById("app");

Vue.use(plugin);

new Vue({
    
    render: h => h(App, {
      props: {
        initialPage: JSON.parse(el.dataset.page),
        //resolveComponent:async  name => await import (`../views/front/${name}.vue`).default,
        resolveComponent: name => import(`../views/front/${name}.vue`).then(module => module.default),
    },
    }),
  }).$mount(el)
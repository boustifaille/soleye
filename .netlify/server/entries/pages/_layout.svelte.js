import { c as create_ssr_component } from "../../chunks/index2.js";
const app = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "header.svelte-mc5ti7.svelte-mc5ti7{visibility:hidden;width:100%;height:50px;display:flex;justify-content:space-between;padding:0 20px;background-color:var(--dark-red)}nav.svelte-mc5ti7.svelte-mc5ti7{width:80%;height:100%}ul.svelte-mc5ti7.svelte-mc5ti7{height:100%;display:flex;align-items:center;justify-content:space-between}ul.svelte-mc5ti7 a.svelte-mc5ti7{color:white}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header class="svelte-mc5ti7"><div class="logo"></div>
    <nav class="svelte-mc5ti7"><ul class="svelte-mc5ti7"><li><a href="/" class="svelte-mc5ti7">Accueil</a></li>
            <li><a href="/" class="svelte-mc5ti7">helloword</a></li>
            <li><a href="/" class="svelte-mc5ti7">helloword</a></li></ul></nav></header>

${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};

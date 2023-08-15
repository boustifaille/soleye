import { c as create_ssr_component, d as add_attribute, e as escape, f as each, v as validate_component } from "../../../chunks/index2.js";
import { scaleLinear } from "d3-scale";
import "../../../chunks/singletons.js";
const imgSunset = "/_app/immutable/assets/iconsunset.f87d8d34.png";
const imgSunrise = "/_app/immutable/assets/iconsunrise.1b91728c.png";
const Prediction_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".prediction.svelte-xn0h6f{width:100px;height:100px;display:flex;flex-direction:column;align-items:center;justify-content:center}.img.svelte-xn0h6f{width:50px;height:50px}",
  map: null
};
const Prediction = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { infos } = $$props;
  if ($$props.infos === void 0 && $$bindings.infos && infos !== void 0)
    $$bindings.infos(infos);
  $$result.css.add(css$1);
  return `<div class="prediction svelte-xn0h6f"><img class="img svelte-xn0h6f"${add_attribute("alt", infos.type, 0)}${add_attribute("src", infos.type === "lever" ? imgSunrise : imgSunset, 0)}>
    <div class="pourcent"${add_attribute("style", `color: ${infos.color}`, 0)}>${escape(infos.qualite)}%</div>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1jw7zhg{display:flex;align-items:center;flex-direction:column;justify-content:center;height:calc(100vh - 50px)}.exemple.svelte-1jw7zhg{display:flex;justify-content:space-between;align-items:center;padding:0 5px;color:black;width:100%;height:20px;background:linear-gradient(.25turn, yellow, red)}.jours.svelte-1jw7zhg{left:0;display:flex;width:100vw;height:500px;overflow:auto;scroll-behavior:smooth;scroll-snap-type:x mandatory}.jour.svelte-1jw7zhg{width:100vw;height:100%;scroll-snap-align:start;flex-shrink:0;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:30px}.qualites.svelte-1jw7zhg{display:flex;gap:10px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const getColor = scaleLinear().domain([0, 100]).range(["yellow", "red"]).clamp(true);
  const jours = [
    {
      nom: "Today",
      lever: { qualite: data.qualites[0], heure: "9h18" },
      coucher: {
        qualite: data.qualites[1],
        heure: "18h18"
      }
    },
    {
      nom: "Tomorrow",
      lever: { qualite: data.qualites[2], heure: "9h18" },
      coucher: {
        qualite: data.qualites[3],
        heure: "18h18"
      }
    }
  ];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<main class="svelte-1jw7zhg"><div class="jours svelte-1jw7zhg">${each(jours, (jour) => {
    return `<div class="jour svelte-1jw7zhg"><h2>${escape(jour.nom)}</h2>
                <div class="qualites svelte-1jw7zhg">${validate_component(Prediction, "Prediction").$$render(
      $$result,
      {
        infos: {
          qualite: jour.lever.qualite,
          type: "lever",
          color: getColor(jour.lever.qualite)
        }
      },
      {},
      {}
    )}
                    ${validate_component(Prediction, "Prediction").$$render(
      $$result,
      {
        infos: {
          qualite: jour.coucher.qualite,
          type: "couher",
          color: getColor(jour.coucher.qualite)
        }
      },
      {},
      {}
    )}</div>
            </div>`;
  })}</div>
    <div class="exemple svelte-1jw7zhg"><span>0%</span><span>100%</span></div>
</main>`;
});
export {
  Page as default
};

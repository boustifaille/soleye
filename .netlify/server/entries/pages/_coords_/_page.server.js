import SunburstJS from "sunburst.js";
const SUNBURST_MAIL = "anthoeptm@gmail.com";
const SUNBURST_PASSWORD = "hellowordjs";
async function load({ cookies, params }) {
  let sunburst = new SunburstJS();
  const session = await sunburst.createSession({
    email: SUNBURST_MAIL,
    password: SUNBURST_PASSWORD
  });
  sunburst = new SunburstJS({
    clientId: session.clientId,
    clientSecret: session.clientSecret,
    scope: ["predictions"]
  });
  const coords = params.coords.split(",");
  const now = /* @__PURE__ */ new Date();
  const demain = new Date(now.getDate() + 1);
  new Date(now.getDate() + 2);
  new Date(now.getDate() + 3);
  const resp = await sunburst.batchQuality([
    {
      geo: coords,
      type: "sunset"
    },
    {
      geo: coords,
      type: "sunrise"
    },
    {
      geo: coords,
      type: "sunset",
      after: demain
    },
    {
      geo: coords,
      type: "sunrise",
      after: demain
    }
  ]);
  return {
    qualites: [...resp.map((res) => res.collection.features[0].properties.qualityPercent)]
    // {
    //     aujourdhui : resp[0].collection.features[0].properties.qualityPercent,
    //     demain : resp[1].collection.features[0].properties.qualityPercent,
    //     apresdemain : resp[2].collection.features[0].properties.qualityPercent,
    //     apresapresdemain : resp[3].collection.features[0].properties.qualityPercent,
    // }
  };
}
const actions = {
  predictions: async (e) => {
    console.log(e);
  }
};
export {
  actions,
  load
};

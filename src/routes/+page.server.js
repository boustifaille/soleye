import SunburstJS from "sunburst.js";
import { SUNBURST_CLIENT_ID, SUNBURST_CLIENT_SECRET } from "$env/static/private";

export async function load({ params }) {

    // https://www.npmjs.com/package/sunburst.js

    const sunburst = new SunburstJS({
        clientId : SUNBURST_CLIENT_ID,
        clientSecret : SUNBURST_CLIENT_SECRET,
        scope : ["predictions"]
    });

    const coords = [52.40016106168322, 4.9868781484418685];

    const now = new Date();
    const demain = new Date(now.getDate() + 1);
    const apresdemain = new Date(now.getDate() + 2);
    const apresapresdemain = new Date(now.getDate() + 3);

    const resp = await sunburst.batchQuality([
        {
            geo : coords,
            type : "sunset"
        },{
            geo : coords,
            type : "sunrise"
        },
        {
            geo : coords,
            type : "sunset",
            after : demain
        },
        {
            geo : coords,
            type : "sunrise",
            after : demain
        },
        {
            geo : coords,
            type : "sunset",
            after : apresdemain
        },
        {
            geo : coords,
            type : "sunrise",
            after : apresdemain
        },
        {
            geo : coords,
            type : "sunset",
            after : apresapresdemain
        },
        {
            geo : coords,
            type : "sunrise",
            after : apresapresdemain
        }
    ]);


    return {
        qualites : [...resp.map(res => res.collection.features[0].properties.qualityPercent)]
        // {
        //     aujourdhui : resp[0].collection.features[0].properties.qualityPercent,
        //     demain : resp[1].collection.features[0].properties.qualityPercent,
        //     apresdemain : resp[2].collection.features[0].properties.qualityPercent,
        //     apresapresdemain : resp[3].collection.features[0].properties.qualityPercent,
        // }
    };
}
import SunburstJS from "sunburst.js";
import { SUNBURST_CLIENT_ID, SUNBURST_CLIENT_SECRET,SUNBURST_MAIL,SUNBURST_PASSWORD, LAT, LONG } from "$env/static/private";

export async function load({ cookies, params }) {

    // https://www.npmjs.com/package/sunburst.js

 /*    const sunburst = new SunburstJS();

    const session = await sunburst.createSession({
        email: SUNBURST_MAIL,
        password: SUNBURST_PASSWORD,
        type: 'permanent',
        satisfiescope: ['predictions']
    });

    console.log(session) */

    const sunburst = new SunburstJS({
        clientId : 'b35220dd-cb87-4bb8-95bc-3e3c4ddeb29b',
        clientSecret : 'Ehe2JGJMgxTFj7ziZ3nAq5qObNoHj8yT',
        scope : ["predictions"]
    });    

    const coords = params.coords.split(',');

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


export const actions = {
    predictions : async e => {
        console.log(e)
    }
}
import SunburstJS from "sunburst.js";
import { SUNBURST_MAIL, SUNBURST_PASSWORD } from "$env/static/private";

export async function load({ cookies, params }) {

    // https://www.npmjs.com/package/sunburst.js
 
    
    let sunburst = new SunburstJS();
    
    const session = await sunburst.createSession({
        email: "anthoeptm@gmail.com",
        password: "hellowordjs",
        scope : ["predictions"],
        type:"permanent",
    });
    console.log(session)
    
    // sunburst = new SunburstJS({
    //     clientId : session.clientId,
    //     clientSecret : session.clientSecret,
    //     scope : ["predictions"]
    // });


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
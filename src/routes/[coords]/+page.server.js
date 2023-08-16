import SunburstJS from "sunburst.js";

export async function load({ cookies, params }) {

    // https://www.npmjs.com/package/sunburst.js
 
    
    let sunburst = new SunburstJS();

    const oldClientId = cookies.get('sunsetwx-clientId');
    const oldClientSecret = cookies.get('sunsetwx-clientSecret');

    if (oldClientId && oldClientSecret) {

        sunburst = new SunburstJS({
            clientId : oldClientId,
            clientSecret : oldClientSecret,
            scope : ["predictions"]
        });

    } else {

        const session = await sunburst.createSession({
            email: "anthoeptm@gmail.com",
            password: "hellowordjs",
            scope : ["predictions"],
            type:"permanent",
        });
    
        cookies.set("sunsetwx-clientId", session.clientId, {path : "/"});
        cookies.set("sunsetwx-clientSecret", session.clientSecret, {path : "/"});

        sunburst = new SunburstJS({
            clientId : session.clientId,
            clientSecret : session.clientSecret,
            scope : ["predictions"]
        });

    }
    

    


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
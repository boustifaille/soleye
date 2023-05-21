import SunburstJS from "sunburst.js";
import { SUNBURST_CLIENT_ID, SUNBURST_CLIENT_SECRET } from "$env/static/private";

export async function load({ params }) {

    // https://www.npmjs.com/package/sunburst.js

    const sunburst = new SunburstJS({
        clientId : SUNBURST_CLIENT_ID,
        clientSecret : SUNBURST_CLIENT_SECRET,
        scope : ["predictions"]
    });

    const resp = await sunburst.quality({
        geo: [40.7933949, -77.8600012]
    });    

    return {
        post: {
            title: `Title for ${params.slug} goes here`,
            content: `Content for ${params.slug} goes here`
        }
    };
}
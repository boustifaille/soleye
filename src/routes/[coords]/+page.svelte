<script>
	import Prediction from './../../lib/Prediction.svelte';

    export let data;
    import { scaleLinear } from "d3-scale";
    import Geolocation from "svelte-geolocation";
    import { goto } from "$app/navigation";

    // permet de pouvoir convertir une valeur de 1 à 100 en une couleur plus ou moins chaude
    const getColor = scaleLinear()
            .domain([0, 100])
            .range(["yellow", "red"])
            .clamp(true);


    const jours = [
        {
            nom : "Lundi",
            lever : {
                qualite : data.qualites[0],
                heure : "9h18",
            },
            coucher : {
                qualite : data.qualites[1],
                heure : "18h18",
            }
        },
        {
            nom : "Mardi",
            lever : {
                qualite : data.qualites[2],
                heure : "9h18",
            },
            coucher : {
                qualite : data.qualites[3],
                heure : "18h18",
            }
        },
        {
            nom : "Mercredi",
            lever : {
                qualite : data.qualites[4],
                heure : "9h18",
            },
            coucher : {
                qualite : data.qualites[5],
                heure : "18h18",
            }
        },
        {
            nom : "Jeudi",
            lever : {
                qualite : data.qualites[6],
                heure : "9h18",
            },
            coucher : {
                qualite : data.qualites[7],
                heure : "18h18",
            }
        },
    ];
</script>

<main>
    

    <div class="jours">
        {#each jours as jour}
            <div class="jour">
                <h2>{jour.nom}</h2>
                <div class="qualites">
                    <Prediction infos={{qualite : jour.lever.qualite, type: "lever", color : getColor(jour.lever.qualite)}}/>
                    <Prediction infos={{qualite : jour.coucher.qualite, type: "couher", color : getColor(jour.coucher.qualite)}} />
                </div>
            </div>
        {/each}
    </div>
    <div class="exemple"><span>0%</span><span>100%</span></div>
</main>

<style>
main {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: calc(100vh - 50px);
}

.exemple {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5px;
    color: black;
    width: 100%;
    height: 20px;
    background: linear-gradient(.25turn, yellow, red);
}

.jours {
    left: 0;
    display: flex;
    width: 100vw;
    height: 500px;
    overflow: auto;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
}


.jour {
    width: 100vw;
    height: 100%;
    scroll-snap-align: start;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
}

.qualites {
    display: flex;
    gap: 10px;
}

</style>
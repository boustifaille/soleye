<script>
    export let data;
    import { scaleLinear } from "d3-scale";
	import Location from "$lib/Location.svelte";

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

    const updatePredictions = () => {
        // fetch('/', )
    }


    let localites = ["Fully", "Saxon", "Londres", "New York"];
    let currentLocalite = localites[0];

    $: currentLocalite, updatePredictions();

</script>

<main>
        <Location bind:currentLocalite localites={localites} />

        <div class="jours">
            {#each jours as jour}
                <div class="jour">
                    <h2>{jour.nom}</h2>
                    <div class="qualites">
                        <div class="lever">
                            <div class="color" style="background-color: {getColor(jour.lever.qualite)};">{jour.lever.qualite}%</div>
                            <div class="img"></div>
                            <div class="heure">{jour.lever.heure}</div>
                        </div>
                        <div class="coucher">
                            <div class="color" style="background-color: {getColor(jour.coucher.qualite)};">{jour.coucher.qualite}%</div>
                            <div class="img"></div>
                            <div class="heure">{jour.coucher.heure}</div>
                        </div>
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

    .qualites > div {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .img {
        width: 50px;
        height: 50px;
        background-size: cover;
    }

    .lever .img {
        background-image: url("../assets/icon-sunrise.png");
    }

    .coucher .img {
        background-image: url("../assets/icon-sunset.png");
    }

    .heure {
        color: var(--gray);
    }

    .color {
        width: 100px;
        height: 100px;
        display: grid;
        place-items: center;
        color: black;
    }
</style>
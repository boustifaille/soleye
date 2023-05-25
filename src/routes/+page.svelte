<script>
    // export let data;
    import {scaleLinear} from "d3-scale";
    // permet de pouvoir convertir une valeur de 1 à 100 en une couleur plus ou moins chaude
    const getColor = scaleLinear()
                .domain([0, 100])
                .range(["yellow", "red"])
                .clamp(true);


    const jours = [
        {
            nom : "Lundi",
            lever : Math.round(Math.random() * 100),
            coucher : Math.round(Math.random() * 100),
        },
        {
            nom : "Mardi",
            lever : Math.round(Math.random() * 100),
            coucher : Math.round(Math.random() * 100),
        },
        {
            nom : "Mercredi",
            lever : Math.round(Math.random() * 100),
            coucher : Math.round(Math.random() * 100),
        },
        {
            nom : "Jeudi",
            lever : Math.round(Math.random() * 100),
            coucher : Math.round(Math.random() * 100),
        },
    ]

</script>

<main>
    <h1 style="margin-top: 10px;">Bienvenue !</h1>

        <div class="jours">
            {#each jours as jour}
                <div class="jour">
                    <h2>{jour.nom}</h2>
                    <div class="qualites">
                        <div class="lever">
                            <div class="color" style="background-color: {getColor(jour.lever)};">{jour.lever}%</div>
                            <div class="img"></div>
                        </div>
                        <div class="coucher">
                            <div class="color" style="background-color: {getColor(jour.coucher)};">{jour.coucher}%</div>
                            <div class="img"></div>
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
        height: 300px;
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

    .color {
        width: 100px;
        height: 100px;
        display: grid;
        place-items: center;
        color: black;
    }
</style>
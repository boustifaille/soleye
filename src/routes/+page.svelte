<script>
    // export let data;
    import {scaleLinear} from "d3-scale";
    // permet de pouvoir convertir une valeur de 1 à 100 en une couleur plus ou moins chaude
    const getColor = scaleLinear()
                .domain([0, 100])
                .range(["yellow", "red"])
                .clamp(true);


    const jours = ["Lundi", "Mardi", "Mercredi", "Jeudi"];
</script>

<main>
    <h1>Bienvenue !</h1>

    <div class="exemple"></div>
    <div class="slider">
        <div class="jours">
            {#each jours as jour}
                <div class="jour">
                    <h2>{jour}</h2>
                    <div class="qualites">
                        <div class="lever">
                            <div class="color" style="background-color: {getColor(Math.random() * 100)};"></div>
                            <div class="img"></div>
                        </div>
                        <div class="coucher">
                            <div class="color" style="background-color: {getColor(Math.random() * 100)};"></div>
                            <div class="img"></div>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</main>

<style>
    main {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .exemple {
        width: 100%;
        height: 20px;
        background: linear-gradient(.25turn, yellow, red);
    }
    .slider {
        position: relative;
        align-self: flex-start;
    }

    .jours {
        left: 0;
        position: absolute;
        display: flex;
        width: 100vw;
        height: 700px;
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
    }
</style>
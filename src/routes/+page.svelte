<script>
    // export let data;
    import {scaleLinear} from "d3-scale";
    // permet de pouvoir convertir une valeur de 1 à 100 en une couleur plus ou moins chaude
    const getColor = scaleLinear()
                .domain([0, 100])
                .range(["yellow", "red"])
                .clamp(true);
</script>

<main>
    <h1>Bienvenue !</h1>

    <div class="exemple"></div>
    <div class="slider">
        <div class="jours">
            <div class="jour">
                <p>Lundi</p>
                <div class="color" style="background-color: {getColor(0)};"></div>
            </div>
            <div class="jour">
                <p>Mardi</p>
                <div class="color" style="background-color: {getColor(25)};"></div>
            </div>
            <div class="jour">
                <p>Mercredi</p>
                <div class="color" style="background-color: {getColor(50)};"></div>
            </div>
            <div class="jour">
                <p>Jeudi</p>
                <div class="color" style="background-color: {getColor(75)};"></div>
            </div>
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
    }

    .color {
        width: 100px;
        height: 100px;
    }
</style>
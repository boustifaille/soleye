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
    .jours {
        display: inline;
        white-space: nowrap;
    }

    .jour {
        width: 200px;
    }

    .color {
        width: 100px;
        height: 100px;
    }
</style>
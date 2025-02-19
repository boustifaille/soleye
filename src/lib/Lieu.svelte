<script>
    import Prediction from "./Prediction.svelte";
    import { scaleLinear } from "d3-scale";

    export let jours;
    export let lieu;

    const getColor = scaleLinear()
            .domain([0, 100])
            .range(["yellow", "red"])
            .clamp(true);

</script>

<div>
    { lieu }
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
</div>

<style>
.jours {
    left: 0;
    display: flex;
    width: 100%;
    height: 200px;
    overflow: auto;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
}


.jour {
    width: 100%;
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
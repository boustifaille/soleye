<script>
    import Prediction from "./Prediction.svelte";
    import { scaleLinear } from "d3-scale";
    import imgMenu from "$lib/assets/ellipsis-vertical-solid.svg"

    export let jours;
    export let lieu;
    export let removeLieu;

    const getColor = scaleLinear()
            .domain([0, 100])
            .range(["yellow", "red"])
            .clamp(true);


            
    function remove() {
        displayPopover = false
        removeLieu()
    }

    let displayPopover = false;

</script>

<svelte:document on:click={() => displayPopover = false} />

<div>
    <div class="lieu-header">
        { lieu }
        <div>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <img src={imgMenu} alt="" width="5px" on:click={(e) => {e.stopPropagation();displayPopover = true} } >
            <div class="menu" style={displayPopover ? 'display: block;' : 'display:none;'}>
                <ul>
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <li on:click={remove}>Supprimer</li>
                </ul>
            </div>
        </div>
    </div>

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

.lieu-header {
    width: calc(100% - 15px);
    display: flex;
    justify-content: space-between;
    margin-right: 15px;
    position: relative;
}

.lieu-header img {
    filter: invert(1);
}

.menu {
    position: absolute;
    top: 25px;
    right: 0;
    background-color: white;
    width: 100px;
    height: 40px;
}


.menu ul {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.menu li {
    color: var(--black);
}

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
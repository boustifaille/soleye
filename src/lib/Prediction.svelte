<script>
    export let infos;
    import imgSunset from "$lib/assets/iconsunset.png";
    import imgSunrise from "$lib/assets/iconsunrise.png";
</script>

<div class="prediction">
    <img class="img" alt={infos.type} src={infos.type === "lever" ? imgSunrise : imgSunset}/>
    <div class="pourcent" style={`color: ${infos.color}`}>{infos.qualite}%</div>
</div>

<style>
    .prediction {
        width: 100px;
        height: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .img {
        width: 50px;
        height: 50px;
    }
</style>
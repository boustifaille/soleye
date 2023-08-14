<script>
    export let infos;
    import imgSunset from "$lib/assets/iconsunset.png";
    import imgSunrise from "$lib/assets/iconsunrise.png";
/*
Sunrise
(0-25%) Poor: Less than or equal to -223
(25-50%) Fair: Greater than -223 to -40
(50-75%) Good: Greater than -40 to 142
(75-100%) Great: Greater than 142

Sunset
(0-17.63%) Poor: Less than or equal to -262.75
(17.63-50%) Fair: Greater than -262.75 to -75
(50-75%) Good: Greater than -75 to 70
(75-100%) Great: Greater than 70
*/

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
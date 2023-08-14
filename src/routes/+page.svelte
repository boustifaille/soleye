<script>
    import Geolocation from "svelte-geolocation";
    import { goto } from "$app/navigation";

    const redirect = () => {
        goto(`/${coords}`)
    }

    let coords = [];

    $: coords && redirect();

</script>

<Geolocation getPosition bind:coords />
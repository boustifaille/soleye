<script>
    import Geolocation from "svelte-geolocation";
    import { goto } from "$app/navigation";

    const redirect = () => {
        goto(`/${coords}`)
    }

    let coords;
    let success;

    $: success && redirect();

</script>

<Geolocation getPosition bind:coords bind:success/>

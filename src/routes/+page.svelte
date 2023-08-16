<script>
	import { browser } from '$app/environment';
    import Geolocation from "svelte-geolocation";
    import { goto } from "$app/navigation";

    const redirect = () => {
        console.log(coords)
        goto(`/${coords}`)
    }

    let coords;
    let success;

    $: success && redirect();

</script>

<Geolocation getPosition bind:coords bind:success/>

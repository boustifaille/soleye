<script>
	import { browser } from '$app/environment';
    import Geolocation from "svelte-geolocation";
    import { goto } from "$app/navigation";

    const redirect = () => {
        goto(`/${coords}`)
    }

    let coords;

    $: browser && coords && redirect();

</script>

<Geolocation getPosition bind:coords />
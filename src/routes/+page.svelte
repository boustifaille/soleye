<script>
    import Geolocation from "svelte-geolocation";
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";

    const redirect = () => {
        goto(`/prediction`)
    }

    // let coords;
    // let success;

    // $: success && redirect();
    // $: redirect()

    onMount(() => {
        redirect()
    })

</script>

<!-- <Geolocation getPosition bind:coords bind:success/> -->

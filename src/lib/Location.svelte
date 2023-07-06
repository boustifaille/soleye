<script>
    export let localites;
    export let currentLocalite;
</script>


<select bind:value={currentLocalite}>
    {#each localites as localite}
        <option value={localite}>{localite}</option>
    {/each}
</select>
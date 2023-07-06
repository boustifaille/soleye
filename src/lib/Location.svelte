<script>
    export let localites;
</script>


<select>
    {#each localites as localite}
        <option>{localite}</option>
    {/each}
</select>
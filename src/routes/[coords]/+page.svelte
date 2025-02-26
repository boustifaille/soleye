<script>

    export let data;
    import plus from "$lib/assets/plus-solid.svg"
    import Lieu from '../../lib/Lieu.svelte';


    const jours = [
        {
            nom : "mercredi 19 févr.",
            lever : {
                qualite : data.qualites[0],
                heure : "9h18",
            },
            coucher : {
                qualite : data.qualites[1],
                heure : "18h18",
            }
        },
        {
            nom : "jeudi 20 févr.",
            lever : {
                qualite : data.qualites[2],
                heure : "9h18",
            },
            coucher : {
                qualite : data.qualites[3],
                heure : "18h18",
            }
        },
        {
            nom : "vendredi 21 févr.",
            lever : {
                qualite : data.qualites[0],
                heure : "9h18",
            },
            coucher : {
                qualite : data.qualites[1],
                heure : "18h18",
            }
        },
    ];

    let lieu = ['Sion', 'Fully']

    const addMy = () => {
        if (!lieu.includes('Martigny')) lieu = [...lieu, 'Martigny']
    }
</script>

<main>
    
    <div class="lieu">
        {#each lieu as l}
            <Lieu jours={jours} lieu={l} removeLieu={() => lieu = lieu.filter(el => el !== l)} />
        {/each}
    </div>
    <!-- <div class="exemple"><span>0%</span><span>100%</span></div> -->


    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="btn-plus" on:click={addMy}>
        <img src={plus} alt="plus" width="15px" />
    </div>
</main>

<style>
main {
    margin: 100px 0;
    /* height: calc(100vh - 50px); */
}

.exemple {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5px;
    color: black;
    width: 100%;
    height: 20px;
    background: linear-gradient(.25turn, yellow, red);
}

.lieu {
    display: flex;
    flex-direction: column;
    gap: 50px;
    width: calc(100% - 20px);
    margin: 0 20px;
}

.btn-plus {
    background-color: var(--primary);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: grid;
    place-content: center;
    position: fixed;
    bottom: 15px;
    right: 15px;
}

</style>
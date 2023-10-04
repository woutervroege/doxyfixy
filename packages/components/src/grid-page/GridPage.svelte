<script>
	import { tick } from "svelte";
    import PageHeader from '../page-header/PageHeader.svelte';
    import Card from '../card/Card.svelte';
    import Button from '../button/Button.svelte';
    import './grid-page.css';


   /**
   * @type {string} title
   */
   export let title = '';

    /**
    * @type {string} intro
    */
    export let intro = '';

    /**
    * @type {array} tags    */
    export let tags = [];

    /**
    * @type {array} cards
    */
    let cards = [];   

    /**
    * @type {array} selectedTags
    */
    let selectedTags = [];

    /**
    * @type {boolean} funky
    */
    export let funky = false;

    /**
     * Has Tags
    */
    $: hasTags = tags.length > 0;

    /**
     * 
     */
    async function setSelectedTags() {
        await tick();
        selectedTags = [...root.querySelectorAll('button.selected')].map(item => item.innerText.toLowerCase());
    }

    /**
     * DOM selector
    */
    let root;

    $: cards = root && [...root.querySelectorAll('.doxy-card')] || [];
    $: filteredCards = filterCards(cards, selectedTags) || [];
    $: cardsGroups = getCardsGroups(filteredCards);
    $: hasCards = filteredCards.length > 0;
    
    function getCardsGroups(cards = []) {

        const groups = [];

        const chunks = _sliceIntoChunks(cards, 7);
        chunks.forEach(chunk => {
            if(chunk.length < 3) {
                groups.push(chunk)
            } else {
                groups.push([...chunk].splice(0, 2))
                groups.push([...chunk].splice(2))
            }
        })
        return groups;
    }

    function _sliceIntoChunks(arr, chunkSize) {
        const res = [];
        if(!funky) return res;
        for (let i = 0; i < arr.length; i += chunkSize) {
            const chunk = arr.slice(i, i + chunkSize);
            res.push(chunk);
        }
        return res;
    }

    function filterCards(cards, selectedTags) {

        if(selectedTags.length === 0) return cards;

        const filtered = cards.filter((card, i) => {
            const cardTags = card.dataset.tags.toLowerCase().split(/,/g);

            for(var i in selectedTags) {
                if(cardTags.includes(selectedTags[i])) return true;
            }
            
            return false;

        })

        return filtered;

    }

</script>

<div class="doxy-page doxy-grid-page" bind:this={root}>

    <PageHeader
        title={title}
        intro={intro}
    />

    {#if hasTags}
    <!-- <div class="nav-container"> -->
    <nav>
        {#each tags as tag}
            <Button
                label={tag}
                selectable
                on:toggle={setSelectedTags}
            />
        {/each}
    </nav>
    <!-- </div> -->
    {/if}


    
    {#if cards.length > 0 && !hasCards}<h5>Coming soon...</h5>{/if}

    <slot hidden={true}/>


    <div class="grid" hidden={funky} inert={funky}>
        {#each filteredCards as card}
            <a href={card.closest('a')?.href}>
                <Card
                    title={card.dataset.title}
                    subtitle={card.dataset.subtitle}
                    size={card.dataset.size}
                    summary={card.dataset.summary}
                    tags={card.dataset.tags.split(',')}
                    href={card.dataset.href}
                    division={card.dataset.division}
                >
                <img
                    src={card.querySelector('img').src}
                    loading="lazy"
                    decoding="async"
                    alt=""
                >
            </Card>
            </a>
        {/each}
    </div>

    <div class="funky-grid" hidden={!funky} inert={!funky}>
        {#each cardsGroups as cardsGroup}
            <div class="grid-section grid-section-{cardsGroup.length}">
                {#each cardsGroup as card}
                    <a href={card.closest('a').href}>
                        <Card
                            title={card.dataset.title}
                            subtitle={card.dataset.subtitle}
                            size={card.dataset.size}
                            summary={card.dataset.summary}
                            tags={card.dataset.tags.split(',')}
                            href={card.dataset.href}
                            division={card.dataset.division}
                        >
                        <img
                            src={card.querySelector('img').src}
                            loading="lazy"
                            decoding="async"
                            alt=""
                        >
                    </Card>
                    </a>
                {/each}
            </div>
        {/each}
    </div>

</div>
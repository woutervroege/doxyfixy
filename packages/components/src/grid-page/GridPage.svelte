<script>
    import PageHeader from '../page-header/PageHeader.svelte';
    import Card from '../card/Card.svelte';
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
     * DOM selector
    */
    let root;

    $: cards = root && [...root.querySelectorAll('.doxy-card')];

    $: cardsGroups = getCardsGroups(cards);
    
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
        for (let i = 0; i < arr.length; i += chunkSize) {
            const chunk = arr.slice(i, i + chunkSize);
            res.push(chunk);
        }
        return res;
    }

    function filterCards(e) {
        selectedTags = e.detail.selectedTags;
        console.info(cards)
        cards.forEach(card => {
            const cardTags = card.dataset.tags.split(/,/g);
            let hideCard = selectedTags.length === 0 ? false : cardTags.length === 0;
            for(var i in selectedTags) {
                if(cardTags.includes(selectedTags[i])) hideCard = false;
            }
            card.hidden = hideCard;
        });
    }

</script>

<div class="doxy-page doxy-grid-page" bind:this={root}>

    <PageHeader
        title={title}
        intro={intro}
        tags={tags}
        on:selected-tags-changed={filterCards}
    />

    <div class="grid" hidden={funky} inert={funky}>
        <slot/>
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
                        >
                    </Card>
                    </a>
                {/each}
            </div>
        {/each}
    </div>

</div>
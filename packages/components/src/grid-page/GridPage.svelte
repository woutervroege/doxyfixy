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
    * @type {array} tags
    */
    export let tags = [];
    
    /**
    * @type {array} cards
    */
    export let cards = [];

    /**
    * @type {array} selectedTags
    */
    let selectedTags = [];

    /**
     * DOM selector
    */
    let root;

    function filterCards(e) {
        selectedTags = e.detail.selectedTags;
        const cards = root.querySelectorAll('.doxy-card');
        cards.forEach(card => {
            const cardTags = card.dataset.tags.split(/,/g);
            let hideCard = selectedTags.length === 0 ? false : true;
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

    <div class="grid">
        <slot/>
    </div>

</div>
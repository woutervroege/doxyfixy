<script>
    import PageHeader from '../page-header/PageHeader.svelte';
    import './page.css';


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


</script>

<div class="doxy-page" bind:this={root}>

    <PageHeader
        title={title}
        intro={intro}
    />

    <div class="grid">
        <slot/>
    </div>

</div>
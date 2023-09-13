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
    
</script>

<div class="doxy-grid-page">

    <PageHeader
        title={title}
        intro={intro}
        tags={tags}
    />

    <div class="grid">
        <slot/>
    </div>

</div>
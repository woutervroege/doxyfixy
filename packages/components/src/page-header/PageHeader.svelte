<script>
    import './page-header.css';
    import Button from '../button/Button.svelte';
	import { tick } from "svelte";
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

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
   * @type {array} tags
   */
   export let selectedTags = [];

   /**
    * Has Tags
   */
    $: hasTags = tags.length > 0;

    /**
     * DOM selector
    */
    let root;

    /**
     * 
    */
   async function setSelectedTags() {
    await tick();
    selectedTags = [...root.querySelectorAll('button.selected')].map(item => item.innerText.toLowerCase());
    dispatch('selected-tags-changed', {selectedTags: selectedTags});
   }

</script>

<section class="doxy-page-header" bind:this={root}>
    <div>
        {#if title}<h1>{title}</h1>{/if}
        {#if intro}<p>{intro}</p>{/if}

        {#if hasTags}
        <div class="nav-container">
        <nav>
            {#each tags as tag}
                <Button
                    label={tag}
                    selectable
                    on:toggle={setSelectedTags}
                />
            {/each}
        </nav>
        </div>
        {/if}
    </div>
</section>
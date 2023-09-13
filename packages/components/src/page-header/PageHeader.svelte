<script>
    import './page-header.css';
    import Button from '../button/Button.svelte';

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
    * Has Tags
   */
    $: hasTags = tags.length > 0;

</script>

<section class="doxy-page-header">
    <div>
        {#if title}<h1>{title}</h1>{/if}
        {#if intro}<p>{intro}</p>{/if}

        {#if hasTags}
        <div class="nav-container">
        <nav>
            {#each tags as tag}
                <Button
                    elevated
                    label={tag}
                    selectable
                />
            {/each}
        </nav>
        </div>
        {/if}
    </div>
</section>
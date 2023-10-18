<script>
    import './page-header.css';

   /**
   * @type {string} title
   */
   export let title = '';

   /**
   * @type {string} intro
   */
   export let intro = '';

   /**
   * @type {boolean} bigintro
   */
   export let bigintro = false;

</script>

{#if title || intro}
<section class="doxy-page-header">
    <div>
        {#if title}<h1>{title}</h1>{/if}
        {#if intro}<p class={bigintro ? 'p-large' : ''}>{intro}</p>{/if}
    </div>
</section>
{/if}
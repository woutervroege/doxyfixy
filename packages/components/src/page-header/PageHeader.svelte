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

</script>

<section class="doxy-page-header">
    <div>
        {#if title}<h1>{title}</h1>{/if}
        {#if intro}<p>{intro}</p>{/if}
    </div>
</section>
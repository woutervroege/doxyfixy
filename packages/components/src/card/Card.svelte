<script>
    import './card.css';
    import Tag from '../tag/Tag.svelte';

  /**
   * @type {string} title
   */    
   export let title = '';

  /**
   * @type {string} subtitle
   */    
   export let subtitle = '';

  /**
   * @type {('small' | 'medium' | 'large' | 'hero' | 'portrait')} size
   */    
   export let size = 'small';

  /**
   * @type {string} summary
   */    
   export let summary = '';


  /**
   * @type {string} href
   */    
   export let href;   

  /**
   * @type {array} tags
   */    
   export let tags = [];

   /**
    * 
    */
   $: classNames = ['doxy-card', size]
</script>

<section class="{classNames.join(' ')}" data-tags={tags}>
    <div class="container">
        <div class="text-container">
            <h3>{title}</h3>
            {#if subtitle}<h4>{subtitle}</h4>{/if}
            <div>
                {#each tags as tag}
                    <Tag label={tag}/>
                {/each}
            </div>
            <p>
                {summary}
                {#if href} <a href={href}>Lees interview</a>{/if}
            </p>
        </div>
        <slot/>
    </div>
</section>
<script>
    import './card.css';
    import Tag from '../tag/Tag.svelte';

  /**
   * @type {string} title
   */    
   export let title = '';

  /**
   * @type {boolean} title
   */    
   export let editorial = false;

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
   * @type {string} searchdata
   */    
   export let searchdata = '';   

  /**
   * @type {string} href
   */    
   export let href;   

  /**
   * @type {array} tags
   */    
   export let tags = [];

  /**
   * @type {('doxy' | 'fixy')} division
   */    
   export let division = 'doxy';


   /**
    * 
    */
   $: classNames = ['doxy-card', size, division, editorial ? 'doxy-card-editorial' : ''];
</script>

<section class="{classNames.join(' ')}"
    data-title={title}
    data-searchdata={searchdata}
    data-subtitle={subtitle}
    data-summary={summary}
    data-size={size}
    data-href={href}
    data-division={division}
    data-tags={tags}
>
    <div class="container">
        <div class="text-container">
            <h3 class="title">{@html title}</h3>
            {#if subtitle}<h4 class="subtitle">{subtitle}</h4>{/if}
            <div>
                {#each tags as tag}
                    <Tag label={tag}/>
                {/each}
            </div>
            <p class="summary">
                {@html summary}
                {#if href} <a href={href}>Lees interview</a>{/if}
            </p>

            <figure class="laurel">
                <slot name="laurel"/>
            </figure>
    
        </div>
        <slot/>
    </div>
</section>
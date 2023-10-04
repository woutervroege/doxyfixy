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
   * @type {('doxy' | 'fixy')} division
   */    
   export let division = 'doxy';


   /**
    * 
    */
   $: classNames = ['doxy-card', size, division];
</script>

<section class="{classNames.join(' ')}"
    data-title={title}
    data-subtitle={subtitle}
    data-summary={summary}
    data-size={size}
    data-href={href}
    data-division={division}
    data-tags={tags}
>
    <div class="container">
        <div class="text-container">
            <h3>{@html title}</h3>
            {#if subtitle}<h4>{subtitle}</h4>{/if}
            <div>
                {#each tags as tag}
                    <Tag label={tag}/>
                {/each}
            </div>
            <p>
                {@html summary}
                {#if href} <a href={href}>Lees interview</a>{/if}
            </p>
        </div>
        <slot/>
    </div>
</section>
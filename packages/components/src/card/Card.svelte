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
   * @type {array} tags
   */    
   export let tags = [];

   /**
    * 
    */
   $: classNames = ['doxy-card', size]
</script>

<section class="{classNames.join(' ')}">
    <div class="container">
        <div class="text-container">
            <h3>{title}</h3>
            <h4>{subtitle}</h4>
            <div>
                {#each tags as tag}
                    <Tag label={tag}/>
                {/each}
            </div>
        </div>
        <slot/>
    </div>
</section>
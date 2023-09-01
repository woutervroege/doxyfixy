<script>
    import './card.css';
    import Tag from '../tag/Tag.svelte';

  /**
   * @type {string} title
   */    
   export let title = '';

  /**
   * @type {string} description
   */    
   export let description = '';

  /**
   * @type {string} size
   */    
   export let size = 'small';

  /**
   * @type {array} tags
   */    
   export let tags = [];

   $: classNames = ['doxy-card', size]
</script>

<section class="{classNames.join(' ')}">
    <h3>{title}</h3>
    <p>{description}</p>
    <div>
        {#each tags as tag}
            <Tag label={tag}/>
        {/each}
    </div>
</section>
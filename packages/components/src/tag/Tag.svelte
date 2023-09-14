<script>
    import './tag.css';
  
    /**
     * @type {string} Label
     */    
      export let label = 'Tag';

    const classNames = ['doxy-tag']
</script>

<div data-label={label} class="{classNames.join(' ')}">{label}</div>
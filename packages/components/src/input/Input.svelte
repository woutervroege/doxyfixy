<script>
    import './input.css';
  
    /**
     * @type {string} placeholder
     */    
     export let placeholder = '';

    /**
     * @type {string} value
     */    
     export let value = '';

    const classNames = ['doxy-input']
</script>

<input
    class="{classNames.join(' ')}"
    placeholder="{placeholder}"
    value="{value}"
>
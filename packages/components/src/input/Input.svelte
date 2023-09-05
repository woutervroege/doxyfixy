<script>
    import './input.css';
  
    /**
     * @type {string} type
     */    
     export let type = 'text';

    /**
     * @type {string} placeholder
     */    
     export let placeholder = '';

    /**
     * @type {string} value
     */    
     export let value = '';

    /**
     * @type {boolean} disabled
     */    
     export let disabled = false;

    const classNames = ['doxy-input']
</script>

<input
    class="{classNames.join(' ')}"
    placeholder="{placeholder}"
    type="{type}"
    value="{value}"
    disabled="{disabled}"
>
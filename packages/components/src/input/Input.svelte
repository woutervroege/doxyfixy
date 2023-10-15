<script>
    import './input.css';
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
  
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


    /**
     * DOM selector
    */
    let root;     

    const classNames = ['doxy-input']

    function handleInput() {
        dispatch('input', {value: root.value});
    }
</script>

<input
    bind:this={root}
    class="{classNames.join(' ')}"
    placeholder="{placeholder}"
    type="{type}"
    value="{value}"
    disabled="{disabled}"
    on:input={handleInput}
>
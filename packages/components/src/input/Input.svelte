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
     * @type {object} inputDebouncer
     */    
     let inputDebouncer = {};


    /**
     * DOM selector
    */
    let root;     

    const classNames = ['doxy-input']

    function handleInput() {
        window.clearTimeout(inputDebouncer);
        inputDebouncer = window.setTimeout(() => {
            dispatch('input', {value: root.value});
        }, 250)
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
<script>
  import './button.css';
  import Icon from '../icon/Icon.svelte';
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

   /**
   * @type {string} Button contents
   */
  export let label = '';

    /**
   * @type {boolean} Disabled
   */
   export let disabled = false;

    /**
   * @type {boolean} Selectable
   */
   export let selectable = false;

    /**
   * @type {boolean} Selected
   */
   export let selected = false;

    /**
   * @type {string} Icon
   */
   export let icon = ''; 

    /**
     * DOM selector
    */
    let root;

    /**
    * @private
    */
   async function handleClick() {
    // // selected = !selected;
    console.info('button', root.innerText.toLowerCase(), !selected);
    dispatch('toggle', {selected: !selected, tag: root.innerText.toLowerCase(), target: root})
   }


  $: classNames = ['doxy-button', selectable ? 'selectable' : '', selected ? 'selected' : '', (icon && !label) ? 'icon' : '']
</script>

<button
  bind:this={root}
  type="button"
  class="{classNames.join(' ')}"
  disabled='{disabled}'
  on:click={handleClick}
>
  {label}
  {#if icon } <Icon icon={icon}/> {/if}
</button>

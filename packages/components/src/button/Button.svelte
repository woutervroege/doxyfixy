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
   * @type {boolean} Elevated
   */
   export let elevated = false;

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
    * @private
    */
   function toggleSelected() {
    selected = !selected;
    dispatch('toggle', {selected: selected})
   }


  $: classNames = ['doxy-button', elevated ? 'elevated' : '', selectable ? 'selectable' : '', selected ? 'selected' : '', (icon && !label) ? 'icon' : '']
</script>

<button
  type="button"
  class="{classNames.join(' ')}"
  disabled='{disabled}'
  on:click={toggleSelected}
>
  {label}
  {#if icon } <Icon icon={icon}/> {/if}
</button>

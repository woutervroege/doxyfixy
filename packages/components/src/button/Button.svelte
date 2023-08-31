<script>
  import './button.css';
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

   /**
   * @type {string} Button contents
   */
  export let label;

    /**
   * @type {boolean} Disabled
   */
   export let disabled = false;

    /**
   * @type {boolean} Elevated
   */
   export let elevated = false;

    /**
   * @type {boolean} Tag
   */
   export let tag = false;

    /**
   * @type {boolean} Tag
   */
   export let selected = false;

    /**
    * @private
    */
   function toggleSelected() {
    selected = !selected;
    dispatch('toggle', {selected: selected})
   }


  $: classNames = ['doxy-button', elevated ? 'elevated' : '', tag ? 'tag' : '', selected ? 'selected' : '']
</script>

<button
  type="button"
  class="{classNames.join(' ')}"
  disabled='{disabled}'
  on:click={toggleSelected}
>
  {label}
</button>

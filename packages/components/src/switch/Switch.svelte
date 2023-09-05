<script>
    import './switch.css';
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

     /**
     * @type {boolean} on
     */
     export let on = false;
  
     /**
     * @type {string} offLabel
     */
     export let offLabel = 'EN';
  
     /**
     * @type {string} onLabel
     */
     export let onLabel = 'NL';

     /**
      * disable
      */
      function disable() {
        on = false;
        dispatch('toggle', {on: on})
     }
  
     /**
      * enable
      */
      function enable() {
        on = true;
        dispatch('toggle', {on: on})
     }
  
    $: classNames = ['doxy-switch', on ? 'on' : 'off']
  </script>

  <div class="{classNames.join(' ')}">
    <button on:click={disable}>{offLabel}</button>
    <button on:click={enable}>{onLabel}</button>
  </div>
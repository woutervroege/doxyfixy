<script>
  import './button.css';

   /**
   * @type {string} Button contents
   */
  export let label;

    /**
   * @type {boolean} Disabled
   */
   export let disabled;

  //$: style = backgroundColor ? `background-color: ${backgroundColor}` : '';
</script>

<button
  type="button"
  class="doxy-button"
  disabled='{disabled}'
  on:click
>
  {label}
</button>

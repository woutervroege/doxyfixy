<script>
  import './icon.css';

  /**
   * @type {string} Icon
   */    
    export let icon = 'search';
</script>

{#if icon}
<svg class="doxy-icon">
    <use xlink:href="#{icon}"></use>

    <symbol id="close" viewBox="0 0 17 17" fill="none">
        <path stroke-width="0" fill-rule="evenodd" style="fill:currentColor" clip-rule="evenodd" d="M8.05171 8.78239L15.3952 16.1484L16.1034 15.4424L8.75774 8.0742L16.1034 0.706025L15.3952 0L8.05171 7.36601L0.708187 0L0 0.706026L7.34568 8.0742L0 15.4424L0.708187 16.1484L8.05171 8.78239Z"/>
        </symbol>
        
        <symbol id="search" viewBox="0 0 19 19" fill="none">
            <path stroke-width="0" style="fill:currentColor" fill-rule="evenodd" d="M15.5 8a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-1.708 6a8 8 0 1 1 .707-.707l4.355 4.353-.708.708-4.354-4.355Z" clip-rule="evenodd"/>
        </symbol>
    
</svg>
{/if}
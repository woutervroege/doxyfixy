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
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.05171 8.78239L15.3952 16.1484L16.1034 15.4424L8.75774 8.0742L16.1034 0.706025L15.3952 0L8.05171 7.36601L0.708187 0L0 0.706026L7.34568 8.0742L0 15.4424L0.708187 16.1484L8.05171 8.78239Z"/>
        </symbol>
        
        <symbol id="search" viewBox="0 0 19 19" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM13.2923 13.9994C11.882 15.2445 10.0292 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 10.0292 15.2445 11.882 13.9994 13.2923L18.3536 17.6464L17.6464 18.3536L13.2923 13.9994Z"/>
        </symbol>
    
</svg>
{/if}
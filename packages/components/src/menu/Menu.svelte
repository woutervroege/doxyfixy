<script>
	import Button from '../button/Button.svelte';
	import Switch from '../switch/Switch.svelte';
    import './menu.css';
	import '../button/Button.css';

   /**
   * @type {string} Button contents
   */
   export const label = '';

   /**
    * 
   */
    let open = false;

     /**
    * ButtonIcon
    */
    $: buttonIcon = open ? 'close' : '';

     /**
    * ButtonLabel
    */
    $: buttonLabel = open ? '' : 'Menu';

     /**
    * Class Names
    */
    $: classNames = ['doxy-menu', open ? 'open' : ''];

   /**
    * 
   */
    function toggle() {
        open = !open;
    }

</script>

<div class="{classNames.join(' ')}" role="menu">

    <div inert={!open} class="menuitems">
        <a data-index="4" class="doxy-button" href="/">Films</a>
        <a data-index="2" class="doxy-button" href="/people">People</a>
        <a data-index="1" class="doxy-button" href="/">About</a>
        <Switch client:visible/>
    </div>

    <div class="button-container">
        <Button icon="{buttonIcon}" label="{buttonLabel}" on:toggle={toggle}/>
    </div>

</div>

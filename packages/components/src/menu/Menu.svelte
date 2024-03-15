<script>
	import Button from '../button/Button.svelte';
	import Switch from '../switch/Switch.svelte';
    import './menu.css';
	import '../button/button.css';

   /**
   * @type {string} Button contents
   */
   export const label = '';

   /**
   * @type {string} Link Prefix
   */
   export let prefix = '/';

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


   /**
    * 
   */
   function close() {
        open = false;
    }

</script>

<div class="{classNames.join(' ')}" role="menu">

    <div inert={!open} class="menuitems">
        <a inert={!open} data-index="4" class="doxy-button" href="{prefix}films">Films</a>
        <a inert={!open} data-index="2" class="doxy-button" href="{prefix}people">People</a>
        <a inert={!open} data-index="1" class="doxy-button" href="{prefix}about">About</a>
        <!-- <Switch client:visible/> -->
    </div>

    <div class="button-container">
        <Button icon="{buttonIcon}" label="{buttonLabel}" on:toggle={toggle}/>
    </div>

</div>

<div class="doxy-menu-bg" on:click={close}></div>
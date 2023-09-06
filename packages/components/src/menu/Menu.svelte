<script>
	import Button from '../button/Button.svelte';
    import './menu.css';
	import '../button/Button.css';

   /**
   * @type {string} Button contents
   */
   export let label = '';

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
    <div inert={!open}>
        <a class="doxy-button" href="/doxies">Doxies</a>
        <a class="doxy-button" href="/fixies">Fixies</a>
        <a class="doxy-button" href="/people">People</a>
        <a class="doxy-button" href="/about">About</a>
    </div>
    <Button icon="{buttonIcon}" label="{buttonLabel}" on:toggle={toggle}/>
</div>

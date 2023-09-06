<script>
    import './header.css';
	import Button from "../button/Button.svelte";
	import Logo from "../logo/Logo.svelte";
	import Switch from "../switch/Switch.svelte";
	import Menu from '../menu/Menu.svelte';


</script>

<header class="doxy-header">
    <Logo/>
    <nav>
        <Menu/>
        <Button icon="search" elevated/>
        <Switch/>
    </nav>
</header>
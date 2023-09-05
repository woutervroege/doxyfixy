<script>
    import './header.css';
	import Button from "../button/Button.svelte";
	import Logo from "../logo/Logo.svelte";
	import Switch from "../switch/Switch.svelte";


</script>

<header class="doxy-header">
    <Logo/>
    <nav>
        <Button icon="search" elevated/>
        <Button label="Menu" elevated/>
        <Switch/>
    </nav>
</header>
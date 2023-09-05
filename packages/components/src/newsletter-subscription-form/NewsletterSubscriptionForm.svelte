<script>
    import './newsletter-subscription-form.css';
    import '../button/Button.svelte';
    import '../input/Input.svelte';
	import Input from '../input/Input.svelte';
	import Button from '../button/Button.svelte';
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

   /**
   * @type {boolean} submitted
   */
   let submitted = false;

   /**
   * @type {string} buttonLabel
   */
   let buttonLabel = 'Submit';

   /**
    * 
   */
   async function submit() {
    submitted = true;
    buttonLabel = 'Subscribing...';
    dispatch('submit');
    const foo = await fetch('/'); //TODO: POST data to URL
    buttonLabel = 'Thanks!';
   }

</script>

<div class="doxy-newsletter-subscription-form">
    <Input disabled={submitted} placeholder="Name"/>
    <Input disabled={submitted} type="email" placeholder="Email"/>
    <Button disabled={submitted} label="{buttonLabel}" on:toggle={submit}/>
</div>
<script>
    import './newsletter-subscription-form.css';
    import '../button/Button.svelte';
    import '../input/Input.svelte';
	import Input from '../input/Input.svelte';
	import Button from '../button/Button.svelte';

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
    const foo = await fetch('/'); //TODO: add subscription URL
    buttonLabel = 'Thanks!';    
   }

</script>

<div class="doxy-newsletter-subscription-form">
    <Input disabled={submitted} placeholder="Name"/>
    <Input disabled={submitted} type="email" placeholder="Email"/>
    <Button disabled={submitted} label="{buttonLabel}" on:toggle={submit}/>
</div>
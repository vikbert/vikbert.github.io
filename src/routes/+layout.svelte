<script>
	import './app.css';
	import Header from '../lib/header/Header.svelte';
	export let segment;
	import { Footer } from '@pixss/svelte';
</script>

<div class="layout">
	<Header {segment}/>
	<main class="main">
		<slot/>
	</main>
	<Footer/>
</div>
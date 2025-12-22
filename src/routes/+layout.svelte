<script>
	import './app.css';
	import Header from '../lib/header/Header.svelte';
	export let segment;
</script>

<div class="layout">
	<Header {segment}/>
	<main class="main">
		<slot/>
	</main>
</div>
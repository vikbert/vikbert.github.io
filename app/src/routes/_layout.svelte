<script>
  import Header from '../components/Header.svelte';

  export let segment;
</script>

<div class="layout">
  <Header {segment}/>
  <main class="main">
      <slot></slot>
  </main>
</div>

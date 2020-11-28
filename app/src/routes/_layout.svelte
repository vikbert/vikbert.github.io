<script>
  import Header from '../components/Header.svelte';

  export let segment;
</script>

<style>
  .container {
    min-height: 20rem;
    padding-top: 2rem;
  }
</style>

<div class="layout">
  <Header {segment}/>

  <main class="main">
    <div class="container">
      <slot></slot>
    </div>
  </main>

  <footer class="footer">
    <div class="container centered-xy">
      &copy; {new Date().getFullYear()} vikbert.github.io
    </div>
  </footer>
</div>

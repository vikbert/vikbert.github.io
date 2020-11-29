<script>
  import Nav from './Nav.svelte'
  export let segment
</script>

<header>
  <nav class="topbar">
    <div class="container space-between">
      <a href="/">
        <img alt="Sapper" src='vikbert.svg' width="30">
      </a>
      <Nav {segment} />
    </div>
  </nav>
</header>

<style>
  img {
    width: 3rem;
    height: 3rem;
    border-radius: 3rem;
    display: block;
  }
</style>

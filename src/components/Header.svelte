<script>
  import Nav from './Nav.svelte'
  export let segment
</script>

<header>
  <nav class="topbar">
    <div class="container space-between">
      <a href="/">
        <img alt="Sapper" src='me.jpg' width="30">
      </a>
      <Nav {segment} />
    </div>
  </nav>
</header>

<style>
  img {
    width: 4rem;
    height: 4rem;
    border-radius: 4rem;
    display: block;
    margin-left: 2rem;
  }
</style>

<script>
  import Nav from './Nav.svelte';

  export let segment;
  const avatarUri = './vikbert.svg';
</script>

<header>
  <nav class="topbar">
    <div class="container space-between">
      <a href="/">
        <img alt="Sapper" src={avatarUri} width="30" />
      </a>
      <Nav {segment} />
    </div>
  </nav>
</header>

<style>
  img {
    width: 4rem;
    height: 4rem;
    border-radius: 3rem;
    display: block;
  }
  @media screen and (max-width: 320px) {
    img {
      width: 2.6rem;
    }
  }
</style>

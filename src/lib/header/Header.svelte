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
    width: 3rem;
    height: 3rem;
    border-radius: 3rem;
    display: block;
  }
  @media screen and (max-width: 375px) {
    img {
      width: 2.6rem;
    }
  }
</style>

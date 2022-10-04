<script>
  import Nav from './Nav.svelte';
  import { base } from '$app/paths';

  export let segment;
  const avatarUri = "/vikbert.svg";
</script>

<header>
  <nav class="topbar">
    <div class="container space-between">
      <a href="{base}/">
        <img alt="Sapper" src={base + avatarUri} width="30" />
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

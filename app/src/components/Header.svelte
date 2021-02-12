<script>
    import Nav from './Nav.svelte';

    export let segment;
    const avatarUri = './vikbert.svg';
</script>

<style>
  img {
    width: 4rem;
    height: 4rem;
    border-radius: 3rem;
    display: block;
  }
</style>

<header>
    <nav class="topbar">
        <div class="container space-between">
            <a href="/">
                <img alt="Sapper" src={avatarUri} width="30"/>
            </a>
            <Nav {segment}/>
        </div>
    </nav>
</header>

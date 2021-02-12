<script>
    import Footer from '../components/footer/Footer.svelte';
    import HeroShape from '../components/HeroShape.svelte';
    import About from '../components/about/About.svelte';
</script>

<svelte:head>
    <title>About - vikbert</title>
</svelte:head>

<HeroShape color="is-secondary">
    <div class="container text-centered opacity-50">
        <h5>Believer in</h5>
        <h2>Craftsman Manifesto</h2>
    </div>
</HeroShape>

<About/>

<Footer/>

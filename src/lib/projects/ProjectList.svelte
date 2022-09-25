<script>
  import Project from './Project.svelte';
  import HeroShape from '../HeroShape.svelte';
  export let projects;
</script>

<HeroShape color="is-secondary text-centered">
  <h2 class="opacity-50">Some of my side projects</h2>
  <h5 class="opacity-75">Most of my <span class="orange">PHP</span> side projects are related to working stuffs, and are <span class="orange">not shared</span> here. </h5>
</HeroShape>

<div class="container">
  <div class="centered-xy my-2" />
  <div class="items">
    {#each projects as projectData}
      <div class="item">
        <Project {...projectData} />
      </div>
    {/each}
  </div>
</div>

<style>
  span.orange {
    color: rgb(238, 144, 22);
    font-size: 30px;
  }
  .container {
    max-width: 112rem !important;
  }
  .items {
    display: grid;
    grid-gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
  @media (max-width: 480px) {
    .items {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
  }
</style>

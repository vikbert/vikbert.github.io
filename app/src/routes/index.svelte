<script>
import Project from '../components/Project.svelte'
import Bio from '../components/Bio.svelte'
</script>

<svelte:head>
  <title>vikbert.github.io</title>
</svelte:head>

<div class="container">
 <div>
  <h1>My Projects</h1>
  <div class="row">
    <div class="column">
      <Project
        title="pixss"
        info="A lightweight css framework for minimalist"
        url="https://github.com/vikbert/pixss"
      />
    </div>
    <div class="column">
    </div>
  </div>
 </div>
  <!-- <Bio/> -->
</div>

<style>
  .container {
    max-width: 112.0rem !important;
    height: 85vh;
    display: grid;
    grid-template-rows: 1fr 15rem;
  }
</style>

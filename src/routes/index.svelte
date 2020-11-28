<script>
import Project from '../components/Project.svelte'
</script>

<svelte:head>
  <title>Sapper Blog Template</title>
</svelte:head>

<div class="container">
  <h3>My Projects</h3>
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

<style>
  h3 {
    opacity: .65;
    font-weight: 400;
  }
  .container {
    max-width: 112.0rem !important;
  }
</style>

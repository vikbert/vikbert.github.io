<script>
  import Bio from '../components/Bio.svelte';
import Header from '../components/Header.svelte';
import Project from '../components/Project.svelte';
import About from './about.svelte';
import Index from './blog/index.svelte';
import Error from './_error.svelte';
  const projects = [
    {
      title: 'pixss',
      info: 'A lightweight css framework for minimalist',
      url: 'https://github.com/vikbert/pixss',
    },
    {
      title: 'appikon',
      info: 'A simple mobile app icon generator, created with ReactJS and SVG',
      url: 'https://github.com/vikbert/appikon',
    },
    {
      title: 'YiTab',
      info: 'A Chrome extension created with React+TypeScript',
      url: 'https://github.com/vikbert/yitab',
    },
  ];
</script>

<style>
  .container {
    max-width: 112rem !important;
    height: 85vh;
  }
  .projects {
    display: flex;
    flex-wrap: wrap;
  }
</style>

<svelte:head>
  <title>vikbert.github.io</title>
</svelte:head>

<div class="container">
  <h1>My Projects</h1>
  <div class="projects">
    {#each projects as projectData}
      <Project {...projectData} />
    {/each}
  </div>
</div>

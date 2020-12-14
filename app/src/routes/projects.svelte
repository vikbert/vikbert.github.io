<script>
  import Project from '../components/Project.svelte';
  const projects = [
    {
      title: 'PiXSS',
      info:
        'A lightweight css framework for minimalist. Create a wonderful website with minimal utitily class set. Small but good enough.',
      url: 'https://github.com/vikbert/pixss',
      icon:
        '<span class="iconify" data-icon="ion:logo-sass" data-inline="false"></span>',
    },
    {
      title: 'FirePoll',
      info:
        'A realtime Voting App based on firebase, redux and React: responsive design powered by React Material UI',
      url: 'https://github.com/vikbert/firepoll',
      icon:
        '<span class="iconify" data-icon="teenyicons:firebase-outline" data-inline="false"></span>',
    },
    {
      title: 'Appikon',
      info:
        'A simple mobile app icon generator to save up the time to create the app icon for both native app or web app',
      url: 'https://github.com/vikbert/appikon',
      icon:
        '<span class="iconify" data-icon="file-icons:test-react" data-inline="false"></span>',
    },
    {
      title: 'YiTab',
      info:
        'A Chrome extension to sve up to 100% memory and reduce tab clutter. Close or restore these tabs with just one click.',
      url: 'https://github.com/vikbert/yitab',
      icon:
        '<span class="iconify" data-icon="ant-design:chrome-outlined" data-inline="false"></span>',
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
  h1 {
    text-align: center;
  }
</style>

<svelte:head>
  <title>Projects - Vikbert</title>
</svelte:head>

<div class="container">
  <div class="centered-xy my-2">
    <h1>Projects</h1>
  </div>
  <div class="projects">
    {#each projects as projectData}
      <Project {...projectData} />
    {/each}
  </div>
</div>

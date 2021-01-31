<script>
  import Project from '../components/Project.svelte';
  const projects = [
    {
      title: 'PiXSS',
      info:
        'A lightweight css framework for minimalist. Create a wonderful website with minimal utitily class set. Small but good enough.',
      url: 'https://vikbert.github.io/pixss/',
      icon:
        '<span class="iconify" data-icon="ion:logo-sass" data-inline="false"></span>',
    },
    {
      title: 'SSOmoc',
      info:
        'Single-Sign-On Proof of concept in symfony 5 standard project',
      url: 'https://github.com/vikbert/ssomoc',
      icon:
        '<span class="iconify" data-icon="la:symfony" data-inline="false"></span>',
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
      title: 'NuTab',
      info:
        'Another Chrome extension to increase the productivity with the following features: manage Todos, quick search your bookmarks, add add a text note from everywhere.',
      url: 'https://github.com/vikbert/nutab',
      icon:
        '<span class="iconify" data-icon="ant-design:chrome-outlined" data-inline="false"></span>',
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
    {
      title: 'My MacOS Dev setup scripts',
      info:
        'A couple of shell scripts for setting up the web dev environment in MacOS',
      url: 'https://github.com/vikbert/awesome-macbook-setup',
      icon:
        '<span class="iconify" data-icon="carbon:mac-command" data-inline="false"></span>',
    },
    {
      title: 'NineS',
      info:
        'My mini technical notes, build with vue.js and markdown.',
      url: 'https://vikbert.github.io/nines/',
      icon:
        '<span class="iconify" data-icon="logos:markdown" data-inline="false"></span>',
    },
    {
      title: 'maskr',
      info:
        'A realtime mask radar built with Vue.js for Google Map. The test data is found in internet, and is not real.',
      url: 'https://github.com/vikbert/maskr/',
      icon:
        '<span class="iconify" data-icon="ri:vuejs-line" data-inline="false"></span>',
    },
    {
      title: 'BookStore',
      info:
        'BookStore demp app built with Svelte 3 and mocked REST API',
      url: 'https://github.com/vikbert/svelete-bookstore',
      icon:
        '<span class="iconify" data-icon="ri:vuejs-line" data-inline="false"></span>',
    },
    {
      title: 'speedor',
      info:
        'Test the internet connection speed and ping speedtest.net from the CLI',
      url: 'https://github.com/vikbert/speedor',
      icon:
        '<span class="iconify" data-icon="mdi:speedometer-medium" data-inline="false"></span>',
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
    <h1>Some prime projects</h1>
  </div>
  <div class="projects">
    {#each projects as projectData}
      <Project {...projectData} />
    {/each}
  </div>
</div>

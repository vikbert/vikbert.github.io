<script>
  import HeroShape from '../components/HeroShape.svelte';
  import Project from '../components/Project.svelte';
  const projects = [
    {
      title: 'PiXSS',
      info:
        'A lightweight css framework for minimalist. Create a wonderful website with minimal utitily class set. Small but good enough.',
      demo: 'https://vikbert.github.io/pixss/',
      repository: 'vikbert/pixss',
      tags: ['sass', 'html', 'svelte', 'vue', 'pixss'],
    },
    {
      title: 'SSOmoc',
      info: 'Single-Sign-On Proof of concept in symfony 5 standard project',
      demo: 'https://github.com/vikbert/ssomoc',
      repository: 'vikbert/ssomoc',
      tags: ['symfony', 'php', 'pixss'],
    },
    {
      title: 'FirePoll',
      info:
        'A realtime Voting App based on firebase, redux and React: responsive design powered by React Material UI',
      demo: 'https://github.com/vikbert/firepoll',
      repository: 'vikbert/firepoll',
      tags: ['react', 'material-ui', 'firebase'],
    },
    {
      title: 'NuTab',
      info:
        'Another Chrome extension to increase the productivity with the following features: manage Todos, quick search your bookmarks, add add a text note from everywhere.',
      demo: 'https://github.com/vikbert/nutab',
      repository: 'vikbert/nutab',
      tags: ['react', 'chrome'],
      icon:
        '<span class="iconify" data-icon="ant-design:chrome-outlined" data-inline="false"></span>',
    },
    {
      title: 'Appikon',
      info:
        'A simple mobile app icon generator to save up the time to create the app icon for both native app or web app',
      demo: 'https://github.com/vikbert/appikon',
      repository: 'vikbert/appikon',
      tags: ['react', 'ios'],
      icon:
        '<span class="iconify" data-icon="ri:reactjs-fill" data-inline="false"></span>',
    },
    {
      title: 'YiTab',
      info:
        'A Chrome extension to sve up to 100% memory and reduce tab clutter. Close or restore these tabs with just one click.',
      demo: 'https://github.com/vikbert/yitab',
      repository: 'vikbert/yitab',
      tags: ['react', 'typescript'],
      icon:
        '<span class="iconify" data-icon="ant-design:chrome-outlined" data-inline="false"></span>',
    },
    {
      title: 'My MacOS Dev setup scripts',
      info:
        'A couple of shell scripts for setting up the web dev environment in MacOS',
      demo: 'https://github.com/vikbert/awesome-macbook-setup',
      repository: 'vikbert/awesome-macbook-setup',
      tags: ['macos', 'cli'],
      icon:
        '<span class="iconify" data-icon="carbon:mac-command" data-inline="false"></span>',
    },
    {
      title: 'NineS',
      info: 'My mini technical notes, build with vue.js and markdown.',
      demo: 'https://vikbert.github.io/nines/',
      repository: 'vikbert/nines',
      tags: ['vue', 'doc', 'markdown', 'pixss'],
      icon:
        '<span class="iconify" data-icon="logos:markdown" data-inline="false"></span>',
    },
    {
      title: 'maskr',
      info:
        'A realtime mask radar built with Vue.js for Google Map. The test data is found in internet, and is not real.',
      demo: 'https://github.com/vikbert/maskr/',
      repository: 'vikbert/maskr',
      tags: ['vue', 'sass',],
      icon:
        '<span class="iconify" data-icon="ri:vuejs-line" data-inline="false"></span>',
    },
    {
      title: 'BookStore',
      info:
        'BookStore: a experimental app built with Svelte 3 and mocked REST API as I started learning svelte.js',
      demo: 'https://github.com/vikbert/svelete-bookstore',
      repository: 'vikbert/svelete-bookstore',
      tags: ['svelte', 'pixss'],
      icon:
        '<span class="iconify" data-icon="teenyicons:svelte-outline" data-inline="false"></span>',
    },
    {
      title: 'speedor',
      info:
        'Test the internet connection speed and ping speedtest.net from the CLI',
      demo: 'https://github.com/vikbert/speedor',
      repository: 'vikbert/speedor',
      tags: ['cli', 'react', 'node'],
      icon:
        '<span class="iconify" data-icon="mdi:speedometer-medium" data-inline="false"></span>',
    },
    {
      title: 'sf-components',
      info:
        'A smart full list of Symfony components for simple search and category.',
      demo: 'https://github.com/vikbert/sf-components',
      repository: 'vikbert/sf-components',
      tags: ['symfony', 'typescript',  'svelte',  'pixss', 'doc'],
      icon:
        '<span class="iconify" data-icon="teenyicons:svelte-outline" data-inline="false"></span>',
    },
    {
      title: 'Masanfit',
      info: 'A minimal fitness timer made for interval training.',
      demo: 'https://github.com/vikbert/masanfit',
      repository: 'vikbert/masanfit',
      tags: ['react', 'weui', 'sass'],
      icon:
        '<span class="iconify" data-icon="ion:fitness-outline" data-inline="false"></span>',
    },
  ];
</script>

<svelte:head>
  <title>Projects - Vikbert</title>
</svelte:head>

<HeroShape color="is-secondary text-centered">
  <h2 class="opacity-50">My prime projects</h2>
</HeroShape>

<div class="container">
  <div class="centered-xy my-2" />
  <div class="projects">
    {#each projects as projectData}
      <div class="project">
        <Project {...projectData} />
      </div>
    {/each}
  </div>
</div>

<style>
  .container {
    max-width: 112rem !important;
    height: 85vh;
  }
  .projects {
    display: grid;
    grid-gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
</style>

<script>
  import Project from './Project.svelte';
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
      info: 'A Oauth2 based Single-Sign-On Proof of concept in symfony 5 standard project',
      demo: 'https://github.com/vikbert/ssomoc',
      repository: 'vikbert/ssomoc',
      tags: ['symfony', 'php', 'pixss'],
    },
    {
      title: 'FirePoll',
      info:
        'A realtime Voting App based on firebase, redux and React: responsive design powered by React Material UI',
      demo: 'https://firepoll.netlify.app/',
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
    },
    {
      title: 'Appikon',
      info:
        'A simple mobile app icon generator to save up the time to create the app icon for both native app or web app',
      demo: 'https://appikon.netlify.app/',
      repository: 'vikbert/appikon',
      tags: ['react', 'ios'],
    },
    {
      title: 'YiTab',
      info:
        'A Chrome extension to sve up to 100% memory and reduce tab clutter. Close or restore these tabs with just one click.',
      demo: 'https://github.com/vikbert/yitab',
      repository: 'vikbert/yitab',
      tags: ['react', 'typescript'],
    },
    {
      title: 'MacOS setup scripts',
      info:
        'A couple of shell scripts for setting up the web dev environment in MacOS',
      demo: 'https://github.com/vikbert/awesome-macbook-setup',
      repository: 'vikbert/macbook-setup',
      tags: ['macos', 'cli'],
    },
    {
      title: 'NineS',
      info: 'My mini technical notes, build with vue.js and markdown.',
      demo: 'https://vikbert.github.io/nines/',
      repository: 'vikbert/nines',
      tags: ['vue', 'doc', 'markdown', 'pixss'],
    },
    {
      title: 'maskr',
      info:
        'A realtime mask radar built with Vue.js for Google Map. The test data is found in internet, and is not real.',
      demo: 'https://maskr.xzhou.vercel.app/',
      repository: 'vikbert/maskr',
      tags: ['vue', 'sass',],
    },
    {
      title: 'BookStore',
      info:
        'BookStore: a svelte.js app built with Svelte 3 and mocked REST API as I started learning svelte.js',
      demo: 'https://svelete-bookstore.vercel.app',
      repository: 'vikbert/svelete-bookstore',
      tags: ['svelte', 'pixss'],
    },
    {
      title: 'speedor',
      info:
        'Test the internet connection speed and ping speedtest.net from the CLI',
      demo: 'https://github.com/vikbert/speedor',
      repository: 'vikbert/speedor',
      tags: ['cli', 'react', 'node'],
    },
    {
      title: 'sf-components',
      info:
        'A smart full list of Symfony components for simple search and category.',
      demo: 'https://sf-components.vercel.app/',
      repository: 'vikbert/sf-components',
      tags: ['symfony', 'typescript',  'svelte',  'pixss', 'doc'],
    },
    {
      title: 'Masanfit',
      info: 'A minimal fitness timer made for interval training.',
      demo: 'https://masanfit.netlify.app/',
      repository: 'vikbert/masanfit',
      tags: ['react', 'weui', 'sass'],
    },
    {
      title: 'LifeCalender-ts-svelte',
      info: 'A life calender inspired by Tim Uraban TED talk: Svelte-Typescript version',
      demo: 'https://lifecalender.vercel.app/',
      repository: 'vikbert/lifecalender-ts',
      tags: ['svelte', 'typescript', 'pixss'],
    },
    {
      title: 'LifeCalender React',
      info: 'A life calender inspired by Tim Uraban TED talk. React.js version',
      demo: 'https://lifecalendar.netlify.app/',
      repository: 'vikbert/lifecalendar',
      tags: ['react', 'material-ui'],
    },
  ];
</script>

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
  .container {
    max-width: 112rem !important;
    height: 85vh;
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

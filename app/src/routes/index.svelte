<script>
  import FooterShape from '../components/FooterShape.svelte';
  import HeroShape from '../components/HeroShape.svelte';
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

<div class="container text-centered">
  <img class="avatar" src="me.jpg" alt="about me" />
  <h1>About Me</h1>

  <p>
    Hi, I'm
    <strong>Vikbert</strong> from Berlin. This cybername comes from the names of
    my two kids:
    <strong>Vik</strong>toria & Al<strong>bert</strong>.
  </p>
  <p>
    I work as a software engineer since 2010, after my "Diplom Informatik" study
    at TU Berlin. Mostly, I use the the Symfony framework
    <a
      target="_blank"
      href="https://connect.symfony.com/profile/vikbert"
      rel="noreferrer"
    >
      <strong>(sf connect)</strong>
    </a>
    for the web projects and love its decoupled and resuable components. I am also
    interested in "Domain Driven Design" and believe in both
    <strong>Clean code</strong>
    and
    <strong>
      <a href="http://manifesto.softwarecraftsmanship.org/" rel="noreferrer"
        >Craftsman Manifesto</a
      >
    </strong>.
  </p>

  <p>
    I am
    <a href="https://www.exin.com/" target="_blank" rel="noreferrer"
      ><strong>EXIN</strong></a
    >
    certificated Scrum Master and live actively in Agile Software Development for
    daily work. In my experience, agile sofware development is about "People first,
    transparency and constantly improving". For that vision, I follow the
    <a
      href="https://agilemanifesto.org/"
      target="_blank"
      rel="noreferer noopener"
      ><strong>Manifesto for Agile Software Development</strong></a
    >.
  </p>

  <p>
    In my spare time, I just jump out of the world of <strong
      >server-side programming</strong
    >
    and do some reactive & functional programming in open-source world with
    <strong>TypeScript</strong>, <strong>React.js</strong>,
    <strong>Svelte.js</strong>, and <strong>Firebase</strong>.
  </p>

  <div class="centered-xy">
    <a href="/projects">
      <button class="is-secondary is-rounded is-outlined">
        Explore some of my projects
      </button>
    </a>
  </div>

  <div class="stack">
    <div class="my-1">Built With</div>
    <a
      href="https://vikbert.github.io/pixss/"
      rel="noreferer noopener"
      target="_blank"
    >
      <img src="pixss.png" alt="pixss" width="32" />
    </a>
    <a href="https://svelte.dev/" rel="noreferer noopener" target="_blank">
      <span
        class="iconify"
        data-icon="teenyicons:svelte-outline"
        data-inline="false"
      />
    </a>
    <a
      href="https://www.markdownguide.org/"
      rel="noreferer noopener"
      target="_blank"
    >
      <span class="iconify" data-icon="bi:markdown" data-inline="false" />
    </a>
  </div>
</div>

<FooterShape>
  <div class="container centered-xy">vikbert ® 2020</div>
</FooterShape>

<style>
  img.avatar {
    width: 100px;
    height: 100px;
    border-radius: 100px;
    display: block;
    margin: 0 auto;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  .container {
    max-width: 65rem;
  }
  .stack {
    margin-top: 10rem;
    font-size: 13px;
    text-align: center;
  }
  .stack a {
    margin: 0 1rem;
  }
  h5 {
    margin-bottom: 0;
  }
  h2 {
    font-weight: 900;
    padding-bottom: 20px;
  }
  .iconify {
    width: 38px;
    height: 38px;
    color: black;
  }
</style>

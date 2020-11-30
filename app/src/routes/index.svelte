<style>
  img {
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
</style>

<svelte:head>
  <title>About - vikbert</title>
</svelte:head>

<div class="container text-centered">
  <img src="me.jpg" alt="about me" />
  <h1>About Me</h1>

  <p>
    Hi, I'm
    <strong>Vikbert</strong>. This cybername comes from the names of my two
    kids:
    <strong>Vik</strong>toria & Al<strong>bert</strong>.
  </p>
  <p>
    I work as a software engineer in Berlin and enjoy my fullstack job at
    Schwarz Gruppe. Mostly I use the the Symfony framework
    <a
      target="_blank"
      href="https://connect.symfony.com/profile/vikbert"
      rel="noreferrer">
      <strong>(connect me)</strong>
    </a>
    for the web projects at work and love the symfony components and its
    community. I am interested in "Domain Driven Design" and become an absolute
    believer of both
    <strong>Clean code</strong>
    and
    <strong>
      <a
        href="http://manifesto.softwarecraftsmanship.org/"
        rel="noreferrer">Craftsman Manifesto</a>
    </strong>.
  </p>

  <p>
    I am
    <a
      href="https://www.exin.com/"
      target="_blank"
      rel="noreferrer"><strong>EXIN</strong></a>
    certificated Scrum Master and Product Owner and live in Agile software
    development at daily work.
  </p>

  <p>
    In my spare time, I just jump out of the world of Object-orientation and do
    some lightweight coding in open-source world with both
    <strong>React</strong>
    and
    <strong>Svelte</strong>.
  </p>

  <a href="/projects">
    <button class="is-secondary is-rounded is-outlined">
      Explore some of my projects
    </button>
  </a>

  <div class="stack">
    <div class="my-1">Experimental Builds With</div>
    <a href="https://svelte.dev/" rel="noreferer noopener" target="_blank">
      <span class="iconify" data-icon="teenyicons:svelte-outline" data-inline="false" />
    </a>
    <a href="https://www.markdownguide.org/" rel="noreferer noopener" target="_blank">
      <span class="iconify" data-icon="bi:markdown" data-inline="false" />
    </a>
  </div>
</div>

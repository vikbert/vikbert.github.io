<svelte:head>
  <title>About</title>
</svelte:head>

<div class="container centered-xy">
  <img src="me.jpg" alt="about me">
  <h2>About Me</h2>
  <p>
    Hi, I'm a software engineer from Germany. I do a fullstack
    job at Schwarz Gruppe(Berlin). Mostly I use the the <strong>Symfony</strong> framework
    for the web project and love the symfony packages and its community.
    <a target="_blank" href="https://connect.symfony.com/profile/vikbert"><strong>Here connect with me.</strong></a>
  </p>

  <p>Sometimes I code also in open source world with both <strong>React</strong> and <strong>Svelte</strong>.
    I am also interested in <strong>DDD: Domain Driven Design</strong>
    and am an absolute believer of both
    <strong>Clean code</strong> and <strong>
      <a href="http://manifesto.softwarecraftsmanship.org/">Craftsman Manifesto</a>
    </strong>.
  </p>

  <p>
    I am <a href="https://www.exin.com/" target="_blank">EXIN</a> certificated <strong>Scrum Master</strong> and <strong>Product Owner</strong> and
    live in Agile software development at work.
  </p>
</div>

<style>
  img {
    width: 100px;
    height: 100px;
    border-radius: 100px;
    display: block;
    margin: 20px;
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%)
  }
  .container {
    max-width: 65rem;
  }
</style>

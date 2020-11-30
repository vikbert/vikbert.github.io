<script>
  import classNames from 'classnames';
  export let segment;
</script>

<style>
  a {
    color: inherit;
    text-decoration: none;
    text-transform: capitalize;
    padding: 10px 5px;
    display: block;
    position: relative;
    margin-left: 1rem;
  }

  a:not(.selected) {
    opacity: 0.7;
  }

  a::before {
    content: '';
    position: absolute;
    transition: transform 0.3s ease;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: rgb(129, 127, 127);
    transform: scaleX(0);
  }

  a:hover::before,
  .selected::before {
    transform: scaleX(1);
  }

  .selected::before {
    font-weight: 500;
    background: black;
  }
</style>

<ul>
  <li>
    <a class={segment === undefined ? 'selected' : ''} href=".">About</a>
  </li>
  <li>
    <a class={segment === 'projects' ? 'selected' : ''} href="projects">Projects</a>
  </li>
  <li>
    <a
      rel="prefetch"
      class={classNames({ selected: segment === 'blog' })}
      href="blog">Blog</a>
  </li>
</ul>

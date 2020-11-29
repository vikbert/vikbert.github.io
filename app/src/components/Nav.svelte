<script>
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
    transition: transform .3s ease;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: #AAA;
    transform: scaleX(0);
  }

  a:hover::before,
  .selected::before {
    transform: scaleX(1);
  }

  .selected::before {
    background: #1b1b1b;
  }
</style>

<ul>
  <li><a class='{segment === undefined ? "selected" : ""}' href='.'>Home</a></li>
  <li><a class='{segment === "about" ? "selected" : ""}' href='about'>about</a></li>
  <li><a rel=prefetch class='{segment === "blog" ? "selected" : ""}' href='blog'>blog</a></li>
</ul>

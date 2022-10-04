<script>
    import {page} from '$app/stores';
    import { base } from '$app/paths';
</script>

<ul>
    <li>
        <a href="{base}/"
           class:selected={$page.url.pathname === '/'}
        >About
        </a>
    </li>
    <li>
        <a href="{base}/projects"
           class:selected={$page.url.pathname === '/projects'}
        >Projects
        </a>
    </li>
</ul>

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
    bottom: 6px;
    width: 100%;
    height: 3px;
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

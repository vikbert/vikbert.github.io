<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
      return { posts };
    });
  }
</script>

<script>
import HeroShape from "../../components/HeroShape.svelte";

  export let posts;
</script>

<style>
  h2,
  .post-item-footer {
    font-family: Rubik, sans-serif;
    font-weight: 700;
  }
  .post-item a {
    color: #575557;
  }
  .post-item-date {
    color: #AAA;
    text-align: left;
    text-transform: uppercase;
    margin-right: 16px;
  }

  .container {
    max-width: 65rem !important;
  }
</style>

<svelte:head>
  <title>Blog - vikbert</title>
</svelte:head>

<HeroShape color="is-info">
  <h2 class="text-centered opacity-50">Blog</h2>
</HeroShape>

<div class="container">
  {#each posts as post, index}
    {#if index}
      <hr />
    {/if}
    <div class="post-item">
      <h2>
        <a rel='prefetch' href='blog/{post.slug}'>{post.title}</a>
      </h2>
      <p>{post.excerpt}</p>
      <div class="post-item-footer">
        <span class="post-item-date">— {post.printDate}</span>
      </div>
    </div>
  {/each}
</div>

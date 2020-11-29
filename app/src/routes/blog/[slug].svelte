<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].html
    const res = await this.fetch(`blog/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let post
</script>

<style>
  header {
    text-align: center;
  }

  header h1 {
    margin-bottom: 0.7em;
  }

  header p {
    color: rgb(148, 146, 146);
    text-transform: uppercase;
    font-size: 1.2rem;
  }
  .container {
    max-width: 65rem;
  }
</style>

<svelte:head>
  <title>{post.title}</title>
<!--  Include canonical links to your blog -->
<!--   <link rel="canonical" href="" /> -->

<!-- Validate your twitter card with https://cards-dev.twitter.com/validator  -->
<!-- Update content properties with your URL   -->
<!-- 	<meta property="og:url" content=""} /> -->
	<meta property="og:type" content="article" />
	<meta property="og:title" content={post.title} />
	<meta name="Description" content={post.excerpt} />
	<meta property="og:description" content={post.excerpt} />

<!--  Link to your preferred image  -->
<!-- 	<meta property="og:image" content="" /> -->

	<meta name="twitter:card" content="summary_large_image" />

<!--  Link to your Domain  -->
<!-- 	<meta name="twitter:domain" value="" /> -->

<!--  Link to your Twitter Account  -->
<!-- 	<meta name="twitter:creator" value="" /> -->

	<meta name="twitter:title" value={post.title} />
	<meta name="twitter:description" content={post.excerpt} />

<!--  Link to your preferred image to be displayed on Twitter (832x520px) -->
<!-- 	<meta name="twitter:image" content="" /> -->

	<meta name="twitter:label1" value="Published on" />
	<meta
		name="twitter:data1"
		value={new Date(post.printDate).toLocaleDateString(undefined, {
			year: 'numeric',
			month: 'short',
			day: 'numeric'
		})} />
	<meta name="twitter:label2" value="Reading Time" />
	<meta name="twitter:data2" value={post.printReadingTime} />
</svelte:head>

<article class="container">
  <header>
    <div class="space-between">
      <a href="/blog">
        <span class="iconify" data-icon="codicon:chevron-left" data-inline="false"></span>
      </a>
      <p>{post.printDate} ~ {post.printReadingTime}</p>
    </div>
    <h1>{post.title}</h1>
  </header>
  {@html post.html}
</article>


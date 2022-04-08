<div align="center">
  <!-- Logo and title and sub-title -->
  <img src="https://vikbert.github.io/vikbert.svg" alt="logo" width="100"/>
  <h1 style="font-weight: bolder; color: black; margin-top: 0px">
    vikbert.github.io
  </h1>
  <h3 style="color: darkgrey; margin: 40px 0"> 
    <a href="https://vikbert.github.io/">➲ Live page</a>
  </h3>

  <!-- description of project -->
  <p>
    This is the personal blog, including the overview of the projects and blogs, that is hosted on <strong>github pages</strong> and built with <string>svelte</string>, <strong>sapper</strong> and <strong>markdown</strong>.
  </p>

  <!-- github icons for PR and License -->
  <p>
    <a href="#">
      <img src="https://img.shields.io/badge/License-MIT-brightgreen.svg?style=flat-square" alt="MIT License">
    </a>
  </p>
</div>

---

## ⛑ Structure

The base structure of this template is the same as Sapper's [default template](https://github.com/sveltejs/sapper-template/). These are some of the new things you'll find here:

### src/routes/blog

This is the home of your blog. The most important files in here are:

- `_posts.js`: this module contains the logic for loading and parsing your markdown posts.
- `[slug].svelte`: this is the template of your blog post page.
- `index.svelte`: this is the template of your article list page.

### src/routes/blog/posts

This is where your markdown posts live in. All `.md` files in this directory are treated as blog posts and parsed automatically by the `_posts.js` module.

- The markdown file name becomes the post slug. For example `hello-world.md` becomes `http://localhost:3000/blog/hello-world`.
- Everything between the start of the post and the `<!-- more -->` tag becomes the article's "excerpt".
- Frontmatter properties supported are `title` and `date`.


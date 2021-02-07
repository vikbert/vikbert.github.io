<script>
  export let title;
  export let info;
  export let demo;
  export let repository;
  export let icon;
  export let tags = [
    'react',
    'svelte',
    'typescript',
    'php',
    'symfony',
    'material-ui',
    'ddd',
    'webpack',
    'rollup',
  ];
</script>

<div class="card shadow-lg">
  <div class="figure">
    <img
      src="https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3298&q=80"
      alt=""
    />
  </div>
  <div class="content">
    <a href={demo} target="_blank">
      <h4>{title}</h4>
    </a>
    <div class="tags">
      <span
        class="iconify"
        data-icon="mdi:speedometer-medium"
        data-inline="false"
      />
      <span
        class="iconify"
        data-icon="teenyicons:svelte-outline"
        data-inline="false"
      />
      <span class="iconify" data-icon="logos:markdown" data-inline="false" />
      <span class="iconify" data-icon="ion:logo-sass" data-inline="false" />
    </div>
    <p class="info">{info}</p>
  </div>
  <div class="action px-2">
      <span
        class="iconify"
        data-icon="ant-design:github-filled"
        data-inline="false"
      />
      <a href={'http://github.com/' + repository} target="_blank">
        <span>{repository}</span>
      </a>
    <span class="">MIT</span>
  </div>
</div>

<!-- <a href={url} target="_blank" rel="noreferrer">
  <div class="showcase">
    <div class="showcase-icon">
      {@html icon}
    </div>
    <div class="showcase-content">
      <h4>{title}</h4>
      <span>{info}</span>
    </div>
  </div>
</a> -->
<style>
  .content {
    padding: 1rem 2rem;
  }
  .info {
    height: 75px;
    overflow: hidden;
    margin: 1rem 0;
  }
  .action {
    border-top: 1px solid #dededeaf;
    height: 50px;
    overflow: hidden;
    display: grid;
    grid-template-columns: 30px 1fr 30px;
    align-items: center;
  }
  .card .iconify {
    width: 25px;
    height: 20px;
    line-height: 20px;
    margin-right: 10px;
  }
  a {
    color: black;
    font-weight: 500;
  }
  /* a {
    color: black;
    flex: 1 1 300px;
    flex: 1 1 500px;
    margin-bottom: 1.6rem;
    border: 1px solid #ffffff;
  }
  a:hover {
    border: 1px solid #dedede;
    border-radius: 8px;
  } */
</style>

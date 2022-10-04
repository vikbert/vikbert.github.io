<script>
  import Icon from '../Icon.svelte';
  import { base } from '$app/paths';
  export let title;
  export let info;
  export let demo;
  export let repository;
  export let screenshot = "";
  export let tags = ['react', 'svelte', 'vue'];
</script>

<div class="card shadow-lg">

  <div class="content">
    <a href={demo} target="_blank">
      <div class="figure" >
        <img src={base + screenshot} alt="">
      </div>
    </a>
    <div class="headline">
      <a href={demo} target="_blank">
        <h4>{title}</h4>
      </a>
    </div>
    <div class="tags py-1">
      <span>Tags:</span>
      {#each tags as tag}
        <Icon name={tag} />
      {/each}
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
    <span class="licence opacity-75">MIT</span>
  </div>
</div>

<style>
  .figure {
    height: 100px;
    overflow: hidden;
    border-bottom: 1px solid #817f7f;
    margin-bottom: 10px;
    opacity: 15%;
  }
  .figure:hover {
    opacity: 100%;
  }
  .content {
    padding: 1rem 2rem;

  }
  .info {
    height: 75px;
    overflow: hidden;
    margin: 1rem 0;
  }
  .tags {
    display: flex;
    align-items: center;
    height: 46px;
    overflow: hidden;
    opacity: 50%;
  }
  .tags span {
    padding-right: 8px;
  }
  .action {
    border-top: 1px solid #dededeaf;
    height: 50px;
    overflow: hidden;
    display: grid;
    grid-template-columns: 30px 1fr 30px;
    align-items: center;
  }
  .licence {
    font-size: 13px;
  }
  a {
    color: black;
    font-weight: 500;
  }
  .headline {
    height: 43px;
    overflow: hidden;
  }
  h4:hover {
    opacity: 50%;
  }
  .card {
    box-shadow: 1px 2px 15px 2px rgba(136,126,126,0.36);
-webkit-box-shadow: 1px 2px 15px 2px rgba(136,126,126,0.36);
-moz-box-shadow: 1px 2px 15px 2px rgba(136,126,126,0.36);
  }
</style>

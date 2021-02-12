<script>
import Icon from "../Icon.svelte";

  export let title;
  export let info;
  export let demo;
  export let repository;
  export let icon;
  export let tags = [
    'react',
    'svelte',
    'vue',
  ];
</script>

<div class="card shadow-lg">
  <div class="content">
    <div class="headline">
      <a href={demo} target="_blank">
        <h4>{title}</h4>
      </a>
    </div>
    <div class="tags py-1">
      <span>Tags:</span>
      {#each tags as tag}
         <Icon name={tag}/>
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

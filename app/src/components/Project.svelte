<script>
  export let title;
  export let info;
  export let url;
  export let icon;
</script>

<style>
  h4 {
    margin-bottom: 0.8rem;
  }
  a {
    color: black;
    flex: 1 1 300px; /* 3 columsn */
    flex: 1 1 500px; /* 2 columsn */
    margin-bottom: 1.6rem;
    border: 1px solid #ffffff;
  }
  a:hover {
    border: 1px solid #dedede;
    border-radius: 8px;
  }
</style>

<a href={url} target="_blank">
  <div class="showcase">
    <div class="showcase-icon">
      {@html icon}
    </div>
    <div class="showcase-content">
      <h4>{title}</h4>
      <span>{info}</span>
    </div>
  </div>
</a>

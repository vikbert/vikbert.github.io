<script>
  export let title;
  export let info;
  export let url;
</script>

<a href={url} target="_blank">
  <div class="showcase">
    <div class="showcase-icon">
      <img src="presentation.svg" alt="image" width="40">
    </div>
    <div class="showcase-content">
    <h4>{title}</h4>
      <span>{info}</span>
    </div>
  </div>
</a>

<style>
  h4 {
    margin-bottom: .8rem;
  }
  a {
    color:black;
    flex: 1 1 300px; /* 3 columsn */
    flex: 1 1 500px; /* 2 columsn */
    margin-bottom: 1.6rem;
  }
</style>

<script>
  export let title;
  export let info;
  export let url;
</script>

<a href={url} target="_blank">
  <div class="showcase card">
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
  }
</style>

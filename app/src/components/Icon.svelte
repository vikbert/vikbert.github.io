<script>
  export let name = 'default';

  let iconHtml = '';

  $: {
    switch (name) {
      case 'react':
        iconHtml =
          '<span class="iconify" data-icon="ri:reactjs-line" data-inline="false"></span>';
        break;
      case 'svelte':
        iconHtml =
          '<span class="iconify svelte" data-icon="teenyicons:svelte-outline" data-inline="false"></span>';
        break;
      case 'vue':
        iconHtml =
          '<span class="iconify" data-icon="la:vuejs" data-inline="false"></span>';
        break;
      case 'typescript':
        iconHtml =
          '<span class="iconify" data-icon="mdi:language-typescript" data-inline="false"></span>';
        break;
      case 'php':
        iconHtml =
          '<span class="iconify" data-icon="simple-icons:php" data-inline="false"></span>';
        break;
      case 'symfony':
        iconHtml =
          '<span class="iconify" data-icon="la:symfony" data-inline="false"></span>';
        break;
      case 'macos':
        iconHtml =
          '<span class="iconify" data-icon="wpf:mac-os" data-inline="false"></span>';
        break;
      case 'cli':
        iconHtml =
          '<span class="iconify" data-icon="simple-icons:gnubash" data-inline="false"></span>';
        break;
      case 'sass':
        iconHtml =
          '<span class="iconify" data-icon="cib:sass-alt" data-inline="false"></span>';
        break;
      case 'material-ui':
        iconHtml =
          '<span class="iconify" data-icon="mdi:material-ui" data-inline="false"></span>';
        break;
      case 'webpack':
        iconHtml =
          '<span class="iconify" data-icon="file-icons:webpack-old" data-inline="false"></span>';
        break;
      case 'webpack':
        iconHtml =
          '<span class="iconify" data-icon="mdi:material-ui" data-inline="false"></span>';
        break;
      case 'rollup':
        iconHtml =
          '<span class="iconify" data-icon="mdi:rollupjs" data-inline="false"></span>';
        break;
      case 'default':
        iconHtml =
          '<span class="iconify" data-icon="ant-design:code-sandbox-outlined" data-inline="false"></span>';
        break;
    }
  }
</script>

{@html iconHtml}

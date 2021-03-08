<script>
  export let name = 'default';
  export let iconWidth = 60;

  let iconHtml = '';

  $: {
    switch (name) {
      case 'react':
        iconHtml =
          '<span class="iconify" data-icon="ri:reactjs-line" data-inline="false" '+'width=' + iconWidth + '></span>';
        break;
      case 'hook':
        iconHtml =
          '<span= class="iconify" data-icon="mdi:webhook" data-inline="false" '+'width=' + iconWidth + '></span>';
        break;
      case 'redux':
        iconHtml =
          '<span class="iconify" data-icon="cib:redux" data-inline="false" '+'width=' + iconWidth + '></span>';
        break;
      case 'svelte':
        iconHtml =
          '<span class="iconify svelte" data-icon="teenyicons:svelte-outline" data-inline="false" "></span>';
        break;
      case 'vue':
        iconHtml =
          '<span class="iconify" data-icon="la:vuejs" data-inline="false" '+'width=' + iconWidth + '></span>';
        break;
      case 'typescript':
        iconHtml =
          '<span class="iconify" data-icon="mdi:language-typescript" data-inline="false" '+'width=' + iconWidth + '></span>';
        break;
      case 'php':
        iconHtml =
          '<span class="iconify" data-icon="simple-icons:php" data-inline="false" '+'width=' + iconWidth + '></span>';
        break;
      case 'node':
        iconHtml =
          '<span class="iconify" data-icon="bx:bxl-nodejs" data-inline="false" '+'width=' + iconWidth + '></span>';
        break;
      case 'weui':
        iconHtml =
          '<span class="iconify" data-icon="mdi:wechat" data-inline="false" '+'width=' + iconWidth + '></span>';
        break;
      case 'doc':
        iconHtml =
          '<span class="iconify" data-icon="teenyicons:doc-outline" data-inline="false" '+'width=' + iconWidth + '></span>';
        break;
      case 'symfony':
        iconHtml =
          '<span class="iconify" data-icon="mdi:symfony" data-inline="false" '+'width=' + iconWidth + '></span>';
        break;
      case 'firebase':
        iconHtml =
          '<span class="iconify" data-icon="bx:bxl-firebase" data-inline="false" '+'width=' + iconWidth + '></span>';
        break;
      case 'macos':
        iconHtml =
          '<span class="iconify" data-icon="wpf:mac-os" data-inline="false" '+'width=' + iconWidth + '></span>';
        break;
      case 'cli':
        iconHtml =
          '<span class="iconify" data-icon="simple-icons:gnubash" data-inline="false" '+'width=' + iconWidth + '></span>';
        break;
      case 'sass':
        iconHtml =
          '<span class="iconify" data-icon="cib:sass-alt" data-inline="false" '+'width=' + iconWidth + '></span>';
        break;
      case 'html':
        iconHtml =
          '<span class="iconify" data-icon="ant-design:html5-outlined" data-inline="false" '+'width=' + iconWidth + '></span>';
        break;
      case 'material-ui':
        iconHtml =
          '<span class="iconify" data-icon="mdi:material-ui" data-inline="false" '+'width=' + iconWidth + '></span>';
        break;
      case 'webpack':
        iconHtml =
          '<span class="iconify" data-icon="file-icons:webpack-old" data-inline="false" '+'width=' + iconWidth + '></span>';
        break;
      case 'chrome':
        iconHtml =
          '<span class="iconify" data-icon="ant-design:chrome-outlined" data-inline="false" '+'width=' + iconWidth + '></span>';
        break;
      case 'markdown':
        iconHtml =
          '<span class="iconify" data-icon="la:markdown" data-inline="false" '+'width=' + iconWidth + '></span>';
        break;
      case 'ios':
        iconHtml =
          '<span class="iconify" data-icon="logos:ios" data-inline="false" '+'width=' + iconWidth + '></span>';
        break;
      case 'webpack':
        iconHtml =
          '<span class="iconify" data-icon="mdi:material-ui" data-inline="false" '+'width=' + iconWidth + '></span>';
        break;
      case 'pixss':
        iconHtml = '<img class="icon pixss" src="pixss.png" width="23" />';
        break;
      case 'rollup':
        iconHtml =
          '<span class="iconify" data-icon="mdi:rollupjs" data-inline="false" '+'width=' + iconWidth + '></span>';
        break;
      case 'devops':
        iconHtml =
          '<span class="iconify" data-icon="simple-icons:azuredevops" data-inline="false" '+'width=' + iconWidth + '></span>';
        break;
      case 'github':
        iconHtml =
          '<span class="iconify" data-icon="la:github" data-inline="false" '+'width=' + iconWidth + '></span>';
        break;
      case 'default':
        iconHtml =
          '<span class="iconify" data-icon="ant-design:code-sandbox-outlined" data-inline="false" '+'width=' + iconWidth + '></span>';
        break;
    }
  }
</script>

{@html iconHtml}

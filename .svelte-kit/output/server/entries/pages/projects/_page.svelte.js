import { c as create_ssr_component, d as add_attribute, e as escape, h as each, v as validate_component } from "../../../chunks/index.js";
import { H as HeroShape } from "../../../chunks/HeroShape.js";
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name = "default" } = $$props;
  let { iconWidth = 60 } = $$props;
  let iconHtml = "";
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.iconWidth === void 0 && $$bindings.iconWidth && iconWidth !== void 0)
    $$bindings.iconWidth(iconWidth);
  {
    {
      switch (name) {
        case "react":
          iconHtml = '<span class="iconify" data-icon="ri:reactjs-line" data-inline="false"  width=' + iconWidth + "></span>";
          break;
        case "hook":
          iconHtml = '<span= class="iconify" data-icon="mdi:webhook" data-inline="false"  width=' + iconWidth + "></span>";
          break;
        case "redux":
          iconHtml = '<span class="iconify" data-icon="cib:redux" data-inline="false"  width=' + iconWidth + "></span>";
          break;
        case "svelte":
          iconHtml = '<span class="iconify svelte" data-icon="teenyicons:svelte-outline" data-inline="false" ' + iconWidth + "></span>";
          break;
        case "vue":
          iconHtml = '<span class="iconify" data-icon="la:vuejs" data-inline="false"  width=' + iconWidth + "></span>";
          break;
        case "typescript":
          iconHtml = '<span class="iconify" data-icon="mdi:language-typescript" data-inline="false"  width=' + iconWidth + "></span>";
          break;
        case "php":
          iconHtml = '<span class="iconify" data-icon="simple-icons:php" data-inline="false"  width=' + iconWidth + "></span>";
          break;
        case "node":
          iconHtml = '<span class="iconify" data-icon="bx:bxl-nodejs" data-inline="false"  width=' + iconWidth + "></span>";
          break;
        case "weui":
          iconHtml = '<span class="iconify" data-icon="mdi:wechat" data-inline="false"  width=' + iconWidth + "></span>";
          break;
        case "doc":
          iconHtml = '<span class="iconify" data-icon="teenyicons:doc-outline" data-inline="false"  width=' + iconWidth + "></span>";
          break;
        case "symfony":
          iconHtml = '<span class="iconify" data-icon="mdi:symfony" data-inline="false"  width=' + iconWidth + "></span>";
          break;
        case "firebase":
          iconHtml = '<span class="iconify" data-icon="bx:bxl-firebase" data-inline="false"  width=' + iconWidth + "></span>";
          break;
        case "macos":
          iconHtml = '<span class="iconify" data-icon="wpf:mac-os" data-inline="false"  width=' + iconWidth + "></span>";
          break;
        case "cli":
          iconHtml = '<span class="iconify" data-icon="simple-icons:gnubash" data-inline="false"  width=' + iconWidth + "></span>";
          break;
        case "sass":
          iconHtml = '<span class="iconify" data-icon="cib:sass-alt" data-inline="false"  width=' + iconWidth + "></span>";
          break;
        case "html":
          iconHtml = '<span class="iconify" data-icon="ant-design:html5-outlined" data-inline="false"  width=' + iconWidth + "></span>";
          break;
        case "material-ui":
          iconHtml = '<span class="iconify" data-icon="mdi:material-ui" data-inline="false"  width=' + iconWidth + "></span>";
          break;
        case "webpack":
          iconHtml = '<span class="iconify" data-icon="file-icons:webpack-old" data-inline="false"  width=' + iconWidth + "></span>";
          break;
        case "chrome":
          iconHtml = '<span class="iconify" data-icon="ant-design:chrome-outlined" data-inline="false"  width=' + iconWidth + "></span>";
          break;
        case "markdown":
          iconHtml = '<span class="iconify" data-icon="la:markdown" data-inline="false"  width=' + iconWidth + "></span>";
          break;
        case "ios":
          iconHtml = '<span class="iconify" data-icon="logos:ios" data-inline="false"  width=' + iconWidth + "></span>";
          break;
        case "webpack":
          iconHtml = '<span class="iconify" data-icon="mdi:material-ui" data-inline="false"  width=' + iconWidth + "></span>";
          break;
        case "pixss":
          iconHtml = '<img class="icon pixss" src="pixss.png"  width="23" />';
          break;
        case "rollup":
          iconHtml = '<span class="iconify" data-icon="mdi:rollupjs" data-inline="false"  width=' + iconWidth + "></span>";
          break;
        case "devops":
          iconHtml = '<span class="iconify" data-icon="simple-icons:azuredevops" data-inline="false"  width=' + iconWidth + "></span>";
          break;
        case "github":
          iconHtml = '<span class="iconify" data-icon="la:github" data-inline="false"  width=' + iconWidth + "></span>";
          break;
        case "default":
          iconHtml = '<span class="iconify" data-icon="ant-design:code-sandbox-outlined" data-inline="false"  width=' + iconWidth + "></span>";
          break;
      }
    }
  }
  return `<!-- HTML_TAG_START -->${iconHtml}<!-- HTML_TAG_END -->`;
});
const Project_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".figure.svelte-1epgtn3.svelte-1epgtn3{height:100px;overflow:hidden;border-bottom:1px solid #817f7f;margin-bottom:10px;opacity:15%}.figure.svelte-1epgtn3.svelte-1epgtn3:hover{opacity:100%}.content.svelte-1epgtn3.svelte-1epgtn3{padding:1rem 2rem}.info.svelte-1epgtn3.svelte-1epgtn3{height:75px;overflow:hidden;margin:1rem 0}.tags.svelte-1epgtn3.svelte-1epgtn3{display:flex;align-items:center;height:46px;overflow:hidden;opacity:50%}.tags.svelte-1epgtn3 span.svelte-1epgtn3{padding-right:8px}.action.svelte-1epgtn3.svelte-1epgtn3{border-top:1px solid #dededeaf;height:50px;overflow:hidden;display:grid;grid-template-columns:30px 1fr 30px;align-items:center}.licence.svelte-1epgtn3.svelte-1epgtn3{font-size:13px}a.svelte-1epgtn3.svelte-1epgtn3{color:black;font-weight:500}.headline.svelte-1epgtn3.svelte-1epgtn3{height:43px;overflow:hidden}h4.svelte-1epgtn3.svelte-1epgtn3:hover{opacity:50%}.card.svelte-1epgtn3.svelte-1epgtn3{box-shadow:1px 2px 15px 2px rgba(136,126,126,0.36);-webkit-box-shadow:1px 2px 15px 2px rgba(136,126,126,0.36);-moz-box-shadow:1px 2px 15px 2px rgba(136,126,126,0.36)}",
  map: null
};
const Project = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { info } = $$props;
  let { demo } = $$props;
  let { repository } = $$props;
  let { screenshot = "https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3298&q=80" } = $$props;
  let { tags = ["react", "svelte", "vue"] } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.info === void 0 && $$bindings.info && info !== void 0)
    $$bindings.info(info);
  if ($$props.demo === void 0 && $$bindings.demo && demo !== void 0)
    $$bindings.demo(demo);
  if ($$props.repository === void 0 && $$bindings.repository && repository !== void 0)
    $$bindings.repository(repository);
  if ($$props.screenshot === void 0 && $$bindings.screenshot && screenshot !== void 0)
    $$bindings.screenshot(screenshot);
  if ($$props.tags === void 0 && $$bindings.tags && tags !== void 0)
    $$bindings.tags(tags);
  $$result.css.add(css$1);
  return `<div class="${"card shadow-lg svelte-1epgtn3"}"><div class="${"content svelte-1epgtn3"}"><a${add_attribute("href", demo, 0)} target="${"_blank"}" class="${"svelte-1epgtn3"}"><div class="${"figure svelte-1epgtn3"}"><img${add_attribute("src", screenshot, 0)} alt="${""}"></div></a>
    <div class="${"headline svelte-1epgtn3"}"><a${add_attribute("href", demo, 0)} target="${"_blank"}" class="${"svelte-1epgtn3"}"><h4 class="${"svelte-1epgtn3"}">${escape(title)}</h4></a></div>
    <div class="${"tags py-1 svelte-1epgtn3"}"><span class="${"svelte-1epgtn3"}">Tags:</span>
      ${each(tags, (tag) => {
    return `${validate_component(Icon, "Icon").$$render($$result, { name: tag }, {}, {})}`;
  })}</div>
    <p class="${"info svelte-1epgtn3"}">${escape(info)}</p></div>
  <div class="${"action px-2 svelte-1epgtn3"}"><span class="${"iconify"}" data-icon="${"ant-design:github-filled"}" data-inline="${"false"}"></span>
    <a${add_attribute("href", "http://github.com/" + repository, 0)} target="${"_blank"}" class="${"svelte-1epgtn3"}"><span>${escape(repository)}</span></a>
    <span class="${"licence opacity-75 svelte-1epgtn3"}">MIT</span></div>
</div>`;
});
const ProjectList_svelte_svelte_type_style_lang = "";
const css = {
  code: "span.orange.svelte-8kcsfw{color:rgb(238, 144, 22);font-size:30px}.container.svelte-8kcsfw{max-width:112rem !important}.items.svelte-8kcsfw{display:grid;grid-gap:1.5rem;grid-template-columns:repeat(auto-fit, minmax(350px, 1fr))}@media(max-width: 480px){.items.svelte-8kcsfw{grid-template-columns:repeat(auto-fit, minmax(250px, 1fr))}}",
  map: null
};
const ProjectList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { projects } = $$props;
  if ($$props.projects === void 0 && $$bindings.projects && projects !== void 0)
    $$bindings.projects(projects);
  $$result.css.add(css);
  return `${validate_component(HeroShape, "HeroShape").$$render($$result, { color: "is-secondary text-centered" }, {}, {
    default: () => {
      return `<h2 class="${"opacity-50"}">Some of my side projects</h2>
  <h5 class="${"opacity-75"}">Most of my <span class="${"orange svelte-8kcsfw"}">PHP</span> side projects are related to working stuffs, and are <span class="${"orange svelte-8kcsfw"}">not shared</span> here. </h5>`;
    }
  })}

<div class="${"container svelte-8kcsfw"}"><div class="${"centered-xy my-2"}"></div>
  <div class="${"items svelte-8kcsfw"}">${each(projects, (projectData) => {
    return `<div class="${"item"}">${validate_component(Project, "Project").$$render($$result, Object.assign(projectData), {}, {})}
      </div>`;
  })}</div>
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `${$$result.title = `<title>Projects - Xun Zhou</title>`, ""}`, ""}

${validate_component(ProjectList, "ProjectList").$$render($$result, { projects: Object.values(data) }, {}, {})}`;
});
export {
  Page as default
};

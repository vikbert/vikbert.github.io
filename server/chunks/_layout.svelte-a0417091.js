import { c as create_ssr_component, v as validate_component, b as add_attribute, d as subscribe } from './index-2f35863d.js';
import { p as page } from './stores-a1a27bb2.js';

const css$3 = {
  code: "a.svelte-hsi9qz{color:inherit;text-decoration:none;text-transform:capitalize;padding:10px 5px;display:block;position:relative;margin-left:1rem}a.svelte-hsi9qz:not(.selected){opacity:0.7}a.svelte-hsi9qz::before{content:'';position:absolute;transition:transform 0.3s ease;left:0;bottom:6px;width:100%;height:3px;background:rgb(129, 127, 127);transform:scaleX(0)}a.svelte-hsi9qz:hover::before,.selected.svelte-hsi9qz::before{transform:scaleX(1)}.selected.svelte-hsi9qz::before{font-weight:500;background:black}",
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  console.log($page.url.pathname);
  $$result.css.add(css$3);
  $$unsubscribe_page();
  return `<ul><li><a href="${"/"}" class="${["svelte-hsi9qz", $page.url.pathname === "/" ? "selected" : ""].join(" ").trim()}">About
        </a></li>
    <li><a href="${"projects"}" class="${["svelte-hsi9qz", $page.url.pathname === "/projects" ? "selected" : ""].join(" ").trim()}">Projects
        </a></li>
</ul>`;
});
const css$2 = {
  code: "img.svelte-1upt6ay{width:3rem;height:3rem;border-radius:3rem;display:block}@media screen and (max-width: 375px){img.svelte-1upt6ay{width:2.6rem}}",
  map: null
};
const avatarUri = "./vikbert.svg";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { segment } = $$props;
  if ($$props.segment === void 0 && $$bindings.segment && segment !== void 0)
    $$bindings.segment(segment);
  $$result.css.add(css$2);
  return `<header><nav class="${"topbar"}"><div class="${"container space-between"}"><a href="${"/"}"><img alt="${"Sapper"}"${add_attribute("src", avatarUri, 0)} width="${"30"}" class="${"svelte-1upt6ay"}"></a>
      ${validate_component(Nav, "Nav").$$render($$result, { segment }, {}, {})}</div></nav>
</header>`;
});
const css$1 = {
  code: ".footer.svelte-6v1qow.svelte-6v1qow{padding:0 0 5rem 0}.container.svelte-6v1qow.svelte-6v1qow{padding:5rem 2rem 0 2rem}.custom-shape-divider-top-1612620970.svelte-6v1qow.svelte-6v1qow{position:relative;top:0;left:0;width:100%;overflow:hidden;line-height:0}.custom-shape-divider-top-1612620970.svelte-6v1qow svg.svelte-6v1qow{position:relative;display:block;width:calc(133% + 1.3px);height:100px;transform:rotateY(180deg)}.custom-shape-divider-top-1612620970.svelte-6v1qow .shape-fill.svelte-6v1qow{fill:white}@media(min-width: 768px) and (max-width: 1023px){.custom-shape-divider-top-1612620970.svelte-6v1qow svg.svelte-6v1qow{width:calc(133% + 1.3px);height:65px}}@media(max-width: 767px){.custom-shape-divider-top-1612620970.svelte-6v1qow svg.svelte-6v1qow{width:calc(183% + 1.3px);height:48px}}",
  map: null
};
const FooterShape = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer class="${"footer svelte-6v1qow"}"><div class="${"custom-shape-divider-top-1612620970 svelte-6v1qow"}"><svg data-name="${"Layer 1"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 1200 120"}" preserveAspectRatio="${"none"}" class="${"svelte-6v1qow"}"><path d="${"M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"}" opacity="${".25"}" class="${"shape-fill svelte-6v1qow"}"></path><path d="${"M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"}" opacity="${".5"}" class="${"shape-fill svelte-6v1qow"}"></path><path d="${"M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"}" class="${"shape-fill svelte-6v1qow"}"></path></svg></div>
    <div class="${"container svelte-6v1qow"}">${slots.default ? slots.default({}) : ``}</div>
</footer>`;
});
const css = {
  code: ".repository.svelte-k6ro96 p.svelte-k6ro96{margin-bottom:0.5rem}img.pixss.svelte-k6ro96.svelte-k6ro96{width:36px;filter:invert(1)}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { githubAuthor = "" } = $$props;
  let { githubProject = "" } = $$props;
  var githubRepoPath = githubAuthor + "/" + githubProject;
  var githubRepoUri = "https://github.com/" + githubRepoPath;
  if ($$props.githubAuthor === void 0 && $$bindings.githubAuthor && githubAuthor !== void 0)
    $$bindings.githubAuthor(githubAuthor);
  if ($$props.githubProject === void 0 && $$bindings.githubProject && githubProject !== void 0)
    $$bindings.githubProject(githubProject);
  $$result.css.add(css);
  return `${validate_component(FooterShape, "FooterShape").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"space-between"}"><div class="${"repository svelte-k6ro96"}"><p class="${"svelte-k6ro96"}">Vikbert \xAE 2021</p>
			<a${add_attribute("href", githubRepoUri, 0)}><img src="${"https://img.shields.io/badge/License-MIT-brightgreen.svg?style=flat-square"}" alt="${"MIT License"}"></a>
			<a${add_attribute("href", githubRepoUri, 0)}><img${add_attribute("src", "https://img.shields.io/github/last-commit/" + githubRepoPath + "?color=orange&style=flat-square", 0)} alt="${"Last Commit"}"></a></div>
		<div class="${"techniques"}"><a href="${"https://vikbert.github.io/pixss/"}"><img src="${"https://raw.githubusercontent.com/vikbert/vikbert.github.io/master/pixss.png"}" alt="${"pixss"}" class="${"pixss svelte-k6ro96"}"></a>
			<a href="${"https://svelte.dev/"}"><img src="${"https://raw.githubusercontent.com/vikbert/vikbert.github.io/master/svelte.png"}" alt="${"svelte"}" width="${"120"}"></a></div></div>`;
    }
  })}`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { segment } = $$props;
  if ($$props.segment === void 0 && $$bindings.segment && segment !== void 0)
    $$bindings.segment(segment);
  return `<div class="${"layout"}">${validate_component(Header, "Header").$$render($$result, { segment }, {}, {})}
	<main class="${"main"}">${slots.default ? slots.default({}) : ``}</main>
	${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-a0417091.js.map

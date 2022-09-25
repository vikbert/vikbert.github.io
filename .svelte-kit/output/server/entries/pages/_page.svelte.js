import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
import { H as HeroShape } from "../../chunks/HeroShape.js";
const About_svelte_svelte_type_style_lang = "";
const css = {
  code: "img.avatar.svelte-15d2g8r.svelte-15d2g8r{width:100px;height:100px;border-radius:100px;display:block;margin:0 auto;margin-top:2rem;margin-bottom:2rem}.manifesto.svelte-15d2g8r p.svelte-15d2g8r{margin-bottom:8px}button.svelte-15d2g8r.svelte-15d2g8r{margin:20px 0 50px 0}.container.svelte-15d2g8r.svelte-15d2g8r{max-width:65rem}.stack.svelte-15d2g8r.svelte-15d2g8r{margin-top:10rem;font-size:13px;text-align:center}.stack.svelte-15d2g8r a.svelte-15d2g8r{margin:0 1rem}.iconify.svelte-15d2g8r.svelte-15d2g8r{width:38px;height:38px;color:black}",
  map: null
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"container text-centered svelte-15d2g8r"}"><img class="${"avatar svelte-15d2g8r"}" src="${"me.jpg"}" alt="${"about me"}">
  <h1>About Me</h1>

  <p>Hi, I&#39;m
    <strong>Vikbert</strong> from Berlin. This cybername comes from the names of
    my two kids:
    <strong>Vik</strong>toria &amp; Al<strong>bert</strong>.
  </p>
  <p>I work as a software engineer since 2010, after my &quot;Diplom Informatik&quot; study
    at TU Berlin. Mostly, I use the the Symfony framework
    <a target="${"_blank"}" href="${"https://connect.symfony.com/profile/vikbert"}" rel="${"noreferrer"}"><strong>(sf connect)</strong></a>
    for the web projects and love its decoupled and resuable components. I am also
    interested in &quot;Domain Driven Design&quot; and believe in both
    <strong>Clean code</strong>
    and
    <strong><a href="${"http://manifesto.softwarecraftsmanship.org/"}" rel="${"noreferrer"}">Craftsman Manifesto</a>
    </strong>.
  </p>

  <p>I am
    <a href="${"https://www.exin.com/"}" target="${"_blank"}" rel="${"noreferrer"}"><strong>EXIN</strong></a>
    certificated Scrum Master and live actively in Agile Software Development for
    daily work. In my experience, agile sofware development is about &quot;People first,
    transparency and constantly improving&quot;. For that vision, I follow the
    <a href="${"https://agilemanifesto.org/"}" target="${"_blank"}" rel="${"noreferer noopener"}"><strong>Manifesto for Agile Software Development</strong></a>.
  </p>

  <p>In my spare time, I just jump out of the world of <strong>server-side programming</strong>
    and do some reactive &amp; functional programming in open-source world with
    <strong>TypeScript</strong>, <strong>React.js</strong>,
    <strong>Svelte.js</strong>, and <strong>Firebase</strong>.
  </p>

  <div class="${"centered-xy"}"><a href="${"/projects"}"><button class="${"is-secondary is-rounded is-outlined svelte-15d2g8r"}">Explore some of my projects
      </button></a></div>

  <div class="${"manifesto svelte-15d2g8r"}"><h3 class="${"opacity-25"}">I believe in:</h3>
    <p class="${"svelte-15d2g8r"}">Not only working software, but also <strong>well-crafted software</strong></p>
    <p class="${"svelte-15d2g8r"}">Not only responding to change, but also <strong>steadily adding value</strong></p>
    <p class="${"svelte-15d2g8r"}">Not only individuals and interactions, but also <strong>a community of professionals</strong></p>
    <p class="${"svelte-15d2g8r"}">Not only customer collaboration, but also <strong>productive partnerships</strong></p></div>

  <div class="${"card my-2"}"><div class="${"medien"}"><img src="${"https://raw.githubusercontent.com/vikbert/vikbert.github.io/master/miyaszki.jpg"}" alt="${"miyazaki"}"></div>
    <div class="${"content"}">An old friend of &quot;mine&quot; and an Ode to childhood said,
       <p>&quot;In fact, most of the troubles happen when we stop trying to be kids and behave more like grown-ups.&quot;</p>
      <h6><a href="${"https://www.youtube.com/watch?v=1zi7jIZkS68&t=1240s"}" target="${"_blank"}">Hayao miyaszki</a></h6></div></div>

  <div class="${"stack svelte-15d2g8r"}"><div class="${"my-1"}">Built With</div>
    <a href="${"https://vikbert.github.io/pixss/"}" rel="${"noreferer noopener"}" target="${"_blank"}" class="${"svelte-15d2g8r"}"><img src="${"pixss.png"}" alt="${"pixss"}" width="${"32"}"></a>
    <a href="${"https://svelte.dev/"}" rel="${"noreferer noopener"}" class="${"svelte-15d2g8r"}"><span class="${"iconify svelte-15d2g8r"}" data-icon="${"teenyicons:svelte-outline"}" data-inline="${"false"}"></span></a>
    <a href="${"https://www.markdownguide.org/"}" rel="${"noreferer noopener"}" target="${"_blank"}" class="${"svelte-15d2g8r"}"><span class="${"iconify svelte-15d2g8r"}" data-icon="${"bi:markdown"}" data-inline="${"false"}"></span></a></div>
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>About - Xun Zhou</title>`, ""}`, ""}

${validate_component(HeroShape, "HeroShape").$$render($$result, { color: "is-secondary" }, {}, {
    default: () => {
      return `<div class="${"container text-centered opacity-50"}"><h5>I believe in</h5>
        <h2>Craftsman Manifesto</h2></div>`;
    }
  })}

${validate_component(About, "About").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};

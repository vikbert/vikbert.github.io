export const manifest = {
	appDir: "_app",
	assets: new Set([".DS_Store","apple-icon-precomposed.png","apple-icon.png","bg.svg","browserconfig.xml","favicon-16x16.png","favicon.ico","favicon.png","manifest.json","me.jpg","miyaszki.jpg","nutab.png","pixss.min.css","pixss.png","robots.txt","screenshot/aino.png","screenshot/amline.png","screenshot/appikon.png","screenshot/bookstore.png","screenshot/firepoll.png","screenshot/koding.png","screenshot/lifecalendar-react.png","screenshot/lifecalender-svelte.png","screenshot/masanfit.png","screenshot/maskr.png","screenshot/menu.png","screenshot/musktimer.png","screenshot/nines.png","screenshot/nutab.png","screenshot/pixss.png","screenshot/retinder.png","screenshot/sf-components.png","screenshot/speedor.png","screenshot/ssomoc.png","screenshot/todo.png","screenshot/toll.png","screenshot/wal.png","screenshot/yitab.png","svelte-logo.svg","svelte.png","vikbert.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".xml":"application/xml",".ico":"image/vnd.microsoft.icon",".json":"application/json",".jpg":"image/jpeg",".css":"text/css",".txt":"text/plain"},
	_: {
		entry: {"file":"_app/immutable/start-e1248934.js","imports":["_app/immutable/start-e1248934.js","_app/immutable/chunks/index-41deb3db.js","_app/immutable/chunks/singletons-9d545ae8.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js')
		],
		routes: [
			{
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "about",
				pattern: /^\/about\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "projects",
				pattern: /^\/projects\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

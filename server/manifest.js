const manifest = {
	appDir: "_app",
	assets: new Set([".DS_Store","apple-icon-precomposed.png","apple-icon.png","bg.svg","browserconfig.xml","favicon-16x16.png","favicon.ico","favicon.png","manifest.json","me.jpg","miyaszki.jpg","nutab.png","pixss.min.css","pixss.png","robots.txt","screenshot/aino.png","screenshot/amline.png","screenshot/appikon.png","screenshot/bookstore.png","screenshot/firepoll.png","screenshot/koding.png","screenshot/lifecalendar-react.png","screenshot/lifecalender-svelte.png","screenshot/masanfit.png","screenshot/maskr.png","screenshot/menu.png","screenshot/musktimer.png","screenshot/nines.png","screenshot/nutab.png","screenshot/pixss.png","screenshot/retinder.png","screenshot/sf-components.png","screenshot/speedor.png","screenshot/ssomoc.png","screenshot/todo.png","screenshot/toll.png","screenshot/wal.png","screenshot/yitab.png","svelte-logo.svg","svelte.png","vikbert.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".xml":"application/xml",".ico":"image/vnd.microsoft.icon",".json":"application/json",".jpg":"image/jpeg",".css":"text/css",".txt":"text/plain"},
	_: {
		entry: {"file":"_app/immutable/start-d50ffd8e.js","imports":["_app/immutable/start-d50ffd8e.js","_app/immutable/chunks/index-41deb3db.js","_app/immutable/chunks/singletons-6b22dd42.js"],"stylesheets":[]},
		nodes: [
			() => import('./chunks/0-0e9b3521.js'),
			() => import('./chunks/1-78cc3afd.js'),
			() => import('./chunks/2-81833424.js'),
			() => import('./chunks/3-67631a12.js'),
			() => import('./chunks/4-b65f8b20.js')
		],
		routes: [
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

export { manifest };
//# sourceMappingURL=manifest.js.map

import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.d0359022.js","app":"_app/immutable/entry/app.81624a57.js","imports":["_app/immutable/entry/start.d0359022.js","_app/immutable/chunks/index.3db2f420.js","_app/immutable/chunks/singletons.2a050726.js","_app/immutable/entry/app.81624a57.js","_app/immutable/chunks/index.3db2f420.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js'),
			() => import('../server/nodes/3.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/[coords]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"coords","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});

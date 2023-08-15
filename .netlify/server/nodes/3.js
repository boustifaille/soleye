import * as server from '../entries/pages/_coords_/_page.server.js';

export const index = 3;
export const component = async () => (await import('../entries/pages/_coords_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[coords]/+page.server.js";
export const imports = ["_app/immutable/nodes/3.86d88ea8.js","_app/immutable/chunks/index.3db2f420.js","_app/immutable/chunks/singletons.2a050726.js"];
export const stylesheets = ["_app/immutable/assets/3.7efc30c9.css"];
export const fonts = [];

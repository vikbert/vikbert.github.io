const dev = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === undefined;
import adapter from '@sveltejs/adapter-static';

console.log(process.env.NODE_ENV);
/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter({
            pages: 'docs',
            assets: 'docs',
            fallback: null,
        }),
        paths: {
            base: dev ? '' : '',
        },
    },
};

export default config;

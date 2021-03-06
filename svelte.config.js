/** @type {import('@sveltejs/kit').Config} */
import staticAdapter from '@sveltejs/adapter-static'

const config = {
    kit: {
        // hydrate the <div id="svelte"> element in src/app.html
        target: '#svelte',
        adapter: staticAdapter(),
    },
};

export default config;
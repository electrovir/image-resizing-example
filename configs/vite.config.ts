import {baseViteConfig} from 'virmator/dist/compiled-base-configs/base-vite';
import {defineConfig} from 'vite';

const prodConfig = {base: '/resizable-image-element/'};

export default defineConfig({
    ...baseViteConfig,
    ...(process.env.CI ? prodConfig : {}),
});

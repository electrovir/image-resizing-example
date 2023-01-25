import {baseViteConfig} from 'virmator/dist/compiled-base-configs/base-vite';
import {defineConfig} from 'vite';

const prodConfig = {base: '/image-resizing-example/'};

export default defineConfig({
    ...baseViteConfig,
    ...(process.env.CI ? prodConfig : {}),
});

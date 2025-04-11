import { defineConfig, loadEnv } from 'vite'
import Vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import Vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import vitePluginRequire from 'vite-plugin-require'
import Fonts from 'unplugin-fonts/vite'
import ESlintPlugin from 'vite-plugin-eslint'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd())
    return {
        base: env.VITE_APP_BASE_PATH,
        server: {
            port: 8080,
            hmr: {
                protocol: 'ws',
                host: 'localhost',
                port: 8080
            },
            allowedHosts: true
        },
        build: {
            assetsDir: env.VITE_APP_BASE_PATH.slice(1),
            sourcemap: env.VITE_APP_ENV === 'development',
            minify: 'terser',
            terserOptions: {
                compress: {
                    drop_console: env.VITE_APP_ENV === 'production',
                    drop_debugger: env.VITE_APP_ENV === 'production'
                }
            }
        },
        plugins: [
            Vue({
                template: {
                    transformAssetUrls
                }
            }),
            vitePluginRequire.default(),
            Vuetify(),
            Fonts({
                google: {
                    families: ['Roboto']
                }
            }),
            ESlintPlugin(),
            AutoImport({
                imports: ['vue', 'pinia'],
                dts: 'src/auto-imports.d.ts', // generates global type declarations
                dirs: ['src/stores'], // optional: auto-import store composables
                vueTemplate: true // auto-imports also work in templates
            })
        ],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            },
            extensions: ['.js', '.vue', '.ts']
        },
        test: {
            globals: true,
            environment: 'jsdom', // or 'happy-dom'
            setupFiles: './src/test/setup.ts', // optional, useful for global mocks
            include: ['src/**/*.spec.ts', 'src/**/*.test.ts']
        }
    }
})

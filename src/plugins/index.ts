/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import vuetify from './vuetify'
import store from '@/store'
import { App } from 'vue'

export function registerPlugins(app: App<Element>) {
    app.use(vuetify).use(store)
}

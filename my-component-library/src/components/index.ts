import { App } from "vue";
import * as components from "./components";

declare global {
  interface Window { custom_plugin: any; }
}

export const plugin = { 
    install(app: App<Element>) {
      for (const entry of Object.entries({ ...components})) {
        app.component(...entry)
      }
    }
}

window["custom_plugin"] = plugin;


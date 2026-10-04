import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const jsoncPlugin = () => ({
  name: 'jsonc-plugin',
  transform(code, id) {
    if (id.endsWith('.jsonc')) {
      const json = code.replace(/\/\/.*|\/\*[\s\S]*?\*\//g, '');
      return {
        code: `export default ${json};`,
        map: null
      };
    }
  }
});

export default defineConfig({
  plugins: [react(), tailwindcss(), jsoncPlugin()],
  server: {
    allowedHosts: true,
  },
});

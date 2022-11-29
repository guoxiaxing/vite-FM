import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      // 远程模块声明
      remotes: {
        remote_app: "http://localhost:3001/assets/remoteEntry.js",
        from: "vite",
        format: 'esm'
      },
      // 共享依赖声明
      shared: {
        react: {
          version: "^18.2.0",
        },
        "react-dom": {
          version: "^18.2.0",
        },
      },
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
    sourcemap:true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});

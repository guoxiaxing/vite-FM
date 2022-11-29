import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // 模块联邦配置
    federation({
      name: "remote_app",
      filename: "remoteEntry.js",
      // 导出模块声明
      exposes: {
        "./Button": "./src/components/Button.tsx",
        "./App": "./src/App.tsx",
        "./utils": "./src/utils.ts",
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
  server: { port: 3001 },
  // 打包配置
  build: {
    target: "esnext",
    minify: false,
    sourcemap: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});

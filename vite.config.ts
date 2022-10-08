import { defineConfig } from "vite";
import path from "path";
import pkg from "./package.json";
import vue from "@vitejs/plugin-vue";
//按需导入Element-plus UI组件
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

/** 当前执行node命令时文件夹的地址（工作目录） */
const root: string = process.cwd();

/** 配置路径查找 */
function _resolve(dir: string) {
  return path.resolve(__dirname, dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": _resolve("src")
    },
    extenstions: [".js", ".ts", ".jsx", ".tsx", ".json"]
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  build: {
    rollupOptions: {
      output: {
        // eslint-disable-next-line consistent-return
        manualChunks(id) {
          if (id.includes("element-plus/theme-chalk/")) {
            return "element-plus";
          }
        }
      }
    }
  },
  esbuild: {
    drop: ["console", "debugger"]
  }
});

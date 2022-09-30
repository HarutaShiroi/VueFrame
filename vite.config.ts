import { defineConfig } from "vite";
import { resolve } from "path";
import pkg from "./package.json";
import vue from "@vitejs/plugin-vue";

/** 当前执行node命令时文件夹的地址（工作目录） */
const root: string = process.cwd();

/** 配置路径查找 */
const pathResolve = (dir: string): string => {
  return resolve(__dirname, ".", dir);
};

/** 设置路径别名 */
const alias: Record<string, string> = {
  "/@": pathResolve("src"),
  "@build": pathResolve("build")
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  esbuild: {
    drop: ["console", "debugger"]
  }
});

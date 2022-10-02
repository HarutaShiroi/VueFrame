import { RouteConfigsTable } from "/@/vite-env";

const errorRouter: RouteConfigsTable = {
  path: "/error",
  redirect: "/error/403",
  meta: {
    title: "错误页面",
    rank: 9
  }
};

export default errorRouter;

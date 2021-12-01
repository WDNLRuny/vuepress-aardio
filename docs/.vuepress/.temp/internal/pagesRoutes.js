import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","介绍",["/index.html","/README.md"]],
  ["v-5e732550","/base/dataType.html","数据类型",["/base/dataType","/base/dataType.md"]],
  ["v-2f204654","/base/example.html","基础应用",["/base/example","/base/example.md"]],
  ["v-59ce4e37","/base/grammar.html","基本语法",["/base/grammar","/base/grammar.md"]],
  ["v-2edbdd4c","/base/installation.html","安装",["/base/installation","/base/installation.md"]],
  ["v-0a5d2850","/base/variable.html","变量、常量",["/base/variable","/base/variable.md"]],
  ["v-3706649a","/404.html","",["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)

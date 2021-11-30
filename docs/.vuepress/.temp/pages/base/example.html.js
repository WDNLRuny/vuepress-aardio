export const data = {
  "key": "v-2f204654",
  "path": "/base/example.html",
  "title": "基础应用",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "创建一个 Hello World 程序",
      "slug": "创建一个-hello-world-程序",
      "children": []
    },
    {
      "level": 2,
      "title": "编译 & 执行",
      "slug": "编译-执行",
      "children": []
    }
  ],
  "filePathRelative": "base/example.md",
  "git": {
    "updatedTime": null,
    "contributors": []
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}

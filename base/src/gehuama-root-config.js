import { registerApplication, start } from "single-spa";
// 通过single-spa 注册的路径
registerApplication({
  name: "@single-spa/welcome", // 名称 可以随便命名
  app: () => // 当路径匹配到的时候 执行这个方法
    System.import( // 加载了一个远程模块 ，这个模块会暴露三个钩子 bootstrap mount unmount
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: location=>location.pathname === "/", // 当路径为 “/” 加载
});
registerApplication({
  name: "@gehuama/vue-app", // 名称 可以随便命名
  app: () => // 当路径匹配到的时候 执行这个方法
    System.import( // 加载了一个远程模块 ，这个模块会暴露三个钩子 bootstrap mount unmount
      "@gehuama/vue-app"
    ),
  activeWhen: ["/vue"], // 以 “/vue”开头 就能匹配到
  customProps: {a:1},
});
registerApplication({
  name: "@gehuama/react", // 名称 可以随便命名
  app: () => // 当路径匹配到的时候 执行这个方法
    System.import( // 加载了一个远程模块 ，这个模块会暴露三个钩子 bootstrap mount unmount
      "@gehuama/react"
    ),
  activeWhen: ["/react"], // 以 “/vue”开头 就能匹配到
  customProps: {a:1},
});
// 启动
start({
  urlRerouteOnly: true,
});

// registerApplication start
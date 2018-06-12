https://www.cnblogs.com/zhangbob/p/7421527.html

https://github.com/sorrycc/blog/issues/62
TODO
Step 5. 添加界面，让用户列表展现出来 


https://umijs.org/docs/en/introduction.html
umiJS简介



├── dist/                          // 构建产物目录
└── src/                           // 源码目录，可选，把里面的内容直接移到外面即可
    ├── assets                     // 静态资源
    ├── layouts/
    │   └── index.js               // 全局布局
    ├── pages/                     // 页面目录，里面的文件即路由
        ├── .umi/                  // dev 临时目录，需添加到 .gitignore
        ├── .umi-production/       // build 临时目录，会自动删除
        ├── document.ejs           // HTML 模板
        ├── ErrorPage.js                 // 404 页面
        ├── page1.js               // 页面 1，任意命名
        └── page2.js               // 页面 2，任意命名
    ├── utils/ 
        └── request.js
    ├── global.css                 // 约定的全局样式文件，自动引入，也可以用 global.less
    ├── _routes.json               // 路由配置，和文件路由二选一
├── test/                          // 测试用例放这里
├── .umirc.js                      // umi 配置
├── .webpackrc                     // webpack 配置
└── package.json

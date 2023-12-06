import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/jll-sdk-docs',
  title: "SDK文档",
  lastUpdated: true,
  description: "SDK文档使用介绍",
  // head: [['link', { rel: 'icon', href: '/jll-sdk-docs/images/favicon.ico' }]],
  themeConfig: {
    lastUpdatedText: '最近更新时间',
    search: {
      provider: 'local'
    },
    // logo: '/images/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: 'API', link: '/global' },
      { text: 'CLI脚手架', link: '/cli' }
    ],

    sidebar: [
      {
        text: '开始',
        items: [
          { text: '简介', link: '/introduction' },
          { text: '环境', link: '/env' },
          { text: '初始化', link: '/init' },
          { text: '沙盒环境获取角色列表', link: '/script-role-list' },
          { text: '全局自定义变量', link: '/global' },
          { text: '角色自定义变量', link: '/role' },
          { text: '消息相关', link: '/message' },
          { text: '辅助方法', link: '/other' },
          { text: '数据清除', link: '/clear' },
          // { text: 'cli脚手架', link: '/cli' },
          // { text: 'Markdown Examples', link: '/markdown-examples' },
          // { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/95y/jll-sdk-docs' }
    ]
  }
})





import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Tricky-Triple-ModPacks",
  description: "A Minecraft ModPacks for Fabric 1.21.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/t2.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Start', link: '/start/' },
      { text: 'Doc', link: '/doc/' },
      { text: 'Server', link: '/server/' },
      { text: 'Modrinth', link: 'https://modrinth.com/modpack/tricky-triple' }
    ],

    sidebar: [
      {
        text: 'Start',
        items: [
          { text: 'Home', link: '/start/' },
          { text: '', link: '/start/' }
        ]
      },
      {
        text: 'Doc',
        items: [
          { text: 'Home', link: '/doc/' },
          { text: '', link: '/doc/' }
        ]
      },
      {
        text: 'Server',
        items: [
          { text: 'Home', link: '/server/' },
          { text: '', link: '/server/' }
        ]
      },
      {
        text: 'Update',
        items: [
          { text: 'Home', link: '/update/' },
          { text: '', link: '/update/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/is52hertz/Tricky-Triple' }
    ]
  },
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh_cn'
    },
    en: {
      label: 'English',
      lang: 'en', // 可选，将作为 `lang` 属性添加到 `html` 标签中
      link: '/en/' // 默认 /fr/ -- 显示在导航栏翻译菜单上，可以是外部的

      // 其余 locale 特定属性...
    }
  }
})

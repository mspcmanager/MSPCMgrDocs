import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  cleanUrls: true,
  lang: 'en-US',
  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      title: "Microsoft PC Manager Docs",
      description: "Safeguard your PC in a quiet and reliable way",
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: '/assets/logo.png',
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Official Website', link: 'https://pcmanager-en.microsoft.com/' },
          {
            text: 'Contacts',
            items: [
              { text: 'Discord', link: 'https://discord.com/invite/FTDTddsPgd' },
              { text: 'More', link: 'https://forms.office.com/r/EPcrKfUbjK' }
            ]
          }
        ],
    
        sidebar: [
          {
            text: 'General',
            items: [
              { text: 'Is this software developed by Microsoft?', link: '/general/is-this-software-developed-by-microsoft' }
            ]
          }
        ],
    
        socialLinks: [
          { icon: 'github', link: 'https://github.com/mspcmanager/MSPCMgrDocs' }
        ]
      }
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN', // optional, will be added  as `lang` attribute on `html` tag
      link: '/zh/',
      title: "微软电脑管家文档",
      description: "微软官方出品优化软件",
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: '/assets/logo.png',
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '官方网站', link: 'https://pcmanager.microsoft.com/' },
          {
            text: '联系方式',
            items: [
              { text: '微信公众号', link: 'https://pcmanager-en.microsoft.com/assets/th.png' },
              { text: '微博', link: 'https://weibo.com/mspcmanager' },
              { text: '更多', link: 'https://forms.office.com/pages/responsepage.aspx?id=v4j5cvGGr0GRqy180BHbR7Jc7yMooGtIh8-T51_PVotUNkZSWVJSQVo4SFZVUUtDSDVHRjA4MTFMWi4u'}
            ]
          }
        ],
    
        sidebar: [
          {
            text: '全局性问题',
            items: [
              { text: '这是微软官方开发的软件吗？', link: '/zh/general/is-this-software-developed-by-microsoft' }
            ]
          }
        ],
    
        socialLinks: [
          { icon: 'github', link: 'https://github.com/mspcmanager/MSPCMgrDocs' }
        ]
      }
    },
  }
})

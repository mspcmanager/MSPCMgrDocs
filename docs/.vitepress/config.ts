import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  cleanUrls: true,
  lang: 'en-US',
  head: [
    // export logo
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        href: 'https://s2.loli.net/2023/05/03/aO1r8lSRBK47yoj.png'
      }
    ]
  ],
  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      title: "Microsoft PC Manager",
      titleTemplate: "Microsoft PC Manager Docs",
      description: "Safeguard your PC in a quiet and reliable way",
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: 'https://s2.loli.net/2023/05/03/aO1r8lSRBK47yoj.png',
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Official Website', link: 'https://pcmanager-en.microsoft.com/' },
          {
            text: 'Contacts',
            items: [
              { text: 'Discord', link: 'https://discord.com/invite/FTDTddsPgd' },
              { text: 'More', link: 'https://forms.office.com/r/EPcrKfUbjK' }
            ]
          },
          {
            text: 'Legal',
            items: [
              { text: 'Microsoft Software License Terms (MS-SLT)', link: '/legal/ms-slt' },
              { text: 'Privacy', link: '/legal/privacy' }
            ]
          }
        ],
    
        sidebar: [
          {
            text: 'General',
            items: [
              { text: 'Is this software developed by Microsoft?', link: '/general/is-this-software-developed-by-microsoft' },
              { text: 'Difference between versions', link: '/general/difference-between-versions' }
            ]
          },
          {
            text: 'Legal',
            items: [
              { text: 'Microsoft Software License Terms (MS-SLT)', link: '/legal/ms-slt' },
              { text: 'Privacy', link: '/legal/privacy' }
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
        logo: 'https://s2.loli.net/2023/05/03/aO1r8lSRBK47yoj.png',
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
          },
          {
            text: '法律',
            items: [
              { text: 'Microsoft 软件许可条款 (MS-SLT)', link: '/zh/legal/ms-slt' },
              { text: '隐私', link: '/zh/legal/privacy' }
            ]
          }
        ],
    
        sidebar: [
          {
            text: '全局性问题',
            items: [
              { text: '这是微软官方开发的软件吗？', link: '/zh/general/is-this-software-developed-by-microsoft' },
              { text: '版本差异', link: '/zh/general/difference-between-versions' }
            ]
          },
          {
            text: '法律',
            items: [
              { text: 'Microsoft 软件许可条款 (MS-SLT)', link: '/zh/legal/ms-slt' },
              { text: '隐私', link: '/zh/legal/privacy' }
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

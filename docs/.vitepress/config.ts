import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  cleanUrls: true,
  lastUpdated: true,
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
          },
          { text: 'News', link: '/news' }
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
          { icon: 'github', link: 'https://github.com/mspcmanager/MSPCMgrDocs' },
          { icon: 'discord', link: 'https://discord.com/invite/FTDTddsPgd' },
          { icon: 'twitter', link: 'https://twitter.com/MSPCMgrNews' }
        ]
      }
    },
    'zh-hans': {
      label: '简体中文',
      lang: 'zh-Hans', // optional, will be added  as `lang` attribute on `html` tag
      link: '/zh-hans/',
      title: "微软电脑管家文档",
      description: "微软官方出品优化软件",
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: 'https://s2.loli.net/2023/05/03/aO1r8lSRBK47yoj.png',
        outlineTitle: '在此页中',
        returnToTopLabel: '返回页首',
        langMenuLabel: '切换语言',
        nav: [
          { text: '首页', link: '/zh-hans/' },
          { text: '官方网站', link: 'https://pcmanager.microsoft.com/' },
          {
            text: '联系方式',
            items: [
              { text: '微信公众号', link: 'https://pcmanager-en.microsoft.com/assets/th.png' },
              { text: '微博', link: 'https://weibo.com/mspcmanager' },
              { text: '更多', link: 'https://forms.office.com/pages/responsepage.aspx?id=v4j5cvGGr0GRqy180BHbR7Jc7yMooGtIh8-T51_PVotUNkZSWVJSQVo4SFZVUUtDSDVHRjA4MTFMWi4u' }
            ]
          },
          {
            text: '法律',
            items: [
              { text: 'Microsoft 软件许可条款 (MS-SLT)', link: '/zh-hans/legal/ms-slt' },
              { text: '隐私', link: '/zh-hans/legal/privacy' }
            ]
          },
          { text: '新闻', link: '/zh-hans/news' }
        ],

        sidebar: [
          {
            text: '全局性问题',
            items: [
              { text: '这是微软官方开发的软件吗？', link: '/zh-hans/general/is-this-software-developed-by-microsoft' },
              { text: '版本差异', link: '/zh-hans/general/difference-between-versions' }
            ]
          },
          {
            text: '法律',
            items: [
              { text: 'Microsoft 软件许可条款 (MS-SLT)', link: '/zh-hans/legal/ms-slt' },
              { text: '隐私', link: '/zh-hans/legal/privacy' }
            ]
          }
        ],

        socialLinks: [
          { icon: 'github', link: 'https://github.com/mspcmanager/MSPCMgrDocs' }
        ]
      }
    },
    'zh-hant': {
      label: '繁體中文',
      lang: 'zh-Hant', // optional, will be added  as `lang` attribute on `html` tag
      link: '/zh-hant/',
      title: "Microsoft 電腦管家文檔",
      description: "Microsoft 官方出品最佳化軟體",
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: 'https://s2.loli.net/2023/05/03/aO1r8lSRBK47yoj.png',
        outlineTitle: '在此頁中',
        returnToTopLabel: '回到頁首',
        langMenuLabel: '切換語言',
        nav: [
          { text: '首頁', link: '/zh-hant/' },
          { text: '官網', link: 'https://pcmanager-en.microsoft.com/' },
          {
            text: '联系方式',
            items: [
              { text: 'Discord', link: 'https://discord.com/invite/FTDTddsPgd' },
              { text: '更多', link: 'https://forms.office.com/r/EPcrKfUbjK' }
            ]
          },
          {
            text: '法律',
            items: [
              { text: 'Microsoft 軟體授權條款 (MS-SLT)', link: '/zh-hant/legal/ms-slt' },
              { text: '隱私權', link: '/zh-hant/legal/privacy' }
            ]
          },
          { text: '新聞', link: '/zh-hans/news' }
        ],

        sidebar: [
          {
            text: '全局性問題',
            items: [
              { text: '這是 Microsoft 官方開發的軟體嗎？', link: '/zh-hant/general/is-this-software-developed-by-microsoft' },
              { text: '版本差異', link: '/zh-hant/general/difference-between-versions' }
            ]
          },
          {
            text: '法律',
            items: [
              { text: 'Microsoft 軟體授權條款 (MS-SLT)', link: '/zh-hant/legal/ms-slt' },
              { text: '隱私權', link: '/zh-hant/legal/privacy' }
            ]
          }
        ],

        socialLinks: [
          { icon: 'github', link: 'https://github.com/mspcmanager/MSPCMgrDocs' },
          { icon: 'discord', link: 'https://discord.com/invite/FTDTddsPgd' },
          { icon: 'twitter', link: 'https://twitter.com/MSPCMgrNews' }
        ],
      }
    },
  },
})

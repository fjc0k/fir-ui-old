module.exports = {
  base: '/fir-ui/',  
  title: 'fir-ui',
  description: 'fir-ui 文档',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  themeConfig: {
    repo: 'fjc0k/fir-ui',
    editLinks: true,
    docsDir: 'docs',
    nav: [
      {
        text: '开发指南',
        link: '/guide/',
      },
      {
        text: '内置组件',
        link: '/components/'
      },
      {
        text: '社区优选组件',
        link: '/3rd-components/'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: '开发指南',
          collapsable: false,
          children: [
            '',
            'install',
            'getting-started'            
          ]
        },
        {
          title: '开发指南',
          collapsable: false,
          children: [
            '',
            'install',
            'getting-started'            
          ]
        }
      ],
      '/components/': [
        {
          title: '',
          collapsable: false,
          children: [
            ''       
          ]
        },
        {
          title: '布局类',
          collapsable: false,
          children: [
            'button',
            'icon'            
          ]
        }
      ]
    }
  },
  chainWebpack(config) {
    config.resolve.alias
      .set('vue', 'vue/dist/vue.common.js')
  }
}
class MenuItem {
  name: string
  label: string
  icon: string
  color: string
  route: boolean
  disabled: boolean
  description: string
  method: string
}

class MenuSection {
  name: string
  label: string
  icon: string
  color: string
  description: string
  opened: boolean
  items: Array<MenuItem>
}

const MENU: Array<MenuSection> = [
  {
    icon: 'circle',
    name: 'Kamen Rider OS',
    label: '骑士系统',
    color: 'primary',
    description: '假面骑士系统',
    opened: false,
    items: [
      {
        name: 'Dialpad',
        label: '拨号盘',
        icon: 'dialpad',
        color: 'primary',
        route: false,
        disabled: false,
        description: '',
        method: 'openDial'
      }
    ]
  }, {
    icon: 'circle',
    name: 'Article',
    label: '随记心得',
    color: 'default',
    description: '生活杂感，编程心得及有趣的东西',
    opened: false,
    items: [
      {
        name: 'Recently',
        label: '近期',
        icon: 'update',
        color: 'warn',
        route: true,
        disabled: true,
        description: '2019-11-30',
        method: ''
      }, {
        name: 'Menu',
        label: '目录',
        icon: 'menu_book',
        color: 'warn',
        route: true,
        disabled: true,
        description: '',
        method: ''
      }, {
        name: 'Theme',
        label: '专辑',
        icon: 'bookmarks',
        color: 'warn',
        route: true,
        disabled: true,
        description: 'NGX-Markdown',
        method: ''
      }, {
        name: 'Special',
        label: '特辑',
        icon: 'star',
        color: 'warn',
        route: true,
        disabled: true,
        description: 'About HK',
        method: ''
      }
    ]
  }, {
    icon: 'circle',
    name: 'Web Components',
    label: '前端组件',
    color: 'default',
    description: '基于Angular的一些个人组件',
    opened: false,
    items: [
      {
        name: 'Timeline',
        label: '时光轴',
        icon: 'schedule',
        color: 'default',
        route: true,
        disabled: true,
        description: 'Component Timeline',
        method: ''
      }, {
        name: 'Math',
        label: '数学',
        icon: 'functions',
        color: 'default',
        route: true,
        disabled: false,
        description: 'Component Math',
        method: '/math'
      }
    ]
  }, {
    icon: 'circle',
    name: 'User Center',
    label: '个人中心',
    color: 'default',
    description: '管理自己的账户和资料',
    opened: false,
    items: [
      {
        name: 'Account',
        label: '账户',
        icon: 'security',
        color: 'primary',
        route: true,
        disabled: false,
        description: 'Account Security',
        method: '/login'
      }, {
        name: 'Information',
        label: '资料',
        icon: 'contacts',
        color: 'primary',
        route: true,
        disabled: true,
        description: 'Information Manage',
        method: ''
      }
    ]
  }
]

export {
  MENU
}

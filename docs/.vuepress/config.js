import {defaultTheme, defineUserConfig} from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
export default defineUserConfig({
    lang: 'zh-CN',
    title: '开发者开源网络基金会',
    description: '开发者开源网络基金会为诸位开发者以及新手提供教程、软件、配置等。',
    head: [
        ['link', { rel: 'icon', href: '/images/logo.svg' }],//favicon
        ['link',{rel:'stylesheet', href: '/css/font-awesome.min.css'}],
        ['meta',{name: 'keywords',content:'软件下载，开发配置，软件配置，idea，dev'}]
    ],
    theme: defaultTheme({
        home:'/',
        logo:'/images/logo.svg',
        repo: 'reonra/nav',
        logoDark:'/images/logo-white.svg',
        selectLanguageAriaLabel:'/',
        sidebar:'auto',
        sidebarDepth:3,
        colorMode:'auto',
        colorModeSwitch:'true',
        editLink:'false',
        editLinkText:'在GitHub上编辑此页',
        docsBranch:'git-pages',
        lastUpdated:'true',
        lastUpdatedText:'最后更新',
        contributors:'true',
        contributorsText:'贡献者',
        tip:'提示:loudspeaker:',
        warning:'警告:warning:',
        backToHome:'错误地址，回去吧！🤚此路不通',
        navbar: [
            // NavbarItem
            {
                text: '🌐 首页',
                link: '/',
            },
            {
                text: '⌨ 平面设计',
                children: ['/design/', '/design/bar.md'],
            },
            {
                text:'📐 开发工具',
                children: ['/devs/']
            },
            {
                text:'📘 文本教程',
                children: ['/books/']
            },
            {
                text:'📺 视频教程',
                children: ['/videos/']
            },
            {
                text:'⏬ 软件下载',
                children: ['/softdown/']
            },
            {
                text:'👋 软件配置',
                children: ['/config/']
            },
        ],

    }),
    plugins: [
        searchPlugin({
            locales: {
                '/': {
                    placeholder: '搜索',
                },
            maxSuggestions:10,
                hotKeys:('17'['s', 'ctrl'])   ,
            },
        }),
    ],


})
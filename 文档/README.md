---
home: true
title: 首页
heroImage: /images/logo.svg
heroImageDark: /images/logo-white.svg
heroAlt: '开发者开源网络基金会'
heroText: '开发者开源网络基金会'
tagline: '开发者开源网络基金会 - 为了Open Source的荣耀'
actions:
  - text: 快速上手
    link: /zh/guide/
    type: primary
  - text: 项目简介
    link: /zh/guide/introduce.md
    type: secondary
features:
    - title: 精彩
      details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
    - title: 绝妙
      details: 享受 Vue 的开发体验，使用 Vue 组件，又可以使用 Vue 来开发自定义主题。
    - title: 优雅
      details: 每个页面预渲染生成静态的 HTML，每个页面被加载的时候，将作为 SPA 运行。
footerHtml:
    - 'true'
footer:
  - '<p>Copyright&nbsp&copy&nbsp2021-present&nbsp
  <a href="https://www.reonra.com" target="_blank">Reonra</a>&nbspAll rights reserved<br>本网站使用&nbsp<a href="https://v2.vuepress.vuejs.org/zh/" target="_blank">VuePress</a>&nbsp搭建&nbsp托管于<a href="https://github.com/" target="_blank">GitHub</a></p>'
---
### As Easy as 1, 2, 3 
  
 <CodeGroup> 
   <CodeGroupItem title="PNPM" active> 
  
 ```bash 
 # install in your project 
 pnpm add -D vuepress@next @vuepress/client@next vue 
  
 # create a markdown file 
 echo '# Hello VuePress' > README.md 
  
 # start writing 
 pnpm vuepress dev 
  
 # build to static files 
 pnpm vuepress build 
 ``` 
  
   </CodeGroupItem> 
  
   <CodeGroupItem title="YARN"> 
  
 ```bash 
 # install in your project 
 yarn add -D vuepress@next 
  
 # create a markdown file 
 echo '# Hello VuePress' > README.md 
  
 # start writing 
 yarn vuepress dev 
  
 # build to static files 
 yarn vuepress build 
 ``` 
  
   </CodeGroupItem> 
  
   <CodeGroupItem title="NPM"> 
    
 ```bash 
 # install in your project 
 npm install -D vuepress@next 
  
 # create a markdown file 
 echo '# Hello VuePress' > README.md 
  
 # start writing 
 npx vuepress dev 
  
 # build to static files 
 npx vuepress build 
 ``` 
  
   </CodeGroupItem> 
 </CodeGroup>



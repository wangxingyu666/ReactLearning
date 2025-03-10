const blogs = [
  {
    id: 1,
    title: "前端工程化入门：构建你的第一个项目",
    content:
      "在前端工程化学习的初期，了解如何构建一个基本的前端项目是关键。我们将从项目结构的搭建开始，逐步引入构建工具如 Webpack，并探讨如何组织代码以便于后续的维护和扩展。",
    author: "Alice",
    image:
      "https://my-wxy-bucket.oss-cn-nanjing.aliyuncs.com/picture/webpicture.jpg",
    views: 1200,
    favorites: 150,
    likes: 300,
    tags: ["前端工程化", "Webpack", "项目构建"],
  },
  {
    id: 2,
    title: "深入理解前端模块化",
    content:
      "模块化是前端工程化的核心概念之一。本文将详细介绍如何通过 ES6 模块、CommonJS 模块以及 AMD/CMD 规范来实现前端代码的模块化，帮助你更好地组织和管理代码。",
    author: "Bob",
    image:
      "https://my-wxy-bucket.oss-cn-nanjing.aliyuncs.com/picture/webpicture.jpg",
    views: 850,
    favorites: 80,
    likes: 180,
    tags: ["前端工程化", "模块化", "ES6", "CommonJS"],
  },
  {
    id: 3,
    title: "前端性能优化：从加载到渲染",
    content:
      "性能优化是前端开发中不可或缺的一部分。本文将探讨如何通过代码分割、懒加载、缓存策略等手段来提升前端应用的加载速度和用户体验。",
    author: "Charlie",
    image:
      "https://my-wxy-bucket.oss-cn-nanjing.aliyuncs.com/picture/webpicture.jpg",
    views: 1500,
    favorites: 200,
    likes: 400,
    tags: ["前端工程化", "性能优化", "懒加载", "缓存策略"],
  },
  {
    id: 4,
    title: "前端代码规范与团队协作",
    content:
      "在团队开发中，统一的代码规范至关重要。本文将介绍如何制定和遵循代码规范，以及如何通过工具如 ESLint 和 Prettier 来自动化代码格式化和质量检查。",
    author: "David",
    image:
      "https://my-wxy-bucket.oss-cn-nanjing.aliyuncs.com/picture/webpicture.jpg",
    views: 1100,
    favorites: 120,
    likes: 250,
    tags: ["前端工程化", "代码规范", "团队协作", "ESLint", "Prettier"],
  },
  {
    id: 5,
    title: "前端测试：单元测试与端到端测试",
    content:
      "测试是确保前端应用质量的重要环节。本文将介绍如何使用 Jest 进行单元测试，以及如何通过 Cypress 实现端到端测试，帮助你构建更可靠的前端应用。",
    author: "Eve",
    image:
      "https://my-wxy-bucket.oss-cn-nanjing.aliyuncs.com/picture/webpicture.jpg",
    views: 900,
    favorites: 90,
    likes: 190,
    tags: ["前端工程化", "测试", "Jest", "Cypress"],
  },
  {
    id: 6,
    title: "前端工程化中的版本控制",
    content:
      "版本控制是前端工程化的重要组成部分。本文将介绍如何使用 Git 进行版本管理，包括分支策略、代码合并以及如何与团队协作。",
    author: "Frank",
    image:
      "https://my-wxy-bucket.oss-cn-nanjing.aliyuncs.com/picture/webpicture.jpg",
    views: 1300,
    favorites: 160,
    likes: 320,
    tags: ["前端工程化", "版本控制", "Git", "分支策略"],
  },
  {
    id: 7,
    title: "前端工程化：构建工具的选择与对比",
    content:
      "目前市面上有许多构建工具可供选择，如 Webpack、Rollup 和 Vite。本文将对比这些工具的优缺点，并探讨如何根据项目需求选择合适的构建工具。",
    author: "Grace",
    image:
      "https://my-wxy-bucket.oss-cn-nanjing.aliyuncs.com/picture/webpicture.jpg",
    views: 1400,
    favorites: 180,
    likes: 350,
    tags: ["前端工程化", "构建工具", "Webpack", "Rollup", "Vite"],
  },
  {
    id: 8,
    title: "前端工程化中的国际化与本地化",
    content:
      "国际化和本地化是现代前端应用的重要特性。本文将介绍如何在前端项目中实现多语言支持，以及如何通过国际化库如 i18next 来管理语言资源。",
    author: "Hannah",
    image:
      "https://my-wxy-bucket.oss-cn-nanjing.aliyuncs.com/picture/webpicture.jpg",
    views: 1000,
    favorites: 110,
    likes: 220,
    tags: ["前端工程化", "国际化", "本地化", "i18next"],
  },
  {
    id: 9,
    title: "前端工程化：从零搭建前端脚手架",
    content:
      "脚手架工具可以帮助我们快速搭建前端项目。本文将介绍如何使用 Create React App 或 Vue CLI 搭建项目，并探讨如何自定义脚手架以满足特定需求。",
    author: "Ian",
    image:
      "https://my-wxy-bucket.oss-cn-nanjing.aliyuncs.com/picture/webpicture.jpg",
    views: 1600,
    favorites: 220,
    likes: 450,
    tags: ["前端工程化", "脚手架", "Create React App", "Vue CLI"],
  },
  {
    id: 10,
    title: "前端工程化中的持续集成与持续部署",
    content:
      "持续集成和持续部署是现代前端开发的必备实践。本文将介绍如何使用 CI/CD 工具如 Jenkins、GitHub Actions 来自动化构建、测试和部署前端应用。",
    author: "Julia",
    image:
      "https://my-wxy-bucket.oss-cn-nanjing.aliyuncs.com/picture/webpicture.jpg",
    views: 1700,
    favorites: 230,
    likes: 480,
    tags: ["前端工程化", "持续集成", "持续部署", "Jenkins", "GitHub Actions"],
  },
  {
    id: 11,
    title: "前端工程化中的代码复用与组件化",
    content:
      "组件化是前端工程化的核心思想之一。本文将探讨如何通过 React 或 Vue 的组件系统实现代码复用，以及如何构建可复用的 UI 组件库。",
    author: "Kevin",
    image:
      "https://my-wxy-bucket.oss-cn-nanjing.aliyuncs.com/picture/webpicture.jpg",
    views: 1250,
    favorites: 140,
    likes: 280,
    tags: ["前端工程化", "代码复用", "组件化", "React", "Vue"],
  },
  {
    id: 12,
    title: "前端工程化中的安全实践",
    content:
      "前端应用的安全性不容忽视。本文将介绍常见的前端安全问题，如 XSS 和 CSRF，并探讨如何通过 HTTPS、内容安全策略（CSP）等手段来保护前端应用。",
    author: "Laura",
    image:
      "https://my-wxy-bucket.oss-cn-nanjing.aliyuncs.com/picture/webpicture.jpg",
    views: 1050,
    favorites: 100,
    likes: 200,
    tags: ["前端工程化", "安全", "XSS", "CSRF", "HTTPS", "CSP"],
  },
];

export default blogs;

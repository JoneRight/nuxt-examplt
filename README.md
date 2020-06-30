# 前端开发规范

## 框架要求

##### 1、前端框架

> 1）web 端建议用 nuxt 框架，即使没有做服务端渲染，也可静态化。[官网地址](https://nuxtjs.org/)  
> 2）管理端建议用 vue-element-admin，保持跟主系统风格统一。[GitHub 地址](https://github.com/PanJiaChen/vue-element-admin)

##### 2、UI 框架

> 1）优先选择用**Element UI**，web 端建议做响应式。  
> 2）如果不能做响应式需要做两套，pc 端建议用 **Element UI**，手机端建议用**mint-ui**

## 编码规范，强制要求使用 eslint

> 为了开发代码规范，我们强制要求完全按照 **eslint** 格式来编写代码。  
> 另外很多 IDE 也有代码格式工具，但是不同的 IDE 格式化都不一样，所以建议搭建使用 **vscode**。格式化插件有：Beautify、Prettier。

## code review 和 Git

> 为保证代码的可读，可维护，以后项目包括现有项目后期的迭代，每个人都不能提交 master，都在自己的分支上开发。这里分几步：

1. 每个人建以自己名字为命名的分支，此分支不能删除；  
   如果后面在此分支上的功能暂时不上线，那就再新建功能型分支，功能型分支等功能上线之后就合并到 master，然后删除此功能分支；
2. 在每个小功能提交之后，都告知负责人提交了分支代码，负责人就需要对这部分代码进行 review；
3. 等代码达到测试要求的时候，在群里说一下，我们再做一次 review，对于不规范的代码，直到改到符合我们的标准为止；
4. 项目发测试的之前，先把 master 合并到自己分支之后，在本地运行无误，再发测试，避免中间其他功能合并 master 而引起冲突；
5. 等项目正式上线之后告知负责人，再由负责人合并到 master，之后的优化还是在分支上进行；

> 这样可以保证 master 永远跟线上是一致的。

## Git commit 规范

### Commit message 的格式

> 每次提交，Commit message 都包括三个部分：header，body 和 footer；  
> 规则如下：type(scope): subject；  
> 其中 type（必需）、scope（可选）和 subject（必需）。

### type

1. feat：新功能（feature）
2. fix：修补 bug
3. docs：文档（documentation）
4. style： 格式（不影响代码运行的变动）
5. refactor：重构（即不是新增功能，也不是修改 bug 的代码变动）
6. test：增加测试
7. chore：构建过程或辅助工具的变动

### scope

> scope 用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。  
> 这里我们不做强制要求写这个，但是有一些是必须要填的，比如  
> 在公共样式里面修改了 elementUI 样式，scope 为 elementUI  
> router 的修改，scope 为 router  
> permission 的修改，scope 为 permission  
> utils 的修改，scope 为 utils  
> vue.config.js 的修改，scope 为 config  
> 新增 npm 包，scope 为 npm

### subject

> subject 是 commit 目的的简短描述，不超过 50 个字符。要尽可能的能描述清楚此次修改的内容，避免出现以前那种修改、优化太过简单的描述。

```bash
# 修改bug
fix(utils): 解决了时间戳转换时间不能具体到秒

# 新增
feat: 在app.vue新增聊天功能
```

[参考网址](https://www.jianshu.com/p/201bd81e7dc9?utm_source=oschina-app)

## GitLab 标签的使用

> 每次在发正式版之后，都需要 **New tag** 新建标签，写好版本号和当前发版的功能，利于后期版本维护。

## README.md

> 必须把项目从安装到运行、打包等命令说清楚。  
> 需要表明每个 baseUrl 对应是测试还是正式，管理后台需要把测试账号、密码都说明。
>
> 针对当前框架的一些特殊说明标注清楚，比如下面文档说用到的图片预加载和富文本的插件，我们会针对 GitHub 上的插件做本项目特殊化修改，像这种的就需要在文档里面标注修改了哪，是为了解决什么问题。

## CSS 预处理器

> 建议选择用 sass，然后在项目里面配置全局变量，把公用的变量都放在一个文件里面，减少后期维护成本。例如\_variables.scss。  
> 甚至一些公用的方法也可以封装到全局引用里面。

```scss
// font相关
//-----------------------------------------------------
$fontSize: 14px !default;
$fontLineHeight: 1.5 !default;
$fontFamily: system-ui, -apple-system, BlinkMacSystemFont, 'Microsoft YaHei UI', 'Microsoft YaHei', Roboto, 'Hiragino Sans GB', 'Source Han Sans CN', Fira Sans,
  'Droid Sans', 'Helvetica Neue', arial, sans-serif !default;
// 苹方, 冬青黑体，微软雅黑UI（win8.1+），微软雅黑，思源黑体（安卓）
$fontCn: 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei UI', 'Microsoft YaHei', 'Source Han Sans CN' sans-serif !default;
// 前两个为safari chrome, ios4.0+, ios4.0-, Android 4.0+, Android 4.0-, windows&windows Phone,
$fontEn: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Roboto, 'Droid Sans', 'Seogoe UI', Arial !default;

// 背景色，文本色，边框色，链接色
//-----------------------------------------------------
$colorText: #000 !default;
$colorBg: #fff !default;
$colorBorder: #dbdbdb !default;
$colorLink: #333 !default;
$colorPlaceholder: #999 !default; // input placeholder color
$colorDisabled: (
  text: #999,
  bg: #e3e3e3,
  border: #dbdbdb,
) !default; // textColor bgColor borderColor
$colorOverlay: rgba(0, 0, 0, 0.7) !default; // 遮罩层颜色
$colorBgF: #f7f8f9 !default;
$colorLazy: #f1f1f1; // 加载颜色
$colorT: #313138;
$border: #979797;
$colorBgB: #f4f4f4;

// 基本颜色
//-----------------------------------------------------
$color2: #222;
$color3: #333;
$color6: #666;
$color9: #999;
$colorC: #ccc;
$colorB: #bbb;
$colorF: #4d4d4d;

$blue: #b3d4fd !default;
$orange: #fed989 !default;
$pink: #fdbbbb !default;
$red: #ff5353 !default;
$green: #4cd964 !default;
$primary: #007aff !default;
$yellow: #dbb76c !default;
```

## 组件命名规范

> 1、有意义的名词、简短、具有可读性  
> 2、以小写开头，采用短横线分割命名  
> 3、公共组件命名以公司名称简拼为命名空间(app-xx.vue)  
> 4、文件夹命名主要以功能模块代表命名
>
> 同时还需要注意：必须符合自定义元素规范: 使用连字符分隔单词，切勿使用保留字。app- 前缀作为命名空间: 如果非常通用的话可使用一个单词来命名，这样可以方便于其它项目里复用。

## vue 文件基本结构

```html
<template>
  <div>
    <!--必须在div中编写页面-->
  </div>
</template>
<script>
  export default {
    components: {},
    data() {
      return {}
    },
    methods: {},
    mounted() {},
  }
</script>
<!--声明语言，并且添加scoped-->
<style lang="scss" scoped></style>
```

## vue 文件方法声明顺序

> 参考 plugin:vue/recommended

```
{
  "vue/order-in-components": ["error", {
    "order": [
      "el",
      "name",
      "parent",
      "functional",
      ["delimiters", "comments"],
      ["components", "directives", "filters"],
      "extends",
      "mixins",
      "inheritAttrs",
      "model",
      ["props", "propsData"],
      "fetch",
      "asyncData",
      "data",
      "computed",
      "watch",
      "LIFECYCLE_HOOKS",
      "methods",
      "head",
      ["template", "render"],
      "renderError"
    ]
  }]
}
```

## 注释规范

> 代码注释在一个项目的后期维护中显的尤为重要，所以我们要为每一个被复用的组件编写组件使用说明，为组件中每一个方法编写方法说明。

##### 以下情况，务必添加注释

1. 公共组件使用说明
2. 各组件中重要函数或者类说明
3. 复杂的业务逻辑处理说明
4. 特殊情况的代码处理说明,对于代码中特殊用途的变量、存在临界值、函数中使用的 hack、使用了某种算法或思路等需要进行注释描述
5. 注释块必须以/**（至少两个星号）开头**/；
6. 单行注释使用//；

## 字体库

> 为了小图标的统一，我们在[阿里巴巴矢量图标库](https://www.iconfont.cn/)建了一个项目，里面有设计选好的字体，可以直接用，基本都在项目里面封装好了。  
> 如果开发过程中没用你需要的字体库，可以让 UI 去帮我们找，找了他们会更新字体库，我们也需要把本地更新即可。

> 这里如果在 nuxt/vue 项目里面封装的时候，如果遇到 css 或者字体库加载的错误，可在 main.js 里面引用 css。

## 全局 Store 数据

> 所有的数据都放在 store 里面，包括 ajax 请求返回的列表都放在 store 里面。  
> 在 store/modules 里面建对应 views 的 aaaBbb.js，新 admin 框架不需要在 store/index.js 里面在引用这个 js，以前的 admin 框架需要引用一下。

## Axios

> 建议使用 Axios，并且测试和生产修改的 **baseUrl** 建议放在 **根目录/config** 里面。  
> 暴露全局参数，可直接使用 axios 相关方法，修改 **<font color='red'>baseUrl</font>** 在 config/env.js 里面。  
> 这里的 **baseUrl** 配置文件跟框架有关系，用 vue-cli3 搭建的项目，可直接配置在 **.env.production** 或 **.env.development** 里面，当然也可以写在 config 文件里面，但是没有必要。[参考网址](https://cli.vuejs.org/zh/guide/mode-and-env.html#%E6%A8%A1%E5%BC%8F)

```js
this.$axios

// 完整post请求规范为：
this.$axios({
  method: 'post',
  url: '/test',
  data: this.$qs.stringify({}), // 这里需不需要用qs转需要看后台接口需不需要
})
  .then(res => {
    console.log(res)
  })
  .catch(error => {
    this.$message.error(error.msg || error.message || error)
  })

// 完整get请求规范为：
this.$axios({
  method: 'get',
  url: '/test',
  params: this.$qs.stringify({}), // 这里需不需要用qs转需要看后台接口需不需要
})
  .then(res => {
    console.log(res)
  })
  .catch(error => {
    this.$message.error(error.msg || error.message || error)
  })
```

## 图片懒加载 Vue-Lazyload

建议使用这个插件来处理预加载，npm 装的时候需要装 **_vue-lazyload-cosmo-zp_** ，目的是为了解决手机端自适应图片的问题。

> 修改 const containerWidth = container.offsetWidth \* scale 为 const containerWidth = container.offsetWidth，适配手机端自适应图片问题。  
> <font color='red'>如果遇到图片不更新 bug，大概率是因为没有写:key</font>。  
> github 地址 <https://github.com/hilongjw/vue-lazyload>

```html
<template>
  <div ref="container">
    <img v-lazy="imgUrl" />
    <div v-lazy:background-image="imgUrl"></div>

    <!-- with customer error and loading -->
    <img v-lazy="imgObj" />
    <div v-lazy:background-image="imgObj"></div>

    <!-- Customer scrollable element -->
    <img v-lazy.container="imgUrl" />
    <div v-lazy:background-image.container="img"></div>

    <!-- srcset -->
    <img v-lazy="'img.400px.jpg'" data-srcset="img.400px.jpg 400w, img.800px.jpg 800w, img.1200px.jpg 1200w" />
    <img v-lazy="imgUrl" :data-srcset="imgUrl' + '?size=400 400w, ' + imgUrl + ' ?size=800 800w, ' + imgUrl +'/1200.jpg 1200w'" />
  </div>
</template>
<style>
  img[lazy='loading'] {
    /*your style here*/
  }
  img[lazy='error'] {
    /*your style here*/
  }
  img[lazy='loaded'] {
    /*your style here*/
  }
  /*
  or background-image
  */
  .yourclass[lazy='loading'] {
    /*your style here*/
  }
  .yourclass[lazy='error'] {
    /*your style here*/
  }
  .yourclass[lazy='loaded'] {
    /*your style here*/
  }
</style>
```

## 富文本 vue-quill-editor

富文本建议用这个框架，npm 安装的时候建议安装 **_vue-quill-editor-cosmo_** ，目的为了解决下拉字号显示问题。

> 此富文本插件支持 spa 和 ssr 两种方式，nuxt 项目采用 ssr 形式，以指令形式插入到 html 中。  
> github 地址 <https://github.com/surmon-china/vue-quill-editor>

## 轮播图 vue-awesome-swiper

> 基于 Swiper4、适用于 Vue 的轮播组件，支持服务端渲染和单页应用。  
> github 地址 <https://github.com/surmon-china/vue-awesome-swiper>

## 深度作用选择器

```css
<style scoped>
.a >>> .b { /* ... */ }

/* Sass 之类的预处理器无法正确解析 >>>，所以用/deep/代替 */
/deep/.a { /* ... */ }
</style>
```

---

### 下面只列了 nuxt 的结构规范，vue 的项目也要遵循 vue 脚手架或者 vue-element-admin 已有的目录规范，目的是为了方便后期维护。

---

## nuxt 结构化规范《对应目录说明》

已规范好各功能目录，对应功能类的都需要放到对应的文件夹里面，禁止开发人员私自新建目录。  
如果有特殊需要，目前满足不了的，可自行新建，但是需要在 readme 里面进行说明。

### 1. assets 资源目录

> 资源目录 assets 用于组织未编译的静态资源如 LESS、SASS 或 JavaScript。

### 2. components 组件目录

> 用于组织应用的 Vue.js 组件。如果比较大的项目，可根据 pages 下面的页面新建对应文件夹，在对应文件夹里面新建组件。

### 3. layouts 布局目录

> 可新建模板，即入口文件。可通过 `layout: 'example'`设置。

### 4. locales 国际化目录

> 指定需要翻译的文本。

### 5. middleware 中间件目录

> 存放应用的中间件

### 6. pages 页面目录

> 会读取该目录下所有的 .vue 文件并自动生成对应的路由配置。所以在此目录下面，**<font color='red'>不允许出现 xxx.css、xxx.scss、xxx.js、xxx.jpg 等，以及 xxx.vue 组件</font>**。

### 7. plugins 插件目录

> 用于组织那些需要在 根 vue.js 应用 实例化之前需要运行的 Javascript 插件。一般需要引入的插件都放在此下面。比如需要引入的 elementUI、axios 等。

### 8. static 静态文件目录

> 用于存放应用的静态文件，此类文件不会被 Nuxt.js 调用 Webpack 进行构建编译处理。服务器启动的时候，该目录下的文件会映射至应用的根路径 / 下。

### 9. store

> 用于组织应用的 Vuex 状态树 文件。Nuxt.js 框架集成了 Vuex 状态树 的相关功能配置，在 store 目录下创建一个 index.js 文件可激活这些配置。

### 10. utils 工具类目录

> 常用的工具类，封装好可以放在此目录下。注意跟 plugins 插件目录做区分。

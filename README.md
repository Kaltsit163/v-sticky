<p align="center"><a href="https://vuejs.org" target="_blank" rel="noopener noreferrer"><img width="100" src="https://vuejs.org/images/logo.png" alt="Vue logo"></a></p>
<p align="center">
  <a href="https://circleci.com/gh/vuejs/vue/tree/dev"><img src="https://img.shields.io/circleci/project/vuejs/vue/dev.svg" alt="Build Status"></a>
  <a href="https://codecov.io/github/vuejs/vue?branch=dev"><img src="https://img.shields.io/codecov/c/github/vuejs/vue/dev.svg" alt="Coverage Status"></a>
  <a href="https://www.npmjs.com/package/vue"><img src="https://img.shields.io/npm/l/vue.svg" alt="License"></a>
  <br>
</p>

<h2 align="center">A Plugin For Vue.js</h2>

#### 0.如何安装
```javascript
npm install vv-sticky
```

#### 1.使用场景
移动端需要滚动吸顶的业务场景

#### 2.为啥要整理一个插件
如果你能只用 CSS 那显然是相当好的，但是兼容性是相当可悲的，<br>
所以搭配JS做了一个能力检查，一个插件能解决了，一了百了

#### 2.引入方法

```javascript
import VVSticky from 'vv-sticky'
Vue.use(VVSticky)
```

#### 3.使用模式
1.插件模式

```javascript
// main.js

import VVSticky from 'vv-sticky'
Vue.directive('sticky', stickyD)

// app.vue
<template>
  <section v-sticky="stickyConfig">{{msg}}</section>
</template>
<script>
export default {
  name: 'demo',
  data () {
    return {
      stickyConfig: {
        zIndex: 10,
        stickyTop: 0
      },
      msg: 'Welcome'
    }
  }
}
</script>
```

2.指令模式

```javascript
// app.vue
<template>
  <section v-sticky="stickyConfig">{{msg}}</section>
</template>
<script>
import VVSticky from 'vv-sticky'
export default {
  name: 'demo',
  directives: {
    'sticky': VVSticky
  },
  data () {
    return {
      stickyConfig: {
        zIndex: 10,
        stickyTop: 0
      },
      msg: 'Welcome'
    }
  }
}
</script>
```

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2018-present, Yejunnan (Liu) You

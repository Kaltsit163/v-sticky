/**
 * Author: xiaolin@in66.com
 * Mail: liuyejunnan@163.com
 * Date: 2018/08/20
 * Desc: 基本的询问弹窗
 * QA:
 * ①. 如何引入?
   import Layer from '@/plugin/confirm'
   Vue.use(Layer)
 * ②. 如何调用?
 * this.$confirm({
    title: '提示',
    msg: '是否确认删除',
    sureTXT: '确认',
    cancleTXT: '取消'
  }).then((res) => {
    console.info('这里是点击【确认】之后进入的callback stack')
  }).catch((err) => {
    console.error('这里是点击【取消】之后进入的callback stack')
  })
 * this.$alert({
    title: '提示',
    msg: '是否确认删除',
    sureTXT: '确认'
  }).then((res) => {
    console.info('这里是点击【确认】之后进入的callback stack')
  }).catch((err) => {
    console.error('这里是点击【取消】之后进入的callback stack')
  })
*/

import Vue from 'vue'
import $Layer from './Sticky.vue'
import merge from '../../util/merge'

let $instance
let LayerConstructor = Vue.extend($Layer)

let initInstance = () => {
  $instance = new LayerConstructor({
    el: document.createElement('div')
  })
  // 添加到boby
  document.body.appendChild($instance.$el)
}

let Confirm = (options = {}) => {
  initInstance()
  merge($instance.$data, options)
  return new Promise((resolve, reject) => {
    $instance.show = true
    let success = $instance.success
    let cancel = $instance.cancel
    $instance.success = () => {
      success && success()
      resolve(true)
    }
    $instance.cancel = () => {
      cancel && cancel()
      reject(false)
    }
  })
}

let Alert = (options = {}) => {
  initInstance()
  merge($instance.$data, { ...options,
    'cancelTXT': null
  })
  return new Promise((resolve, reject) => {
    $instance.show = true
    let success = $instance.success
    let cancel = $instance.cancel
    $instance.success = () => {
      success && success()
      resolve(true)
    }
    $instance.cancel = () => {
      cancel && cancel()
      reject(false)
    }
  })
}

export default {
  install(Vue) {
    if (!Vue.$confirm) {
      Vue.$confirm = Confirm
    }
    if (!Vue.$alert) {
      Vue.$alert = Alert
    }
    Vue.prototype.$confirm = Vue.$confirm
    Vue.prototype.$alert = Vue.$alert
  }
}

/*
 * @Author: 张平
 * @Date: 2019-03-11 14:11:56
 * @Last Modified by: 张平
 * @Last Modified time: 2019-09-02 15:05:55
 */

import Vue from 'vue'
import Element from 'element-ui'
import './element-variables.scss'
import locale from 'element-ui/lib/locale/lang/en'

export default () => {
  Vue.use(Element, { locale })
}

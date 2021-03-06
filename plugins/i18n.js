/*
 * @Author: 张平
 * @Date: 2019-04-16 17:09:49
 * @Last Modified by: 张平
 * @Last Modified time: 2019-09-02 15:06:05
 */

import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from '../locales'
import ElementLocale from 'element-ui/lib/locale'
import Cookies from 'js-cookie'

Vue.use(VueI18n)

export default ({ app, store }) => {
  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  console.log('language')
  console.log(Cookies.get('language'))
  app.i18n = new VueI18n({
    locale: Cookies.get('language') || 'zh', // set locale,
    messages,
  })
  ElementLocale.i18n((key, value) => app.i18n.t(key, value))
  app.i18n.path = link => {
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`
    }
    return `/${app.i18n.locale}/${link}`
  }
}

/*
 * @Author: 张平
 * @Date: 2019-04-16 17:09:16
 * @Last Modified by: 张平
 * @Last Modified time: 2019-09-02 15:06:09
 */

import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  window.onNuxtReady(() => {
    createPersistedState({
      key: 'vuex',
      paths: ['counter', 'a'],
      storage: sessionStorage,
    })(store)
  })
}

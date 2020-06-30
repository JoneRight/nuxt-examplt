/*
 * @Author: 张平
 * @Date: 2019-04-16 17:10:04
 * @Last Modified by: 张平
 * @Last Modified time: 2019-08-09 16:34:41
 */

export const state = () => ({
  counter: 0,
  a: 0,
  b: 0
})

export const mutations = {
  increment(state) {
    state.counter++
  }
}

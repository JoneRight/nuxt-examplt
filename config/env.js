/*
 * @Author: 张平 
 * @Date: 2019-03-11 13:55:34 
 * @Last Modified by: 张平
 * @Last Modified time: 2019-08-09 16:33:42
 */

let baseUrl

if (process.env.NODE_ENV === 'production') {
  // 生产环境
  baseUrl = 'http://www.baidu.com'
} else {
  // 测试环境
  baseUrl = 'https://easy-mock.com/mock/59bf2844e0dc663341ad6c7a/creative'
}

export {
  baseUrl
}
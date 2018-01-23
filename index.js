/**
 *  Created by daiwenjuan on 2018/1/23 上午11:25.
 */
const argv = require('yargs').argv
function test() {
  if (argv.l == 'zh-cn') {
    console.log('zh_cn')
  } else if (argv.l == 'en') {
    console.log('en')
  }
}
test()
//node index.js --l=zh-cn      zh_cn
//node index.js --l=en           en
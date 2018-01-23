/**
 *  Created by daiwenjuan on 2018/1/23 下午3:54.
 */
var argv = require('yargs')
  .usage('Usage: $0 -w [num] -h [num]')
  .count('verbose')
  .alias('v', 'verbose')
  .argv

VERBOSE_LEVEL = argv.verbose
console.log(argv)
console.log(VERBOSE_LEVEL)
function WANRN() {
  VERBOSE_LEVEL >= 0 && console.log.apply(console, arguments)
}
function INFO() {
  VERBOSE_LEVEL >= 1 && console.log.apply(console, arguments)
}
function DEBUG() {
  VERBOSE_LEVEL >= 2 && console.log.apply(console, arguments)
}

WANRN('Showing only important stuff')
INFO('Showing semi-import stuff too')
DEBUG('Extra chatty mode')


/* eslint-disable */

function newArray(len) {
  if (typeof Uint8Array !== 'undefined') {
    return new Uint8Array(len)
  }
  return new Array(len)
}

function checkRequirements(items, requirements) {
  var n = requirements.length
  var len = 1 << n
  var arr = newArray(len)
  // 第 i 条不等式。
  // 假设 n == 4，即有 4 种元需求：
  // i 为从 0000 到 1111，从右到左分别称为第 1,2,3,4 位
  // 当 i == 0110 时，代表不等式左边为第 2、3 个集合的并集
  for (var i = 0; i < len; i++) {
    var filters = []
    for (var j = 0; j < n; j++) {
      if (i & (1 << j)) {
        filters.push(requirements[j].filter)
        // 不等式的右边（先把需求数加上去，满足的时候减 1，减至 0 则满足该不等式）
        arr[i] += requirements[j].count
      }
    }
    // 遍历能量区，满足条件的减 1
    for (var j = 0; j < items.length; j++) {
      var item = items[j]
      if (filters.some(function (filter) {
        return filter(item)
      })) {
        // 减至 0，该不等式成立
        if (!--arr[i]) break
      }
    }
    if (arr[i]) return false
  }
  return true
}

exports.checkRequirements = checkRequirements

var a = 0

a 

a += 1

console.log(a)

var arr = []

arr.push('hello')

console.log(arr)

arr.push('world')

console.log(arr)

var addItemToArray = function (newItem) {
  if (newItem === undefined || newItem.length === 0) {
    throw new Error('문자열이 아님')
  }
  arr.push(newItem)
}

addItemToArray('New Item 1')
console.log(arr)


addItemToArray('New Item 2')
console.log(arr)

addItemToArray(1)
addItemToArray('asdfasdfasdf')
console.log(arr)
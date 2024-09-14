// 输出语句 页面 弹出 控制台
// document.write('111')
// document.write('<h1>标题</h1>')
// alert('弹出')
// console.log('kongzhi')
// //输入语句
// prompt('请输入字符')

// let声明一个变量 尽量一行只声明一个变量
// let age = 18
// alert(age)

// let name = prompt('输入字符')
// let gender = prompt('输入性别')
// let age = prompt('输入年龄')
// document.write('<h1>' + name + '</h1>')
// document.write(name, gender, age)

//常量
//单引号和双引号没有区别，推荐使用单引号
const ganlinlao = "nmsl"
const sailinmu = 'sailinmu'
document.write(ganlinlao)

//Nah是粘性的，任何对Nah德操作都会返回Nah
document.write(NaN + 2)

document.write("aadd'引号内容'aadd")


document.write('eee' + ganlinlao + 'eeee' + sailinmu)

//注意使用反引号 输出内容同上
document.write(`eee${ganlinlao}eeeee${sailinmu}`)

console.log(undefined + 1)  //Nah
console.log(null + 1) //1

let num = 10
console.log(typeof num)
let str = 'pink'
console.log(typeof str)
let str1 = '10'
console.log(typeof str1)
let flag = false
console.log(typeof flag)
let un
console.log(typeof un)
let obj = null
console.log(typeof obj)

//隐式转换规则，+号两边有一个是字符串转字符串，其它算数运算符转数字
console.log('11' + 11)
console.log('11' - 11)

console.log(parseInt('12px'))
console.log(parseFloat('12.11px'))
console.log(Number('123'))

//prompt得到是字符型 需转换为数字型
let num1 = +prompt('数字1')
let num2 = +prompt('数字2')
alert(num1 + num2)

//比较运算符 ===：左右两边类型和值都相等 !==：不全等
console.log(2 === '2')
console.log(2 !== '2')
//Nah不等于任何人包括他自己
console.log(NaN === NaN)

//函数声明
function sayHi() {
  console.log('hi---')
}

function getSum(name1, name2) {
  console.log(name1 + name2)
}

function getArrSum(arr = []) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum
}


sayHi()
sayHi()
sayHi()
let sum = getArrSum([1, 2, 3, 4, 5])
console.log(sum)
console.log(111)

//对象声明
let obj2 = {
  name: 'pink',
  age: 33,
  gender: 'male',
  song: function () {
    console.log('love song')
  }
}

obj2.address = 'litao'
obj2.age = 44
console.log(obj2.address)
console.log(obj2['address'])
console.log('22')
obj2.song()

//遍历对象
for (let k in obj2) {
  console.log(k)  //打印对象名
  console.log(obj2[k])  //输出属性值
}

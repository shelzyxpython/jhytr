// for (let item of document.body.childNodes){
//     console.log(item)
// }

// Array.from(document.body.childNodes).filter(item => item > 0)

// for (let i = 0; i < document.body.childNodes.length; i++){
//     console.log(document.body.childNodes[i])
// }

// console.log(document.body.firstChild)

// document.body.style.backgroundColor = 'red';

// setTimeout(() => document.body.style.backgroundColor = 'yellow', 1000)

// alert(window.innerHeight)

// let arr = [
//     15,
//     1,
//     2,
//     4,
//     25,
// ]
// let res = arr.reduce((acc, item) => acc+item, 0)
//
// console.log(res)

// let str = 'fdsf,s,fas,d';
// let arr2 = str.split(',')
// console.log(arr.join('!   '))

// function compareNum(a, b) {
//     if (a > b) return 1;
//     if (a == b) return 0;
//     if (a < b) return -1;
// }
// console.log(arr
//     .sort(compareNum)
//     .reverse()
//     .filter(item => item > 5)
// )
// let res = arr.map(function (item, index, arr){
//     return item*2
// })
// console.log(res)

// let res = arr.filter((item) => item < 10)
// console.log(res)

// let arr = [
//     15,
//     1,
//     2,
//     4,
//     25,
// ]
// let el = arr.find(function (item, index, arr){
//     console.log(item == 15)
// })

// arr.forEach((elem) => console.log(elem))
// console.log(arr.includes(15))

// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ]
// matrix.splice(matrix.length-2.0)
// let matrix = [
//     [
//         [1, 2, 3],
//         [1, 2, 3],
//         [1, 2, 3]],
//     [4, 5, 6],
//     [7, 8, 9],
// ]
// matrix[1] = 'wrxtewr'
// console.log(matrix[0][2][1])
// console.log(['matrix'] <= ['matrix'])

// let array = []
// let array2 = new Array()
//
// let array3 = [1, 2, 3, 4, 5]
// console.log(array3[0])
// console.log(array3.length)
// array3[0] = 100
// delete array3[1]
// array3[array3.length] = 500
// array3[array3.length] = 600
// console.log(array3)

// let arr = [
//     {name: 'Rail', age: 15},
//     {name: 'admin', age: 15},
//     {name: 'manager', age: 15},
// ]
// for (let i=0; i<arr.length; i++){
//     console.log(arr[i])
// }
// for (let i in arr){
//     console.log(arr[i])
// }
// for (let i of arr){
//     console.log(item)
// }
// arr.pop
// console.log('added elem', arr.shift())
// console.log('left', arr)

// let user = {
//     name: 'Rail',
//     age: 16,
//     address: {
//         street: 'Shishkina',
//         house: 15,
//         flat: 10,
//     },
//     admin(){
//         console.log('admin')
//     }
// }
// console.log(user.address?.admin?)

// let user = {
//     name: 'Rail',
//     age: 16,
//     'is Admin': false,
//
//     say_hello() {
//         return ('Hello ${this.name}, ${this.age + 100}')
//     }
// }
// let arrow = () => {
// }
// user.say_hello()
// function newUser(name, age){
//     return {name, age}
// }
// let manager = new newUser('manager', 20)
// manager['is Admin'] = false
// console.log(manager)
// let admin = Object.assign({}, user)
// admin.name = 'admin'
// admin.age = 25
// console.log(admin)
// console.log(admin['say_hello']())

// let address = {
//     'street': 'Shishkina',
// }

// for (let key in user){
//     admin[key] = user[key]
// }
// let admin = Object.assign({}, user, address)
// admin.name = 'admin'
// admin['is Admin'] = true
// console.log(user)
// console.log(admin)

// for (let index in user){
//     console.log(index, user[index])
// }
// for (let item of user)
//     console.log(item)

// function makeUser(name, age){
//     return{ name, age }
// }
// let user = makeUser('Rail', 16)
// console.log(user)

// let obj1 = {}
// let obj2 = new Object()
// let key = prompt('Enter key', 'adress')
// let user = {
//     name: 'Vasya',
//     age: 15,
//     isAdmin: false,
//     'like dogs': true,
//     [key]: 'fsactrcte'
// }
// // user[key] = 'lkjhgfdcvbnjk'
// user.name = 'Rail'
// user.surname = 'Galimov'
// delete user.age
// console.log(user)
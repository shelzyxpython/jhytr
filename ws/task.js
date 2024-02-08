
// let arr = ['Привет, ', 'мир', '!'];
// console.log(arr.join(''));

// let arr = ['Привет, ', 'мир', '!'];
// let text = arr.join('');
// console.log(text);

// let arr = ['Привет, ', 'мир', '!'];
// arr[0] = 'Пока, ';
// let text = arr.join('');
// console.log(text);

// let obj = {
//     'Петя': 1000,
//     'Коля': 500,
//     'Вася': 200,
// };
//
// console.log(obj['Петя']);
// console.log(obj['Коля']);

// let arr = {
//     'ru':['Голубой', 'Красный', 'Зеленый'],
//     'eu':['Blue', 'Red', 'Green'],
// }
//
// console.log(arr['ru'][1]);

// arr = ['a', 'b', 'c']
// alert(arr)

// arr = ['a', 'b', 'c']
// alert(arr[0])
// alert(arr[1])
// alert(arr[2])

//r = ['a', 'b', 'c', 'd'];
// let res = arr[0] + '+' + arr[1] + ', ' + arr[2] + '+' + arr[3];
// console.log(res);

// let arr = [2, 5, 3, 9];
// let res = (arr[0] * arr[1]) + (arr[2] * arr[3]);
// console.log(res);

// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// };
// console.log(obj['c']);
// console.log(obj.c);

// let obj = {
//     'Коля': 1000,
//     'Вася': 300,
//     'Петя': 200,
// };
// console.log(obj['Петя'])
// console.log(obj['Коля'])

// let days = {
//     1: 'Понедельник',
//     2: 'Вторник',
//     3: 'Среда',
//     4: 'Четверг',
//     5: 'Пятница',
//     6: 'Суббота',
//     7: 'Воскресенье'
// };
//
// let today = new Date().getDay();
// let cur = days[today];
// console.log('Сегодня ' + cur);

// let days = {
//     1: 'Понедельник',
//     2: 'Вторник',
//     3: 'Среда',
//     4: 'Четверг',
//     5: 'Пятница',
//     6: 'Суббота',
//     7: 'Воскресенье'
// };
//
// let day = 3;
//
// let cur = days[day];
// console.log('День недели: ' + cur);

// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// let num = arr[1][0];
// console.log(num)

// let obj = {js:['jQuery', 'Angular'], php: 'hello', css: 'world'};
// let word = obj.js[0];
// console.log(word);

// let days = {
//     'ru': ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
//     'en': ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
// };
//
// let rumon = days['ru'][0];
// let newen = days['en'][2];
//
// console.log(rumon)
// console.log(newen)

let days = {
    'ru': ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    'en': ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
};

let lang = 'ru';
let day = 3;

let cur = days[lang][day - 1];
console.log(cur);
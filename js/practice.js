// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart

// const totalMinutes = 1441;

// const hour = Math.floor(totalMinutes / 60);

// console.log(hour);

// const minute = totalMinutes % 60;

// console.log(minute.toString());

// const result = `${hour.toString().padStart(2, 0)} : ${minute.toString().padStart(2, 0)}`

// console.log(result);

// ====================================================

// Напиши скрипт, який розраховує індекс маси тіла людини.Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини у метрах.
// Вага та висота зберігаються у змінних weight та height, але не як числа, а в вигляді рядків(спеціально для завдання).Не цілі числа можуть бути задані у вигляді 24.7 або 24, 7, тобто як роздільник дробової частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;


// const weight = '88,3';
// const height = '1.75';

// const formatWeigth = Number(weight.replace(",", "."));
// const formatHeigth = Number(height.replace(",", "."));
// const BMI = Number((formatWeigth / Math.pow(formatHeigth, 2)).toFixed(1));

// console.log(formatWeigth);
// console.log(formatHeigth);
// console.log(BMI);

//  Напишіть скрипт, який буде обрізати рядок до 25 символа і додавати у кінець три крапки.
// Працюй з наступними рядками попорядку:

// "Vestibulum facilisis purus nec"
// "Nunc sed turpis a felis in nunc fringilla"

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice

// const str = 'Vestibulum facilisis purus nec'


// console.log(str.length);
// console.log(str.slice(0, 24) + '...');

// console.log(str);

// Є деякі рядки, які потрібно перевірити на вміст забороненого слова sale, і повернути результат перевірки.Слова в рядку можуть бути у довільному регістрі, наприклад sAlE.Якщо знайшли заборонене слово spam то повертайте true.Якщо в рядку відсутнє заборонене слово, повертайте false.
// Попорядку перевіряйте наступні рядки:

// "Latest technology news" - false
// "Get best sale offers now!" - true
// "Amazing SalE, only tonight!" - true

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/includes

// const frase = "Latest technology news";
// const frase1 = "Get best sale offers now!";
// const frase2 = "Amazing SalE, only tonight!";

// const formatFrase = frase.toLowerCase()

// console.log(formatFrase);

// const result = formatFrase.includes('sale');

// console.log(result);

// const frase = "Latest technology news";
// const frase1 = "Get best sale offers now!";
// const frase2 = "Amazing SalE, only tonight!";

// const result = formatFrase.includes('sale');

// console.log(result);

// Напишіть цикл for, який виконуватиме ітерацію від 0 до 15. Для кожної ітерації він перевірятиме,
// парне чи непарне поточне число, і виводитиме повідомлення на екран.

// for(let i = 0; i < 15; i +=1){
//     if(i%2 === 0){
//         console.log(i, 'парне');
//     } else {
//         console.log(i, 'непарне');
//     }
// }

// for(let i = 0; i <= 15; i +=1){
//     switch(i%2) {//або 0 або 1
//         case 0:
//             console.log(i, 'парне');
//             break;

//     default:
//         console.log(i, 'непарне');
//     }
// }

// for (let i = 1; i <= 15; i += 1) {
//     // i%2 === 0 ? console.log(i, 'парне') : console.log(i, 'непарне');
//     console.log(i, i % 2 === 0 ? 'парне' : 'непарне');

// }

// // Потрібно створити світлофор за допомогою switch()
// // Користувач вводить в prompt() колір який він бачить
// // В результаті отримує меседж з дією яку повинен виконати
// // Світлофор може мати 4 стани green (GO), yellow (READY),red (STOP), будь що інше означає що сфітлофор не працює (BE CAREFUL)

// let message = prompt();

// if (typeof message === 'string') {
//     message = message.toLowerCase();

// }

// switch (message) {
//     case 'green':
//         console.log('GO');
//         break;
//     case 'yellow':
//         console.log('READY');
//         break;
//     case 'red':
//         console.log('STOP');
//         break;
//     default:
//         console.log('BE CAREFUL');
//         break;
// }

// //Створити функцію яка буде рахувати за скільки днів равлик зможе виповзти з колодязя, функція приймає 1 параметр.
// //1 глибина колодязя (depth)

// //Функція повертає кількість днів

// // Умови:
// // вдень Равлик проповзає на 7 м вгору, а за ніч опускається на 2 м вниз
// // використовувати цикл while()

// function calcDays(depth) {
//     // step 1
//     const daySpeed = 7;
//     const naghtSpeed = 2;
//     let days = 0;
//     let total = 0;
//     while (total < depth) {
//         days += 1;
//         total += daySpeed;
//         if (total < depth) {
//             total -= naghtSpeed;
//         }
//     }
//     console.log(days);
// }
// calcDays(42)//виповзе за 8 днів
// calcDays(17)//виповзе за 3 дні
// calcDays(18)//виповзе за 4 дні

// Просумувати всі елемнти рядку, якщо їх можливо привести до числа
// const str = '357g235'

// const str = '357g235'
// let totalElements = 0
// for (let i = 0; i < str.length; i += 1) {
//     const num = Number(str[i]);
//     if (!isNaN(num)) {
//         totalElements += num
//     }
// }
// console.log(totalElements);

// Напишіть код, який очищає масив від небажаних значень, таких як false undefined, пусті рядки, нуль, null.

// function filterArray(arr) {
//     let result = [];

//     for (let item of arr) {

//         if (!!item) {
//             result.push(item);
//         }

//     }

//     return result;
// }
// console.log(filterArray([0, 1, false, 2, undefined, '', 3, null])) // [1, 2, 3]
// console.log(filterArray([NaN, 0, 15, false, -22, '', undefined, 47, null])) // [15, -22, 47]

// Напишіть код, який поверне суму рядка

// function digitSum(data) {

//     const numbers = data.split("")
//     let num = 0;

//     for (let elem of numbers) {
//         num += Number(elem);
//     }

//     return num;

// }

// console.log(digitSum('4367')) // 20
// console.log(digitSum('56349')) // 27

// Потрібно мутувати масив так щоб залишились тільки (імена) елементи типу String.

// const names = ['Anna', 3, 'Roma', 17, 25, 'Kate', 14, 'Oleg'];
// for (let i = names.length - 1; i >= 0; i -= 1) {
//     if (typeof names[i] !== 'string') {
//         names.splice(i, 1);
//     }
// }
// Варіант №2
// for (let i = 0; i < names.length; i += 1){
//     if (typeof names[i] !== 'string') {
//         names.splice(i, 1);
//         i -= 1;  // зменшуємо індекс, бо змінилася індексація в масиві
//     }
// }
// console.log(names);

// Створити код який буде повертати масив з жіночими іменамиі
// const users = ['Artem', 'Anna', 'Larisa', 'Maksim', 'Svetlana', 'David', 'Roman', 'Olga'];
// const men = ['Artem', 'Maksim', 'David', 'Roman'];

// const women = [];

// for (let el of users) {

//     if (!men.includes(el)) {

//         women.push(el);
//     }

// }

// console.log(women);

// //Створіть функцію, яка приймає 1 параметр
// //1 масив імен користувачів, які поставили лайки.
// //Функція повертає меседж, як вказано у прикладах:
// //Використовувати switch()

// function stringBuilder(users) {
//     let message;
//     switch (users.length) {
//         case 0:
//             message = "no one likes this";
//             break;
//         case 1:
//             message = `${users[0]} likes this `;
//             break;
//         case 2:
//             message = `${users[0]} and ${users[1]} likes this `;
//             break;
//         case 3:
//             message = `${users[0]}, ${users[1]} and ${users[2]} likes this `
//             break;
//         default:
//             message = `${users[0]}, ${users[1]} and ${users.length - 2} others like this`;
//     }
//     return message
// }

// console.log(stringBuilder([]));//"no one likes this";
// console.log(stringBuilder(["Peter"]));//"Peter likes this";
// console.log(stringBuilder(["Max", "Alex"]));//"Jacob and Alex like this";
// console.log(stringBuilder(["Max", "John", "Mark"]));//"Max, John and Mark like this";
// console.log(stringBuilder(["Alex", "Jacob", "Mark", "Max", "Igor", "Leo"]));//"Alex, Jacob and 2 others like this;


// Напишіть функцію для перетворення імені в ініціали.Ви отримаєтеім’я з прізвищем розділені пробілом.В результаті це має виглядати так:

// `Sam Harris => S.H`
//     `Patrick Feeney => P.F`
// function abbrevName(name) {
//     const arr = name.split(” “);
//     return `${arr[0][0]}.${arr[1][0]}`;
// }
// function abbrevName(name) {
//     const arr = name.split(” “);
//     return `${arr[0].slice(0, 1)}.${arr[1].slice(0, 1)}`;
// }
// function abbrevName(name) {
//     const arr = name.split(” “);
//     for (let i = 0; i < arr.length; i += 1) {
//         arr[i] = arr[i].slice(0, 1);
//     }
//     return arr.join(“.”) + “.”;
// }
// console.log(abbrevName("Sam Harris"));
// console.log(abbrevName("Patrick Feeney"));

// Порахуй суму чисел, які були передані аргументом у вигляді набору значень
// Виклич функції для перевірки працездатності твоєї реалізації.
// console.log(countSum(1, 2, 3, 4, 5, 6)); // 21
// console.log(countSum(32, 8, 5, 6, 9)); // 60

// function countSum() {
//   console.log(arguments);
//   let result = 0;
//   for (const i of arguments) {
//     result = result + i;
//   }
//   return result;
//   console.log(result);
// }
// console.log(countSum);
// function countSum() {
//     console.log(arguments);
//     let result = 0;
//     const arr = Array.from(arguments);
//     console.log(arr);
//     for (const item of arr) {
//         result += item;
//     }
//     return result;
// }

// Порахуй скільки голосних букв у реченні.
// function countVowel(str) {
//     const vowels = ["a", "e", "i", "o", "u"];
//     const leter = str.toLowerCase().split("");
//     // console.log(leter);
//     let total = 0;

//     for (let item of leter) {
//         if (vowels.includes(item)) {
//             total += 1;
//         }
//     }
//     return total;
//     // console.log(total);
// }
// console.log(countVowel("HELLO WORLD")) // 3
// console.log(countVowel("Junior Web Developer")) // 8
// console.log(countVowel("knowlage is a power")) // 7

// const arr = [1, [5, 6], 3, 4, [7, 7, [2, 3]]];
// function getSum(arr) {
//     let total = 0;
//     for (const item of arr) {
//         if (typeof item === 'number') {
//             total += item;
//         } else {
//             total += getSum(item)
//         }
//     }
//     return total
// }

// console.log(getSum(arr));

// Напишіть функцію isBookAlreadyRead для відображення статусу читання (тобто відображення назви книги, імені автора та статусу читання) наступних книг.Наприклад "Already read " + "book" by author або "You still need to read " + "book" by author
// const library = [
//   {
//     title: "Bill Gates",
//     author: "The Road Ahead",
//     readingStatus: true,
//   },
//   {
//     title: "Steve Jobs",
//     author: "Walter Isaacson",
//     readingStatus: true,
//   },
//   {
//     title: "Mockingjay: The Final Book of The Hunger Games",
//     author: "Suzanne Collins",
//     readingStatus: false,
//   },
// ];
// function isAlreadyRead(library) {
//     for (const book of library) {
//       // console.log(book);
//       // console.log(book.readingStatus);
//       if (book.readingStatus) {
//         console.log(`Already read "${book.title}" by ${book.author}`);
//       } else {
//         console.log(`You still need to read "${book.title}" by ${book.author}`);
//       }
//     }
// }
// isAlreadyRead (library)

// Обнови значення кожної властивості так, що перед сумою стояв знак долара.
// Виводь результат у форматі name: $salary

// const salaries = {
//     Jack: 24000,
//     Paul: 34000,
//     Monica: 55000,
// };
// const prefix = "$";

// // console.log(prefix);
// // for (const key in salaries) {
// //     console.log(salaries[key]);
// //     salaries[key] = prefix + " " + salaries[key];
// // }
// // console.log(salaries);

// const keys = Object.keys(salaries);

// for (const key of keys) {
//     console.log(key);
//     salaries[key] = `$${salaries[key]}`
// }
// console.log(salaries);

// 1 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати списoк імен учнів факультету
// 2 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати кількість очків факультета
// 3 Створити метод об'єкту який буде виводити ім'я факультету в якого більше очків

// const hogvarts = {
//   griffindor: [
//     {
//       name: "Harry",
//       points: 17,
//     },
//     {
//       name: "Hermiona",
//       points: 19,
//     },
//     {
//       name: "Ron",
//       points: 14,
//     },
//   ],
//   sliserin: [
//     {
//       name: "Draco",
//       points: 17,
//     },
//     {
//       name: "Goyl",
//       points: 14,
//     },
//     {
//       name: "Crabbe",
//       points: 5,
//     },
//   ],
//   getStudentsList(nameFaculty) {
//     const names = [];
//     for (const student of this[nameFaculty]) {
//       // console.log(student.name);
//       names.push(student.name);
//     }
//     console.log(names);
//     return names;
//     // console.log(this[nameFaculty]);
//   },
//   getTotalPoints(nameFaculty) {
//     // console.log(nameFaculty);
//     // console.log (this[nameFaculty])
//     let total = 0;
//     for(const student of this[nameFaculty] ) {
//         // console.log(student.points);
//         total += student.points
//     }
//     console.log(total);
//     return total
//   }
// };
// hogvarts.getStudentsList("griffindor");
// hogvarts.getTotalPoints("griffindor")

// const user = {
//   name: "Den",
//   age: 43,
//   skills: {
//     html: true,
//     css: true,
//     js: true,
//   },
// };

// const copy = { ...user };
// copy.name = "Max";
// // copy.skills.js = false;
// console.log(user);
// console.log(copy);
// // JSON.parse(JSON.stringify())
// // Object.assign()

// //https://uk.javascript.info/recursion

// //Єдиний метод без використання бібліотек для ПОВНОГО клонування масиву
// function copyArr(arr) {
//   let res = [];
//   for (let i in arr) {
//     res.push(arr[i]);
//   }
//   return res;
// }
// //Єдиний метод без використання бібліотек для ПОВНОГО клонування об'єкту
// function copyObj(obj) {
//   const res = {};
//   for (let key in obj) {
//     if (typeof obj[key] === "object") {
//       if (obj[key].length !== undefined) {
//         res[key] = copyArr(obj[key]);
//       } else {
//         res[key] = copyObj(obj[key]);
//       }
//     } else {
//       res[key] = obj[key];
//     }
//   }
//   return res;
// }

// const deepClone = copyObj(user);
// console.log(deepClone);

// deepClone.skills.js = false;

// Напиши функцію transformUsername(user) так, щоб вона повертала новий об'єкт із властивістю fullName, замість firstName та lastName. Викоритовуй rest оператор.
// //==================================================rest====
// function transformUsername({ firstName, lastName, ...args }) {
//   return {
//     fullName: `${firstName} ${lastName}`,
//     //===spread==
//     ...args,
//   };
// }
// console.log(
//   transformUsername({
//     id: 1,
//     firstName: "Jacob",
//     lastName: "Mercer",
//     email: "j.mercer@mail.com",
//   })
// );
// const user = {
//   id: 1,
//     firstName: "Jacob",
//     lastName: "Mercer",
//     email: "j.mercer@mail.com",
// }
// //=============================rest===(під час параметрів)
// const {firstName, lastName, ...props} = user;
// //===============spread===============(під час аргументів)
// const user2 = {...props};

// / 1 Створити функцію яка буде приймати 2 параметри
//    1 параметр масив
//    2 параметр назва книги
// Функція повертає Імена юзерів (формат стрінги) в яких є ця книга (“Harry Potter”) \\\ “Anna, Oleksii”
// 2 Порахувати вік всіх юзерів у яких є ключ age.
// const friends = [
//   { name: “Anna”, books: [“Bible”, “Harry Potter”], age: 21 },
//   { name: “Bob”, books: [“War and peace”, “Romeo and Juliet”], age: 26 },
//   { name: “Alice”, books: [“War and peace”, “Romeo and Juliet”] },
//   {
//     name: “Oleksii”,
//     books: [“Bible”, “War and peace”, “Harry Potter”, “Romeo and Juliet”],
//     age: 26,
//   },
// ];
// function sum(arr) {
//   let total = 0;
//   for (let { age } of arr) {
//     if (age) {
//       total += age;
//     }
//   }
//   return total;
// }
// console.log(sum(friends));
// function getUsers(arr, bookName) {
//   let users = [];
//   for (let { name, books } of arr) {
//     if (books.includes(bookName)) {
//       users.push(name);
//       console.log(users);
//     }
//   }
//   return users.join(“, “);
// }
// console.log(getUsers(friends, “Harry Potter”));

// Потрібно створити функцію яка буде приймати 2 параметри
// 1  значення від якої суми робити пошук
// 2  значення до якої суми робити пошук
// Повертає список автомобілів які підпадають під наш пошук


// const cars = [{
//     model: 'Honda',
//     type: 'Civic',
//     price: 12000,
//     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU'
// },
// {
//     model: 'Audi',
//     type: 'Q7',
//     price: 40000,
//     img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg'
// }, {
//     model: 'BMW',
//     type: '5 siries',
//     price: 9000,
//     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU'
// }, {
//     model: 'Honda',
//     type: 'Accord',
//     price: 20000,
//     img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg'
// }, {
//     model: 'Volvo',
//     type: 'XC60',
//     price: 7000,
//     img: 'https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320'
// }
// ]

// function search(start, end) {
//     let modelCars = [];
//     for (const { price, model, type } of cars) {
        
//         if (price >= start && price <= end) {
//             modelCars.push(`${model} ${type}`)
//         }
        
//     }
//     return modelCars;
// }
// console.log(search(5000, 10000));




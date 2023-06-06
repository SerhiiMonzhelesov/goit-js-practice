// Напишіть наступні функції:
// // createProduct(obj, callback) - приймає об'єкт товару без id, а також коллбек. Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор у властивість id та викликає коллбек передаючи йому створений об'єкт.
// // logProduct(product) - колббек приймаючий об'єкт продукту і логуючий його в консоль
// // logTotalPrice(product) - колббек, що приймає об'єкт продукту і логіює загальну вартість товару в консоль
// function createProduct(obj, callback) {
//   const product = {
//     id: Date.now(),
//     ...obj,
//   };
//   // callback(product);
//   console.log(callback);
// }

// function logProduct(goods) {
//   console.log(goods);
// }

// function logTotalPrice({ quantity, price }) {
//   console.log(quantity * price);
// }

// createProduct({ name: "🍎", price: 30, quantity: 3 }, logProduct);
// createProduct({ name: "🍋", price: 20, quantity: 5 }, logTotalPrice);

// =====================================================

//В об'єкта account є методи withdraw(amount, onSuccess, onError) та deposit(amount, onSuccess, onError),
 //де перший параметр це сума операції, а другий та третій - коллбеки.
//Метод withdraw викликає onError якщо amount більше TRANSACTION_LIMIT або this.balance, і onSuccess в іншому випадку.
//Метод deposit викликає onError якщо amount більше TRANSACTION_LIMIT або менше або дорівнює нулю, і onSuccess в іншому випадку.
// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: 'Jacob',
//   balance: 1000,
//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError("perevysheno limit")
//   console.log(onError);
//     } else if (amount > this.balance) {
//       onError("nedostatno na rahunku")
//     }
//     else {
//       this.balance -= amount;
//       onSuccess(`na rahunku ${this.balance}`)
//     }
    

//   },
//   deposit(amount, onSuccess, onError) {

//     if (amount > TRANSACTION_LIMIT) {
//       onError("perevysheno limit")
//     }
//     else if (amount <= 0) {
//       onError("summ maje buty bilshe 0")
//     }
//     else {
//       this.balance += amount;
//       onSuccess(`na washomu rachunku ${this.balance}`)
//     }

//   },
// };

// function handleSuccess(message) {
//   console.log(`✅ Success! ${message}`);
// }

// function handleError(message) {
//   console.log(`❌ Error! ${message}`);
// }



// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

// ==================================================

//Створи стрілочну функцію logItems(), яка виводить в консоль елементи масива, зроби перебір за допомогою методу forEach().


// const logItems = (arr) => {
//   arr.forEach((el, idx, arr)=>{
//     console.log(idx +1, el)
//   })
// }



// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

//===========================================

// const calсulateAverage = (...rest) => {
// //console.log(rest);
// let average = 0;
// rest.forEach(el => average += el);
// return average/rest.length;

// }

// console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
// console.log(calсulateAverage(14, 8, 2)); // 8
// console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2

// ==============================================================

// const calсulateAverage = (...rest) => {
// //console.log(rest);
// let average = 0;
// const result = rest.forEach((el, __, arr) => average += el);
// const result2 = rest.map(el => average + el);
// console.log(result2);
// return average/rest.length;

// }

// console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
// console.log(calсulateAverage(14, 8, 2)); // 8
// console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2


// ====================================================================

// Реалізувати функцію пошуку по товару, функція має повернути рядок в форматі назва товару + ціна
// функція приймає один параметр ID товару

// const instruments = [
//   {
//     id: 1,
//     img: 'https://static.dnipro-m.ua/cache/products/1754/catalog_origin_141546.jpg',
//     name: 'Молоток',
//     price: 150,
//   },
//   {
//     id: 2,
//     img: 'https://static.dnipro-m.ua/cache/products/5098/catalog_origin_195568.jpg',
//     name: 'Перфоратор',
//     price: 3000,
//   },
//   {
//     id: 3,
//     img: 'https://static.dnipro-m.ua/cache/products/2023/catalog_origin_200763.jpg',
//     name: 'Рівень',
//     price: 2000,
//   },
// ];

// function findTools(toolId) {
//   let message = 'not found';
//   instruments.forEach(({ id, name, price }) => {
//     if (id === toolId) {
//       //   console.log(name);
//       message = `${name}, ${price}`;
//       //   console.log(message);
//     }
//     console.log(name);
//   });
//   return message;
// }

// console.log(findTools(1));

// =====================================================================

const users = [
    {
      id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
      name: 'Moore Hensley',
      email: 'moorehensley@indexia.com',
      eyeColor: 'blue',
      friends: ['Sharron Pace'],
      isActive: false,
      balance: 2811,
      skills: ['ipsum', 'lorem'],
      gender: 'male',
      age: 37,
    },
    {
      id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
      name: 'Sharlene Bush',
      email: 'sharlenebush@tubesys.com',
      eyeColor: 'blue',
      friends: ['Briana Decker', 'Sharron Pace'],
      isActive: true,
      balance: 3821,
      skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
      gender: 'female',
      age: 34,
    },
    {
      id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
      name: 'Ross Vazquez',
      email: 'rossvazquez@xinware.com',
      eyeColor: 'green',
      friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
      isActive: false,
      balance: 3793,
      skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
      gender: 'male',
      age: 24,
    },
    {
      id: '249b6175-5c30-44c6-b154-f120923736f5',
      name: 'Elma Head',
      email: 'elmahead@omatom.com',
      eyeColor: 'green',
      friends: ['Goldie Gentry', 'Aisha Tran'],
      isActive: true,
      balance: 2278,
      skills: ['adipisicing', 'irure', 'velit'],
      gender: 'female',
      age: 21,
    },
    {
      id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
      name: 'Carey Barr',
      email: 'careybarr@nurali.com',
      eyeColor: 'blue',
      friends: ['Jordan Sampson', 'Eddie Strong'],
      isActive: true,
      balance: 3951,
      skills: ['ex', 'culpa', 'nostrud'],
      gender: 'male',
      age: 27,
    },
    {
      id: '150b00fb-dd82-427d-9faf-2879ea87c695',
      name: 'Blackburn Dotson',
      email: 'blackburndotson@furnigeer.com',
      eyeColor: 'brown',
      friends: ['Jacklyn Lucas', 'Linda Chapman'],
      isActive: false,
      balance: 1498,
      skills: ['non', 'amet', 'ipsum'],
      gender: 'male',
      age: 38,
    },
    {
      id: 'e1bf46ab-7168-491e-925e-f01e21394812',
      name: 'Sheree Anthony',
      email: 'shereeanthony@kog.com',
      eyeColor: 'brown',
      friends: ['Goldie Gentry', 'Briana Decker'],
      isActive: true,
      balance: 2764,
      skills: ['lorem', 'veniam', 'culpa'],
      gender: 'female',
      age: 39,
    },
];
 
// Отримати; масив; імен; всіх; користувачів(поле, name).
// Отримати масив імен користувачів за статтю (поле gender).

// const getUserNames = users => users.map(({name}) => name);
// console.log(getUserNames(users));
  


// const getUsersWithGender = (users, gender) => users.filter(user => user.gender === gender).map(user => user.name);
// const getUsersWithGender = (users, gender) => users.filter(({gender: genderName}) => genderName === gender).map(({name}) => name);
// console.log(getUsersWithGender(users, 'male'));

// ======================================================================

// Отримати користувача (не масив) по email (поле email, він унікальний).

// const getUserWithEmail = (users, email) =>
//   users.find(({ email: userEmail }) => userEmail === email)?.name;
//   //?. оператор опціональної послідовності
//   //https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Optional_chaining

// console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {об'єкт користувача Sheree Anthony}
// console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {об'єкт користувача Elma Head}

// console.log(getUserWithEmail(users, "elmahead@oqwertymatom.com")); // {об'єкт користувача Elma Head}

// =======================================================================

// Отримати загальну суму балансу (поле balance) всіх користувачів.

// const calculateTotalBalance = users => { };

// Отримати загальну суму балансу (поле balance) всіх користувачів.

// const calculateTotalBalance = (users) =>
//   users.reduce((acc, { balance }) => acc + balance, 0);

// console.log(calculateTotalBalance(users)); // 20916

// ==================================================================


// Масив імен (поле name) людей, відсортованих залежно від кількості їх друзів (поле friends)
// const getNamesSortedByFriendsCount = users => {
//   return [...users]
//     .sort((a, b) => a.friends.length - b.friends.length)
//     .map(({ name }) => name);
// };

// console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// ===================================================================


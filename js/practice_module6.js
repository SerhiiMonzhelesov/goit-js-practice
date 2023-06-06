// Потрібно створити картки продуктів
// const instruments = [{
//     id: 1,
//     img: 'https://static.dnipro-m.ua/cache/products/1754/catalog_origin_261194.jpg',
//     name: 'Молоток',
//     price: 150
// }, {
//     id: 2,
//     img: 'https://static.dnipro-m.ua/cache/products/5587/catalog_origin_190742.jpg',
//     name: 'Перфоратор',
//     price: 3000
// }, {
//     id: 3,
//     img: 'https://static.dnipro-m.ua/cache/products/2299/catalog_origin_261034.jpg',
//     name: 'Рівень',
//     price: 2000
// }]

// const listContainer = document.querySelector('.js-list')
// console.log(listContainer)

// const markUp = instruments.map((el) => {
    
//     const li = document.createElement('li')
//     const img = document.createElement('img')
//     const span = document.createElement('span')
//     const title = document.createElement('h2')

//     img.src = el.img
//     img.alt = el.name
//     img.width = 300
//     span.textContent = el.price
//     title.textContent = el.name

//     li.append(img, title, span)

//     return li
// })

// listContainer.append(...markUp)

// =================================================

// const listContainer = document.querySelector(".js-list");
// const markup = instruments
//     .map(
//         ({ img, name, price }) =>
//             `<li>
//         <img src="${img}" alt="${name}" width="300">
//         <h2>${name}</h2>
//         <span>${price}</span>
//     </li>`
//     )
//     .join("");
// console.log(markup);
// listContainer.insertAdjacentHTML("afterbegin", markup);

// =============================================================

//const listContainer = document.querySelector('.js-list')
// listContainer.style.display = "flex";
// listContainer.style.listStyle = "none"

//listContainer.classList.add("list")
//listContainer.classList.remove("list")

// listContainer.classList.toggle("list")
// listContainer.classList.toggle("list")



// const markUp = instruments.map((el) => {
    
//     const li = document.createElement('li')
//     const img = document.createElement('img')
//     const span = document.createElement('span')
//     const title = document.createElement('h2')

//     img.src = el.img
//     img.alt = el.name
//     img.width = 300
//     span.textContent = el.price
//     title.textContent = el.name

//     li.classList.add("item", "item-style")
//     span.classList.add("text")
//     title.classList.add("title")

//     li.append(img, title, span)

//     return li
// })

// listContainer.append(...markUp)

// const listContainer = document.querySelector(".js-list");
// const markup = instruments
//     .map(
//         ({ img, name, price }) =>
//             `<li class="item item-style">
//         <img src="${img}" alt="${name}" width="300">
//         <h2 class="text">${name}</h2>
//         <span class="title">${price}</span>
//     </li>`
//     )
//     .join("");
// console.log(markup);
// listContainer.insertAdjacentHTML("afterbegin", markup);

// ////////////////////////////////////////////////////////////////

//
// =========================================================
//
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

// const carForm = document.querySelector(".js-form");
// const cardList = document.querySelector(".js-card-list");

// console.log(carForm);
// console.log(cardList);

// function createMarkup(arr) {
//     const markup = arr.map(({ model, type, price, img }) => {
//         return `<li>
//         <img src="${img}" alt="${type}" width="300">
//         <h2>${model}</h2>
//         <h3>${type}</h3>
//         <p>${price}</p>
//       </li>`
//     })
//     // console.log(markup);
//     return markup.join("");
// }

// createMarkup(cars);
// console.log(createMarkup(cars));
// cardList.insertAdjacentHTML("afterbegin", createMarkup(cars));

// ================================================================================

// const cars = [
//   {
//     model: "Honda",
//     type: "Civic",
//     price: 12000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
//   },
//   {
//     model: "Audi",
//     type: "Q7",
//     price: 40000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
//   },
//   {
//     model: "BMW",
//     type: "5 siries",
//     price: 9000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
//   },
//   {
//     model: "Honda",
//     type: "Accord",
//     price: 20000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
//   },
//   {
//     model: "Volvo",
//     type: "XC60",
//     price: 7000,
//     img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
//   },
// ];
// const carForm = document.querySelector(".js-form");
// const carList = document.querySelector(".js-card-list");

// function createMarkup(arr) {
//   const markup = arr.map(
//     ({ model, type, price, img }) =>
//       `<li>
//   <h2>${model}</h2>
//   <h3>${type}</h3>
//   <img src="${img}" alt="${type}" width=300px>
//   <p>${price}</p>
// </li>`
//   );
//   return markup.join("");
// }

// createMarkup(cars);
// carList.insertAdjacentHTML("afterbegin", createMarkup(cars));

// carForm.addEventListener("submit", handlerSubmitForm);

// function handlerSubmitForm(evt) {
//   evt.preventDefault();
//   const { query, type } = evt.currentTarget.elements;
//   const key = type.value;
//   const inputValue = query.value;

//   const searchCars = cars.filter((el) => {
//     console.log(`el[key] - ${el[key]}`, `inputValue - ${inputValue}`);
//     return el[key].toLowerCase() === inputValue.toLowerCase();
//   });
//   carList.innerHTML = createMarkup(searchCars);
// }

// =============================================================================

// const instruments = [{
//   id: 1,
//   img: 'https://static.dnipro-m.ua/cache/products/1754/catalog_origin_261194.jpg',
//   name: 'Молоток',
//   price: 150
// }, {
//   id: 2,
//   img: 'https://static.dnipro-m.ua/cache/products/5587/catalog_origin_190742.jpg',
//   name: 'Перфоратор',
//   price: 3000
// }, {
//   id: 3,
//   img: 'https://static.dnipro-m.ua/cache/products/2299/catalog_origin_261034.jpg',
//   name: 'Рівень',
//   price: 2000
// }]

// //відмалювати картки з продуктами, до кожної картки додати кнопку купити. 
// //Після кліку по картці відобразити (об'єкт в масив) куплені товари/

// const newInstruments = instruments.map(({id, img, name, price})=>{
//   return `<li data-id="${id}" >
//   <img src="${img}" alt="${name}" width = "300">
//   <p>${name}</p>
//   <span>${price}</span>
//   <button type="button" class="buy-btn">Buy</button>
// </li>`
// }).join('');

// const ulCardList = document.querySelector('.card-list');

// ulCardList.insertAdjacentHTML('afterbegin', newInstruments);
// ulCardList.addEventListener('click', handlerCardListClick);

// const basket = [];

// function handlerCardListClick(evt){
//   //console.log(evt.target.value);
//   //console.log(evt.target.classList.contains('buy-btn'));
//   if(!evt.target.classList.contains('buy-btn')) {
//     return
//   };
//   //console.log(evt.target.closest('li'));
//   const eventCurrentLi =  evt.target.closest('li');
//   //console.dir(eventCurrentLi);
//   const productId = eventCurrentLi.dataset.id
//   //console.log(productId);
//   const idCard = instruments.find(({id})=>{
//     return id ===Number(productId);
//  })
//  basket.push(idCard);
//   //console.log(idCard);
//   console.log(basket);
// }

// //console.log(newInstruments);

// // 1. Перебрати даний масив.
// // 2. На кожній ітерації створити шаблон однієї картки.
// // 3. Об'єднати у єдиний рядок.
// // 4. Створити контейнер у HTML (ul).
// // 5. Отримати даний контейнер у js файлі, звертання за класом.
// // 6. Додати у контейнер нашу розмітку.
// // 6.1. li 
// // 6.1.1 додати data атрибут id
// // 6.2. img
// // 6.3  p
// // 6.4 span
// // 6.7 button купити (додати клас)
// // 6.8 Додаємо прослуховувач події (по кліку) на контейнер та реалізуємо делегування подій при умові співпадіння класу і події
// // 6.9 Витягнути ідентифікатор з кнопки, по якій клікнули.
// // 6.10 Співставити ідентифікатор кнопки з об'єктом початквого масиву
// //  та перемістити цей об'єкт до нового масиву(передцим створити загатовку даного масиву).
// // 6.11 показати масив (вивести у консолі)


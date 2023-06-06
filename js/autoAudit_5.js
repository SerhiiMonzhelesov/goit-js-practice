// =============================TEN TEST================

// class Storage {
//   constructor (items){
//     this.items = items
//   }

// getItems(){
//     return this.items
//   }

// addItem(newItem){
//       this.items.push(newItem);}

// removeItem(itemToRemove) {
//     const idxItemToRemove = this.items.indexOf(itemToRemove)
//     this.items.splice(idxItemToRemove, 1)
// }

// }

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// ===============================ELEVEN TEST======================

class StringBuilder {
  constructor(initialValue) {
    this.value = initialValue;
  }

  getValue() {
    return this.value;
  }

  padStart(str) {
    return (this.value = str + this.value);
  }

  padEnd(str) {
    return (this.value += str);
  }

  padBoth(str) {
    return (this.value = str + this.value + str);
  }
}

// Change code above this line
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."

console.log(builder);

builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="

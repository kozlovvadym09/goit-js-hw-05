'use strict'

class Storage {
   constructor(items) {
      this.items = items;
   }
   
   getItems() {
      return this.items;
   }
   
   addItem(item) {
      return items.push(item);
   }
   
   removeItem(item) {
      let index = this.items.indexOf(item);
      if (index > -1) {
         return this.items.splice(index, 1);
      }
   }
}
const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItems();
console.table(items); 

storage.addItem('Дроид');
console.table(storage.items); 

storage.removeItem('Пролонгер');
console.table(storage.items); 
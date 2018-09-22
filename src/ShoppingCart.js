class ShoppingCart {
  constructor() {
    this.items = [];
  }
  getItems() {
    return this.items;
  }
  addItem(itemName, quantity, price) {
    const itemToBeAdded = {
      name: itemName,
      quantity: quantity,
      pricePerUnit: price
    };
    this.items.push(itemToBeAdded);
  }
  clear() {
    this.items = [];
  }
  total() {
    return this.items.reduce(
      (accumulator, itemToProcess) =>
        accumulator + itemToProcess.quantity * itemToProcess.pricePerUnit,
      0
    );
  }
}

module.exports = ShoppingCart;

/**
 *
 *  This is the product class
 *
 */

export default class Product {
  constructor(id, name, type, img, price, quantity, favorited) {
    this._id = id;
    this._name = name;
    this._type = type;
    this._img = img;
    this._price = price;
    this._quantity = quantity;
    this._favorited = favorited;
  }

  set setId(id) {
    this._id = id;
  }
  set setName(name) {
    this._name = name;
  }
  set setType(type) {
    this._type = type;
  }
  set setImg(img) {
    this._img = img;
  }
  set setPrice(price) {
    this._price = price;
  }
  set setQuantity(quantity) {
    this._quantity = quantity;
  }
  set setFavorited(favorited) {
    this._favorited = favorited;
  }

  get getId() {
    return this._id;
  }
  get getName() {
    return this._name;
  }
  get getType() {
    return this._type;
  }
  get getImg() {
    return this._img;
  }
  get getPrice() {
    return this._price;
  }
  get getQuantity() {
    return this._quantity;
  }
  get getFavorited() {
    return this._favorited;
  }

  calculateSubTotal() {
    const SUB_TOTAL = this.getPrice() * this.getQuantity();

    return Math.round(SUB_TOTAL * 100) / 100;
  }
}

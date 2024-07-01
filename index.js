class Hamburger {
  static SIZE_SMALL = { price: 50, calories: 20 };
  static SIZE_BIG = { price: 100, calories: 40 };

  static STUFFING_CHEESE = { price: 10, calories: 20 };
  static STUFFING_SALAD = { price: 20, calories: 5 };
  static STUFFING_POTATO = { price: 15, calories: 10 };

  static TOPPING_SEASONING = { price: 15, calories: 0 };
  static TOPPING_MAYO = { price: 20, calories: 5 };

  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

  calculateCalories() {
    let totalCalories = this.size.calories + this.stuffing.calories;
    this.toppings.forEach((topping) => {
      totalCalories += topping.calories;
    });
    return totalCalories;
  }

  calculatePrice() {
    let totalPrice = this.size.price + this.stuffing.price;
    this.toppings.forEach((topping) => {
      totalPrice += topping.price;
    });
    return totalPrice;
  }
}

let selectedSize = null;
let selectedStuffing = null;
let hamburger = null;

document.getElementById("size_small");
document.addEventListener("change", updateHamburger);
document.getElementById("size_big").addEventListener("change", updateHamburger);
document.getElementById("stuffing_cheese");
document.addEventListener("change", updateHamburger);
document.getElementById("stuffing_salad");
document.addEventListener("change", updateHamburger);
document.getElementById("stuffing_potato");
document.addEventListener("change", updateHamburger);
document.getElementById("topping_seasoning");
document.addEventListener("change", updateHamburger);
document.getElementById("topping_mayo");
document.addEventListener("change", updateHamburger);

function updateHamburger() {
  const sizeSmall = document.getElementById("size_small").checked;
  const sizeBig = document.getElementById("size_big").checked;

  if (sizeSmall) {
    selectedSize = Hamburger.SIZE_SMALL;
  } else if (sizeBig) {
    selectedSize = Hamburger.SIZE_BIG;
  }

  const cheese = document.getElementById("stuffing_cheese").checked;
  const salad = document.getElementById("stuffing_salad").checked;
  const potato = document.getElementById("stuffing_potato").checked;

  if (cheese) {
    selectedStuffing = Hamburger.STUFFING_CHEESE;
  } else if (salad) {
    selectedStuffing = Hamburger.STUFFING_SALAD;
  } else if (potato) {
    selectedStuffing = Hamburger.STUFFING_POTATO;
  }

  if (selectedSize && selectedStuffing) {
    hamburger = new Hamburger(selectedSize, selectedStuffing);
  } else {
    return;
  }

  const seasoning = document.getElementById("topping_seasoning").checked;
  const mayo = document.getElementById("topping_mayo").checked;

  if (seasoning) {
    hamburger.addTopping(Hamburger.TOPPING_SEASONING);
  }
  if (mayo) {
    hamburger.addTopping(Hamburger.TOPPING_MAYO);
  }

  document.getElementById("total_price").innerText = hamburger.calculatePrice();
  document.getElementById("total_calories").innerText =
    hamburger.calculateCalories();
}

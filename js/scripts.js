// Business Logic
function Pizza(size, toppings, cost) {
  this.pizzaSize = size;
  this.pizzaToppings = toppings;
  this.pizzaCost = cost;
}
function Address(name, street, city, state) {
  this.inputName = name;
  this.street = street;
  this.city = city;
  this.state = state;
}

Pizza.prototype.calculateSizeCost = function() {
  if (this.pizzaSize === "Small") {
    this.pizzaCost += 8
  } else if (this.pizzaSize === "Medium") {
    this.pizzaCost += 12
  } else if (this.pizzaSize === "Large") {
    this.pizzaCost += 15
  }
}
Pizza.prototype.calculateToppingsCost = function() {
  if (this.pizzaToppings.length <= 2) {
    this.pizzaCost += 0
  } else if (this.pizzaToppings.length > 2 && this.pizzaToppings.length <=4) {
    this.pizzaCost += 3
  } else if (this.pizzaToppings.length > 4) {
    this.pizzaCost += 6
  }
}
Address.prototype.fullAddress = function() {
  return this.street + ", " + this.city + ", " +this.state;
}
// UI Logic
$(document).ready(function() {
//   $("form").click(function(event) {
//     event.preventDefault();
//   });

  $("form").submit(function(event) {
    event.preventDefault();

    var inputSize = $("#pizzaSizeSelect").val();
    var toppingsArray = [];
    $(".toppingSelect input:checked").each(function() {
      toppingsArray.push($(this).val());
    });
    var newPizza = new Pizza(inputSize, toppingsArray, 0);
    newPizza.calculateSizeCost();
    newPizza.calculateToppingsCost();

    var inputName = $("input.userName").val();
    var inputStreet = $("input.new-street").val();
    var inputCity = $("input.new-city").val();
    var inputState = $("input.new-state").val();
    newAddress = new Address(inputName, inputStreet, inputCity, inputState);
    console.log(newPizza);
    console.log(newAddress);
    console.log(newAddress.fullAddress());
    console.log(newPizza.pizzaCost);
  });
});

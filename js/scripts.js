// Business Logic
function Pizza(size, crust, toppings, cost) {
  this.pizzaSize = size;
  this.pizzaCrust = crust;
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
Pizza.prototype.calculateCrustCost = function() {
  if (this.pizzaCrust === "Thin-crust") {
    this.pizzaCost -= 1
  } else if (this.pizzaCrust === "Regular-Crust") {
    this.pizzaCost += 0
  } else if (this.pizzaCrust === "Deep-Dish") {
    this.pizzaCost += 1
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
  $("#buttonToPizzaPage").click(function(event) {
    event.preventDefault();
    $("#landingPage").fadeOut();
    setTimeout(function(){$("#pizzaBuilderPage").fadeIn();}, 350);

  });

  $("#buttonToAddressPage").click(function(event) {
    event.preventDefault();
    $("#pizzaBuilderPage").fadeOut();
    setTimeout(function(){$("#addressInputPage").fadeIn();}, 450);
  });

  $("form").submit(function(event) {
    event.preventDefault();
    var inputSize = $("#pizzaSizeSelect").val();
    var inputCrust = $("#pizzaCrustSelect").val();
    var toppingsArray = [];
    $(".toppingSelect input:checked").each(function() {
      toppingsArray.push($(this).val());
    });
    var newPizza = new Pizza(inputSize, inputCrust, toppingsArray, 0);
    newPizza.calculateSizeCost();
    newPizza.calculateCrustCost();
    newPizza.calculateToppingsCost();

    var inputName = $("input.userName").val();
    var inputStreet = $("input.new-street").val();
    var inputCity = $("input.new-city").val();
    var inputState = $("input.new-state").val();
    newAddress = new Address(inputName, inputStreet, inputCity, inputState);

    $("#addressInputPage").fadeOut();
    setTimeout(function(){$("#finalOrderPage").fadeIn();}, 350);
    $("#nameDisplay").text(newAddress.inputName);
    $("#sizeDisplay").text(newPizza.pizzaSize);
    $("#crustDisplay").text(newPizza.pizzaCrust);
    $("#costDisplay").text(newPizza.pizzaCost);
    $("#toppingsDisplay").text(newPizza.pizzaToppings);
    $("#addressDisplay").text(newAddress.fullAddress());

  });
});

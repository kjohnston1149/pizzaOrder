// Business Logic
function Pizza(size, toppings, cost) {
  this.pizzaSize = size;
  this.pizzaToppings = toppings;
  this.pizzaCost = cost;
}

// UI Logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var inputSize = $("#pizzaSizeSelect").val();
    var toppingArray = [];
    $(".toppingSelect input:checked").each(function() {
      toppingArray.push($(this).val());
    });
    var newPizza = new Pizza(inputSize, toppingArray, 0);
    console.log(newPizza);
    console.log(toppingArray);
  });
});

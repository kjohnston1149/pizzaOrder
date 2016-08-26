# _Pizza Order_

#### _An application to create customize pizza orders, August 26 2016_

#### By _**Kevin Johnston**_

## Description

_This app allows the user to create their own customized pizza and have the order tied to their address.  The user first selects the size of pizza they want, along with crust type and toppings.  This information is placed in a JavaScript object and used to calculate the price of the pizza.  The user also must enter their name and address for delivery.  This information, along with the calculated price, is displayed on the final page of the website._

## Setup/Installation Requirements

1. Clone this repository at:
  * https://github.com/kjohnston1149/pizzaOrder
2. Move into the project folder
3. Open index.html in the browser of your choice (we suggest Chrome)
4. To view on web browser, open GitHub pages webpage of this application: https://kjohnston1149.github.io/pizzaOrder/

## Specifications

* Create an initial object from form inputs.
  * Example Input: [Large, medium (selected), small], [Thin-crust(selected), Regular-Crust Deep-Dish],[Cheese (selected), Pepperoni (selected), Anchovies]
  * Example Output: newPizza{"Large", Thin-crust, ["Cheese", "Pepperoni"], 0}

* Calculate the cost based on size property in object.
  * Example Input: Large, medium (selected), small], [Cheese (selected), Pepperoni (selected), Anchovies]
  * Example Output: newPizza{"Large", Thin-crust, ["Cheese", "Pepperoni"], 12}

* Calculate the cost using  size, crust, and toppings properties in object.
  * Example Input: Large, medium (selected), small], [Cheese (selected), Pepperoni (selected), Anchovies]
  * Example Output: newPizza{"Large", Thin-crust, ["Cheese", "Pepperoni"], 11}

* Create an Address object that includes name and specific address.
  * Example Input: Name: Kevin, Street: 123 Fake St, City: Portland, State: OR
  * Example Output: newAddress {"Kevin", "123 Fake St", "Portland", "OR"}

* Create a prototype to display the address in common format
  * Example Input: newAddress.fullAddress();
  * Example Output: 123 Fake St, Portland, OR


## Known Bugs

_There are no known bugs at this time._

## Support and contact details

_For help, contact:_
* [kjohnston1149@gmail.com](mailto:kjohnston1149@gmail.com)

## Technologies Used

_This application uses HTML, CSS, JavaScript & jQuery, Bootstrap_

### License

This website is licensed under the MIT license

Copyright (c) 2016 **_Kevin Johnston_**

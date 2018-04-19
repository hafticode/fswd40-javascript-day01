document.write("<h1> Intermediate Exercise 1 | Arrays </h1>")

var cars = ['Tesla', 'Audi', 'Renault', 'Volvo', 'Mazda', 'Fiat', 'Ferrari'];

console.log(cars.sort());
document.write(cars.sort());

document.write("<br>")

document.write("<h1> Intermediate Exercise 2 | Fruits and Animal Arrays </h1>")


var fruits = [' apple', ' banana', ' kiwi'];
var animals = [' monkey', ' horse', ' dog'];

fruits.push(' orange');

console.log(fruits);
document.write(fruits);

fruits.pop('orange');

document.write("<br>");

console.log(fruits);
document.write(fruits);

animals.sort();

document.write("<br>");

console.log(animals);
document.write(animals);

animals.unshift(' cat');

document.write("<br>");

console.log(animals);
document.write(animals);

document.write("<br>");

document.write("<h1> Intermediate Exercise 3 | String manipulation </h1>")

var a = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon";
var temp = new Array();
temp = a.split('/').join("<br>" + "<br>");

document.write(temp);
console.log(temp);

document.write("<h1> Advanced Exercise 1 | Arrays Sum </h1>")

document.write("<h2> Sum </h2>")


//Exercise Sum 

var a = 7;

var b = 14;

var c = "21";

var d = '36';

var e = 42;


/*var temp = Number(c);

var temp2 = Number(d);


console.log(temp);

console.log(temp2);*/

var sum = a + b + Number(c) + Number(d) + e;

console.log(sum);

document.write(sum);

document.write("<br>")


//Exercise multiplication 

document.write("<h2>  Multiplication </h2>")


var f = '1';

var g = 15;

var h = 8;

var i = "1";

var multi = Number(1) * g * 8 * Number(i);

console.log(multi);

document.write(multi);

//Division 

document.write("<h2>  Division </h2>")

var div = multi/sum;
document.write(div);



//Exercise 2

document.write("<h1> Advanced Exercise 2 | Multidimensional Array </h1>")


var numbers = [ 
[1, 2, 1, 24], 
[8, 11, 9, 4], 
[7, 0, 7, 27], 
[7, 4, 28, 14], 
[3, 10, 25, 7], 
[21, 4, 6, 17], 
[3, 5, 26, 3] 
]


document.write(numbers[1][1]+" " +numbers[4][2]+" " +numbers[5][3]+" " +numbers[2][3]+" " +numbers[2][1]);


document.write("<h1> Advanced Exercise 3 | String Manipulation </h1>")

document.write("<br>")

//Exercise 3 String variation 

/*var V= "With the online map of Vienna you can easily navigate through Vienna."

var temp4 = V.substring (23,29);

var temp5 = V.substring (62,68);


document.write("<br>");


console.log(temp4+" "+temp5);

document.write(temp4+" "+temp5);*/



var Vienna= "With the online map of Vienna you can easily navigate through Vienna.";

var res = Vienna.match(/Vienna/g);

var res2 = new Array();

res2 = res

document.write(res2[0]+ "<br>" + res2[1]);















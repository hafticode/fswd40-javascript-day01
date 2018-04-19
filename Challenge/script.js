document.write("<h1>Challenge 1 | Multidimensional array </h1>")

var multi = [
['Vienna', ' ', ' ', ' ' ,' '], 
['\u00a0', 'is', ' ', ' ' ,' '],
['\u00a0', '\u00a0', 'a', ' ' ,' '],
['\u00a0', '\u00a0', '\u00a0', 'nice' ,' '], 
['\u00a0', '\u00a0', '\u00a0', '\u00a0' ,'city']
];

document.write(multi[0][0] + ' ' + multi[0][1] + ' ' + multi[0][2] + ' ' + multi[0][3] + ' ' + multi[0][4]);
document.write('<br>');
document.write(multi[1][0] + ' ' + multi[1][1] + ' ' + multi[1][2] + ' ' + multi[1][3] + ' ' + multi[1][4]);
document.write('<br>');
document.write(multi[2][0] + ' ' + multi[2][1] + ' ' + multi[2][2] + ' ' + multi[2][3] + ' ' + multi[2][4]);
document.write('<br>');
document.write(multi[3][0] + ' ' + multi[3][1] + ' ' + multi[3][2] + ' ' + multi[3][3] + ' ' + multi[3][4]);
document.write('<br>');
document.write(multi[4][0] + ' ' + multi[4][1] + ' ' + multi[4][2] + ' ' + multi[4][3] + ' ' + multi[4][4]);


document.write("<h1>Challenge 2 | String Manipulation </h1>")


document.write("<br>");

var a = "Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$\"properties $flow$down;$actions$flow$up";
var temp = new Array();
temp = a.split('$').join("\n");

document.write(temp);
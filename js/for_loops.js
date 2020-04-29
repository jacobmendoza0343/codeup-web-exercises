"use strict";
function ShowMultiplicationTable(){}
for (var i = 1; i <= 10; i++) {

    console.log( "7" + "x" + i  ,7 * i);
}

for (var i = 1; i <= 10; i ++){
     var random = Math.floor(Math.random() * 200 - 20 + 1) + 20;

    var evenOrOdd = "";
    if (random % 2 === 0){
        evenOrOdd = " is even";
    } else {
        evenOrOdd = " is odd";
    }
    console.log(random + evenOrOdd)

}

for (var i = 1; i <=9; i ++){
    var output = "";
    for (var j = 1; j <= i; j ++){
        output += i;
    }
    console.log(output);
}



for (var i = 100; i >= 5; i--){
    if ((i % 5) == 0)
    console.log( i  )
}
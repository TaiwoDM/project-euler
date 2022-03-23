"use strict";

let a = 0, b = 1, c, sum = 0;

// while the term in the fibonacci sequence is not greater than 4000000
while (b <= 4000000) {
    // summing the two previous values i.e a and b and generating new values after each iteration thereby generating the fibonacci term
    c = a + b;
    a = b;
    b = c;

    // is the fibinacci term an even number
    if (c % 2 == 0) {
        sum += c;
    }
}

// console.log(sum);

// variable sum now hold the sum of the even terms in the fibonacci sequence whose values do not exceed 4000000 i.e 4613732
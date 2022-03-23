"use strict";

let a = 0, b = 1, c, sum = 0;

// while the term in the fibonacci sequence is not greater than 4000000
while (b <= 4000000) {
    c = a + b;
    a = b;
    b = c;
}

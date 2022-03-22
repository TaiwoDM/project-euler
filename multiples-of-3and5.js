'use strict';

let sum = 0;

// void function to generates natural numbers lower than 1000 and sum up the multiples of 3 and 5 among them
const getMultiples = () => {
    for (let i = 1; i < 1000; i ++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum += i;
        };
    };
} 

getMultiples();


// sum now holds 233168
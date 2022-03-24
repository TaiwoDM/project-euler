// function to check if the passed in argument is a prime number
function isPrime(n) {
    let all = 0

    for (i = 1; i <= n; i ++) {
        if (n % i == 0) all++;
    }
    if (all == 2) return true;
}

let n = 1;
const number = 100;
const primes = [];

// iterating 1 to variable number times to find the prime factors of the variable number
while (n <= number ) {
    if(number  % n == 0 && isPrime(n)) {
        primes.push(n);
    }
    n++;
}

const max_prime = Math.max(...primes)
// console.log(max_prime)

// variable max_prime contains the maximum prime factor of number


// A very inefficient solution to large numbers like 600851475143 given in project euker
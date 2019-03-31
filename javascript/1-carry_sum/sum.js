"use strict";

let sum = (function sum_reduce(accumulator, x) {
    if (x !== undefined)
        return sum_reduce.bind(undefined, accumulator + x);
    else
        return accumulator;
}).bind(undefined, 0);


// tests
console.assert(sum() === 0, "sum from 1 to 0 = 0");
console.assert(sum(1)() === 1, "1 = 1");
console.assert(sum(1)(2)() === 1 + 2, "1 + 2");
console.assert(sum(1)(2)(3)() === 1 + 2 + 3, "1 + 2 + 3");
console.assert(sum(222)(123)(1000)() === 222 + 123 + 1000, "222 + 123 + 1000");
console.assert(sum(-123)(256)() === -123 + 256, "-123 + 256");
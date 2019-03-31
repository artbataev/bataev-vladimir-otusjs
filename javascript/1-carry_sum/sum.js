"use strict";

const sum = (function sum_reduce(accumulator, x) {
    if (x !== undefined)
        return sum_reduce.bind(undefined, accumulator + x);
    else
        return accumulator;
}).bind(undefined, 0);

module.exports.sum = sum;

import { curry } from '..';

// sum :: (Number, Number) -> Number
const sum = (a, b) => a + b;

// sum :: Number -> Number -> Number
const curriedSum = curry(sum);

// sum :: Numer -> Number
const add10 = curriedSum(10);

console.log(
    sum(1, 2)
);

console.log(
    curriedSum(1)(2)
);

console.log(
    add10(5)
);

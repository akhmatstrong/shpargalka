```
function sum(a, b, c) {
    return a + b + c;
}

function curry(fn) {
    return function curried(...args) {
        if(args.length >= fn.length) {
            return fn.apply(this, args);
        }
    return curried.bind(this, ...args);
    }
}

let curriedSum = curry(sum);
// console.log(curriedSum(1, 2, 3));
console.log(curriedSum(1)(2)(3));
```

```
function sum(a, b, c) {
    return a + b + c;
}

function curry(fn) {
    return function curried(...args) {
        if(args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            return (...args2) => {
                return curried.apply(this, args.concat(args2));
            };
        };
    };
}

const curriedSum = curry(sum);
const curriedFirstIs = curriedSum(2); // sum(2, b, c)
// console.log(curriedFirstIs(2, 2)) // => 6
console.log(curriedFirstIs(2)(2)) // => 6
```

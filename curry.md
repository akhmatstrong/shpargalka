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
/* console.log(curriedSum(1, 2, 3)); */
console.log(curriedSum(1)(2)(3));
```

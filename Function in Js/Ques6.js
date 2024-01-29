function curry(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
         
            return func(...args);
        } else {
           
            return function (...nextArgs) {
                return curried(...args, ...nextArgs);
            };
        }
    };
}


function addNumbers(x, y) {
    return x + y;
}


const curriedAdd = curry(addNumbers);


const result1 = curriedAdd(3)(4); 

console.log(result1); 
const result2 = curriedAdd(3, 4); 
console.log(result2); 
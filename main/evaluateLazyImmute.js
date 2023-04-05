'use strict';

class Lazy {
    constructor() {
        this.functionalArgs = [];
    }
    
    // In this implementation, the add function creates a new 
    // Lazy instance and copies the current operations array into it, 
    // along with the new function that's being added. 
    // This ensures that the original Lazy instance remains 
    // unchanged, and allows for chaining of operations.
    add(...args) {
        const lazy = new Lazy();
        lazy.functionalArgs = [...this.functionalArgs, args];
        
        return lazy;
    }

    // This evalates all the methods in the add, and returns a final array
    evaluate(target) {   
        let evaluatedResults = [];

        // target can be a non-array item as well
        target.forEach(evalItem => {
            let resultPerOperation = evalItem;

            this.functionalArgs.forEach(functionItems => {
                const myFunction = functionItems[0];
    
                if(functionItems.length > 1) {
                    // Getting all the items starting from index 1 -> till the length - 1, 
                    // which is the argument being passed for example [fn(a,b) { return a * b }, 1]
                    resultPerOperation = myFunction(...functionItems.slice(1), resultPerOperation);
                    return;
                }
    
                resultPerOperation = myFunction(resultPerOperation);
            });

            // Finally adding the outcome of the operation
            evaluatedResults.push(resultPerOperation);
        });

        return evaluatedResults;
    }
}

const compute = new Lazy();

const finalEvaluedResults = 
compute.add(function twoTimes(a) { return a * 2 })
.add(function addItems(a, b, c) { return a + b + c }, 2, 3)
.evaluate([1, 2, 3]);

console.log(finalEvaluedResults);

module.exports = Lazy;
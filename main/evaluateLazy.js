'use strict';

class Lazy {
    constructor() {
        this.functionalArgs = [];
    }

    // This function adds up the functions passed into the method
    // ...args is a spread operator, which helps us accept any 
    // number of arbitrary arguments, which is the requirement
    add(...args) {
        this.functionalArgs.push(args);
        return this;
    }

    // This evalates all the methods in the add, and returns a final array
    evaluate(target) {    
        let evaluatedResults = [];

        // target can be a non-array item as well
        if(target instanceof Array){
            target.forEach(evalItem => {
                let resultPerOperation = evalItem;
    
                this.functionalArgs.forEach(functionItems => {
                    const myFunction = functionItems[0];
        
                    if(functionItems.length > 1) {
                        resultPerOperation = myFunction(functionItems[1], resultPerOperation);
                        return;
                    }
        
                    resultPerOperation = myFunction(resultPerOperation);
                });
    
                // Finally adding the outcome of the operation
                evaluatedResults.push(resultPerOperation);
            });
        }else {
            let resultPerOperation = target;
            this.functionalArgs.forEach(functionItems => {
                const myFunction = functionItems[0];

                if(functionItems.length > 1) {
                    resultPerOperation = myFunction(functionItems[1], resultPerOperation);
                    return;
                }

                resultPerOperation = myFunction(resultPerOperation);
            });

            // Finally adding the outcome of the operation
            evaluatedResults.push(resultPerOperation);
        }


        // This approach is much cleaner then using console.log()
        // More efficient in testing as well.
        return evaluatedResults;
    }
}

// NOTE: If you want to just test the code from here, please uncomment
// the below code, and test it as per your convenience. 
// const compute = new Lazy();
// const finalEvaluedResults = 
// compute.add(function twoTimes(a) { return a * 2})
// .add(function addItems(a, b) { return a + b}, 1)
// .evaluate([1,2,3])

// console.log(finalEvaluedResults);

module.exports = Lazy;
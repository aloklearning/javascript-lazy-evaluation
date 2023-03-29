const Lazy = require('./evaluateLazy');

describe('Lazy', () => {
    test('returns an array of results with non-zero length', () => {
        const compute = new Lazy();
        const finalResults =
            compute.add(function plus(a, b) { return a + b }, 1).evaluate([1]);

        
        expect(finalResults.length).toBe(1);
        expect(finalResults instanceof Array).toBe(true);
    });

    test('returns [3,5,7] for plus and twoTimes add functions with length 3', () => {
        const compute = new Lazy();
        const finalResults = 
        compute.add(function twoTimes(a) { return a * 2})
        .add(function plus(a, b) { return a + b }, 1)
        .evaluate([1, 2, 3]);

        expect(finalResults.length).toBe(3);
        expect(finalResults).toStrictEqual([3,5,7]);
    });

    test('returns [6, 15] for minus and threeTimes add functions with length 2', () => {
        const compute = new Lazy();
        const finalResults = 
        compute.add(function threeTimes(a) { return a * 3})
        .add(function minus(a, b) { return Math.abs(a - b) }, 6)
        .evaluate([3, 6]);

        expect(finalResults.length).toBe(2);
        expect(finalResults).toStrictEqual([3, 12]);
    });

    test('returns a data when no argument is passed for inbuilt method', () => {
        const compute = new Lazy();
        const finalResults = 
        compute.add(Math.sqrt)
        .evaluate([4]);

        expect(finalResults).toStrictEqual([2]);
    });
});


describe('Lazy Failure', () => {
    test('returns an error message when no argument is passed in evaluate', () => {
        const compute = new Lazy();
        const finalResults = 
        compute.add(Math.sqrt)
        .evaluate();

        expect(finalResults).toStrictEqual('Invalid evaluate argument.' 
        + ' Please provide of an array of number and try again');
    });

    test('returns an error message when an empty array is passed in evaluate', () => {
        const compute = new Lazy();
        const finalResults = 
        compute.add(Math.sqrt)
        .evaluate([]);

        expect(finalResults).toStrictEqual('Invalid evaluate argument.' 
        + ' Please provide of an array of number and try again');
    });
})
## Lazy Evaluation

- This coding challenge solves a very interesting algorithmic problem known as **Lazy Evaluation**.
- Lazy evaluation is an evaluation strategy which delays the evaluation of an expression until its value is needed.

### Checklists

- [x] Constructor. Creates a new instance of a Lazy which models a lazy computation.
- [x] The add function can receive an arbitrary number of arguments.
- [x] You should be able to chain together calls to `add` and `evaluate`.
- [x] Don't be defensive about the degenerate cases (E.g. bad / missing arguments).
- [x] `evaluate` returns an array containing the result of applying the chain of functions to the
      array target.
- [x] In `evaluate` the functions should be applied in the order they were added to the `Lazy` instance.
- [x] The `Lazy` algorithm code is well tested with all the test cases mentioned in the test file.
- [x] The solution is not a copy-paste from [Google](https://google.com/).
- [x] `.git` folder has been added to the project, along with commits being added which can be found via typing `git log -a` in the terminal.
- [x] The project has not been published to any `GitHub` repo.

### Built With

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Programming language Used to create this project
- [Jest](https://jestjs.io/) - For Unit Test Cases

### Pre-Requisites

- **[Optional]** Have `node` and `npm` installed in your system _(if you'd like to test the project using jest)_

### Running the project

- **[Optional]** Please run `npm install` to first install all the dependencies to be able to successfully run the project _(if you'd like to run the test and see the testcases passing based upon the conditions provided)_.
  - Please confirm whether you have node installed in your system by running `node -v` and `npm -v`.
- To run the file simply go inside the directory `main` in your terminal and do node `evaluateLazy.js`. Please make sure to uncomment the code in the last to see the results.
- **[Optional and depenedent on the first point]** To run the test simply in the root directory run this command `npm run test`.

### Output Format

- Output will be in a format of **Array of Integers** which is below:

```bash
[ 3, 5, 7 ]
```

- For **successfull unit test cases** running, this will be the output:

```bash
 PASS  main/evaluateLazy.test.js
  ...

Test Suites: 1 passed, 1 total
Tests:       6 passed, 6 total
Snapshots:   0 total
Time:        0.22 s, estimated 1 s
Ran all test suites.
```

- For **failure unit test cases**, this will be the output:

```bash
Lazy › returns a data when no argument is passed for inbuilt method

...

Test Suites: 1 failed, 1 total
Tests:       1 failed, 5 passed, 6 total
Snapshots:   0 total
Time:        0.31 s, estimated 1 s
Ran all test suites.
```

### Assumptions

- `target` argument will always be an array and cannot be provided as number/integer to `evaluate`. As the statement in the project guideline mentioned it clearly: When the function is called it will be called with the remaining arguments supplied to add (if any) followed by a single argument that will be an item from the **target array supplied to evaluate**.
- The function passed as an argument to `add()` will have **atmost two arguments required only** because of the following pointers:

  - _When the function is called it will be called with the remaining arguments supplied to add (if any) followed by a **single argument** that will be an item from the target array supplied to evaluate._

    - Considering this statement, one argument will be this **argument picked from target array**, and **another one is being used while doing the computation of the evaluate value via the add functions** for better computation. And in case a third item argument will be required in the function, I struggled to find out an information regarding the same in the argument passing instruction mentioned.

    ```javascript
    compute.add(function fn(a, b) { return a + b }, 3).evaluate([2, 3]);

    // This can computed as in the first iteration
    fn(1, 1) { return 2 + 3 } // results in 5
    ```

- **[Mentioned in the problem document]** add was called at least once (I.e. don't account for the case where the Lazy instance had no functions added to it).
- The `add()` functional first argument will alwasy receive the single constant argument provided in the `add()` _(the below code example gave the assumptions source)_

```javascript
add(plus(a, b) { return a + b; }, 1) // a plus function that will be given 1 as its first argument
```

### Edge Case Handling

- For an empty or undefined argument in `evaluate`, the program will throw an error message, mentioning the what went wrong.
- This is also tested in the test suite.

### Links

- Please goto [Node](https://nodejs.org/en/download/) to install node for your system to be able to run the app. For more information on installation of mac, do follow [this](https://nodejs.org/en/download/package-manager/) link

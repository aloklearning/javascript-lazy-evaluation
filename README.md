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
- [x] Add the `README.md` file and write code documentation that could add value to it.

### Built With

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Programming language Used to create this project
- [Jest](https://jestjs.io/) - For Unit Test Cases

### Pre-Requisites

- Have `node` and `npm` installed in your system

### Running the project

- Please run `npm install` to first install all the dependencies to be able to successfully run the project _(if you'd like to run the test and see the testcases passing based upon the conditions provided)_.
  - Please confirm whether you have node installed in your system by running `node -v` and `npm -v`.
- To run the file simply go inside the directory `main` in your terminal and do node `evaluateLazy.js`. Please make sure to uncomment the code in the last to see the results.
- **[Optional and depenedent on the first point]** To run the test simply in the root directory run this command `npm run test`.

### Output Format

- Output will be in a format of **Array of Integers** with the length of the `evaluate` argument array provided, which is below:

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

- `target` argument will always be an array and cannot be provided as number/integer to `evaluate`. As the statement in the project guideline mentioned it clearly: _When the function is called it will be called with the remaining arguments supplied to add (if any) followed by a single argument that will be an item from the **target array supplied to evaluate**_.

- There is no need of handling the edge cases ofr `evaluate` and `add()` args, following the documents statement: _Don't be defensive about the degenerate cases (E.g. bad / missing arguments)_.

- **[Mentioned in the problem document]** `add` was called at least once (i.e. don't account for the case where the Lazy instance had no functions added to it).
- The `add()` functional arguments will always receive the integer/number constant arguments for the first nth arguments provided in the `add()` followed by the `evaluation` constant value picked from the argument `target` _(the below code example gave the assumptions source)_

```javascript
add(plus(a, b) { return a + b; }, 1) // a plus function that will be given 1 as its first argument
```

### Links

- Please goto [Node](https://nodejs.org/en/download/) to install node for your system to be able to run the app. For more information on installation of mac, do follow [this](https://nodejs.org/en/download/package-manager/) link

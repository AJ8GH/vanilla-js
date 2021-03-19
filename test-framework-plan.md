# Testing Framework

extract the tests and results from the suite:

```js
let test;

describe(testGroup, () => {
test = new Test(testGroup);
});

it(test, () => {
test.it = test;
});

expect((actual) => {
  toEqual: (expected) => {
    if(actual === expected) {
      test.result
    }
  }
});
```

template the tests through the interface


1. create a variable `let itCount = 0`
2. increment the count at the start of each it block
3. create a test instance each it
4. assign it to a variable named `'test' + itCount`
5. create

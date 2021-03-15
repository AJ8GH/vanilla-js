function describe(testGroup, callback) {
  console.log(`=== Test group: ${testGroup} ===`)
  return callback();
}

function it(test, result) {
  console.log(`Test: ${test}`);
  result();
}

function expect(actual) {
  return {
    toEqual: function(expected) {
      if(actual == expected) {
        console.log('* PASS')
      } else {
        console.log('* FAIL')
        console.log(`expected ${actual} to equal ${expected}`)
      }
    },

    toNotEqual: function(expected) {
      if(actual != expected) {
        console.log('* PASS')
      } else {
        console.log('* FAIL')
        console.log(`expected ${actual} to not equal ${expected}`)
      }
    },

    toBe: function(expected) {
      if(actual === expected) {
        console.log('* PASS')
      } else {
        console.log('* FAIL')
        console.log(`expected ${actual} to be ${expected}`)
      }
    },

    toNotBe: function(expected) {
      if(actual !== expected) {
        console.log('* PASS')
      } else {
        console.log('* FAIL')
        console.log(`expected ${actual} to not be ${expected}`)
      }
    }
  }
}

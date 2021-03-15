const describe = (testGroup, callback) => {
  console.log(`=== Test group: ${testGroup} ===`)
  return callback();
}

const it = (test, result) => {
  console.log(`Test: ${test}`);
  result();
}

const expect = (actual) => {
  return {
    toEqual: (expected) => {
      if(actual == expected) {
        console.log('* PASS')
      } else {
        console.log('* FAIL')
        console.log(`expected ${actual} to equal ${expected}`)
      }
    },

    toNotEqual: (expected) => {
      if(actual != expected) {
        console.log('* PASS')
      } else {
        console.log('* FAIL')
        console.log(`expected ${actual} to not equal ${expected}`)
      }
    },

    toBe: (expected) => {
      if(actual === expected) {
        console.log('* PASS')
      } else {
        console.log('* FAIL')
        console.log(`expected ${actual} to be ${expected}`)
      }
    },

    toNotBe: (expected) => {
      if(actual !== expected) {
        console.log('* PASS')
      } else {
        console.log('* FAIL')
        console.log(`expected ${actual} to not be ${expected}`)
      }
    }
  }
}

function failureCallback() {
  console.log('Something bad happened')
}

function doSomething(cb, reject) {
  let result = Math.random()
  setTimeout(() => cb(result), 3000)
}

function doSomethingElse(value, cb, reject) {
  setTimeout(() => cb(value), 2000)
}

function doThirdThing(value, cb, reject) {
  setTimeout(() => cb(value), 1000)
}

doSomething(function(result) {
  doSomethingElse(result, function(newResult) {
    doThirdThing(newResult, function(finalResult) {
      console.log('Got the final result: ' + finalResult);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);

console.log('---\nhello world')

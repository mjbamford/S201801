function doSomething() {
  return new Promise((resolve, reject) => {
    let result = Math.random()
    setTimeout(() => resolve(result), 3000)
  })
}

function doSomethingElse(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(value), 2000)
  })
}

function doThirdThing(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Got the final result: ' + value);
      reject() // or reject()
    }, 1000)
  })
}

doSomething().
  then(result => doSomethingElse(result)).
  then(result => doThirdThing(result)).
  catch(() => { console.log('error')})

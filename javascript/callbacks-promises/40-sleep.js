function sleep (time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

function hello() {
  return new Promise((resolve, reject) => {
    sleep(500).then(() => {
      (Math.random() > 0.5) ? resolve('done') : reject('error')
    })
  })
}

let promise = hello()

promise.
  then(
    message => { console.log(`message=${message}`) },
    error => { console.log(`error=${error}`) }
  )

promise.
  then(
    message => { console.log('success') },
    error => { console.log('bad luck!') }
  )

console.log('---\nhello world')

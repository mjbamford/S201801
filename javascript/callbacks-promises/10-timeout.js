function doSomething(cb) {
    let delay = 1500 // milliseconds
    let func = function () {
        let result = [1, 2, 3]
        console.log('doSomething()')
        cb(result)
    }
    console.log('start')
    setTimeout(func, delay)
}

let finished = function (result) {
    console.log(result)
    console.log('done')
}

doSomething(finished)
function error (message) {
    console.log(`error: ${message}`)
}

function doSomething(success, failure) {
    const result = Math.random()
    if (result > 0.5) {
        success(result)
    } else {
        failure(result)
    }
}

function doSomethingElse (value, success, failure) {
    (Math.random > 0.6) ? success(value) : failure(value)
}

function doSomethingNew (value, success, failure) {
    (Math.random > 0.7) ? success(value) : failure(value)
}

function doSomethingFinally (value, success, failure) {
    (Math.random > 0.8) ? success(value) : failure(value)
}

for (i = 0; i < 100; i++) {
    doSomething(
        function(result) {
            doSomethingElse(result,
                function (result) {
                    doSomethingNew(result,
                        function () {
                            doSomethingFinally(result,
                                function(result) {
                                    console.log(`success: ${result}`)
                                },
                                error
                            )
                        },
                        error
                    )
                },
                error
            )
        },
        error
    )
}
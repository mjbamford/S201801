(function() {
    new Promise((resolve, reject) => {
        setTimeout(() => { 
            const result = Math.random()
            if (result > 0) {
                console.log(result)
                resolve(result)
            } else {
                reject("You fool! You've done something wrong!")
            }
        }, 1500)
    }).then((value) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                value = value * 2
                console.log(`resolved to ${value}`)
                resolve(value)
            }, 1500)
        })
    }).then((value) => { 
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                value = value * 10
                console.log(`resolved to ${value}`)
                resolve(value)
            }, 1500)
        })
    }).then((finalValue) => {
        console.log(`final value=${finalValue}`)
    }).catch(
        (message) => { console.log(message) }
    )
})()
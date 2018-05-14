let obj = {
    add: function(x, y) {
        return x + y;
    },

    multiple: function(x ,y) {
        return x * y;
    }
}

let calc = function calc(func, x, y) {
    return func(x, y);
}

// let result = calc(obj.add, 665, 1);
// let result = calc(obj["add"], 665, 1);
let operation = prompt('What calculation do you want to do?')
let result = calc(obj[operation], 665, 1);
console.log(result);
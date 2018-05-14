let sum = 0;
// `a` is the array of numbers to sum up.
// What hapens when we delete a member of the array?
// I.e.  `delete a[1]`
// What happens if we replace an element with an
// empty string? I.e. `a[1] = ''`
let a = [ 1, 2, 3 ]
for (let i = 0; i < a.length; i++) {
    if (isNaN(a[i])) {
        console.log('not a number')
    } else {
        sum += a[i]
    }
};
alert(sum);
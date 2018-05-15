let person1 = {
    name: { first: 'John', last: 'Smith' },
    fullName: function() {
        return this.name.first + ' ' + this.name.last
    }
}

let person2 = {
    name: { first: 'Jane', last: 'Smith' }
}

function makePerson(firstName, lastName) {
    let obj = {}
    obj.name = {}
    obj.name.first = firstName
    obj.name.last = lastName
    Object.setPrototypeOf(obj, person1)
    return obj
}

// person2.__proto__ = person1 // Bad practice
// person2.[[Prototype]] = person1 // No valid (documentation-style syntax)
// Object.setPrototypeOf(person2, person1) // Very common
// person2 = Object.create(person1, { name: { first: 'Jane', last: 'Smith' }}) // V very common

inspect(makePerson('Jack', 'Smyth'))
inspect(makePerson('Adam', 'Ant'))

function inspect(p) {
    console.log(p.name.first)
    console.log(p.name.last)
    console.log(p.fullName())
}
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
    // Set the __proto__ (referred in the documentation as [[Prototype]]
    // obj.__proto__ = person1 // The black-art way
    Object.setPrototypeOf(obj, person1) // Better way
    return obj
}

// Different ways to set the prototype
// person2.__proto__ = person1 // Bad practice
// person2.[[Prototype]] = person1 // No valid (documentation-only syntax)
// Object.setPrototypeOf(person2, person1) // Very common
// person2 = Object.create(person1, { name: { first: 'Jane', last: 'Smith' }}) // V very common

inspect(makePerson('Jack', 'Smyth'))
inspect(makePerson('Adam', 'Ant'))

function inspect(p) {
    console.log(p.name.first)
    console.log(p.name.last)
    console.log(p.fullName())
}

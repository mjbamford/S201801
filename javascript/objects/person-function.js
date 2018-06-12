function Person(firstName, lastName) {
    this.name = {}
    this.name.first = firstName
    this.name.last = lastName
}

Person.prototype.fullName = function() {
    return this.name.first + ' ' + this.name.last
}

person1 = new Person('Burt', 'Lancaster')
person2 = new Person('Charlie', 'Chocolate')

inspect(person1)
inspect(person2)

Person.prototype.manager = false

inspect(person1)
inspect(person2)

function inspect(p) {
    // console.log(p.name.first)
    // console.log(p.name.last)
    console.log(p.fullName())
    console.log(p.manager)
}

person2.manager = true
inspect(person1)
inspect(person2)
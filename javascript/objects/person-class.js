class Person {
    constructor(firstName, lastName) {
        this.name = {}
        this.name.first = firstName
        this.name.last = lastName
    }

    fullName() {
        return this.name.first + ' ' + this.name.last
    }
}

person = new Person('John', 'Citizen')
console.log(person.fullName())

class Manager extends Person {
    constructor(firstName, lastName, age) {
        super(firstName, lastName)
        this.age = age
    }
}

person = new Manager('John', 'Manager', 26)
console.log(person.fullName())
console.log(person.age)
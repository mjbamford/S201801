class Person
    attr_accessor :name

    def initialize(firstName, lastName)
        @name = { first: firstName, last: lastName }
    end

    def fullName
        "#{@name[:first]} #{@name[:last]}" 
    end
end

class Manager < Person
end

person1 = Person.new 'John', 'Citizen'
puts person1.name[:first]
puts person1.name[:last]
puts person1.fullName

person1 = Person.new 'Jane', 'Citizen'
puts person1.name[:first]
puts person1.name[:last]
puts person1.fullName
class Dog
    attr_reader :name, :gender, :breed
    attr_accessor :age, :location

    # class << self
    #   class methods here
    # end
    def self.count
      # Count all dogs in existence
    end

    def self.all
      # Return all dogs ever created
    end

    def self.find id
      # Find a single dog by its id
    end

    def self.where **args
      # Find dogs where color, breed, etc equals the args provided
    end

    def initialize(gender, breed, name: nil, age: nil, location: nil)
        @gender = gender
        @breed = breed
        @name = name
        @age = age
        @location = location
        @walks = 0
    end

    def walk
        @walks += 1
        self
    end

    def display_walks
        suffix = @walks == 1 ? '' : 's'
        "I have been on #{@walks} walk#{suffix} today"
    end

    def ==(other)
        other.breed.== @breed
    end

    def name?
        !@name.nil?
    end

    def name=(value)
        if value.nil? then
            # Ignore value; output an error message
        else
            @name = value
        end
    end

    def birthday
        message = @birthday.nil? ? "" : "not"
        "Birthday is #{message} nil"
    end
end

dog1 = Dog.new :female, :husky, name: 'Sugar'
dog2 = Dog.new :male, :husky, name: 'Ralph'

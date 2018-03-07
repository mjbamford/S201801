class Turtle
    def initialize arena
        @arena = arena
    end

    def forward
        @arena.forward self
    end

    def backward
        @arena.backward self
    end

    def location
        @arena.location
    end
end
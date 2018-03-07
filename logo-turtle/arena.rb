class Arena
    def initialize
        @turtle_x = 0
    end

    def forward turtle
        @turtle_x += 1
    end

    def backward turtle
        @turtle_x -= 1
    end

    def location
        @turtle_x
    end
end
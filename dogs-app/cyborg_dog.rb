require_relative 'dog'
require_relative 'refuelable'

class CyborgDog < Dog
    include Refuelable

    def initialize name:
        super :borg, :cyborg, name: name
        @birthday = "1/5/2015"
    end

    def self.all
        message = super
        puts [ message, 'and in CyborgDog::all' ].join(' ')
    end
end
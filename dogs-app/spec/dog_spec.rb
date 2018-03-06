require_relative '../dog'

RSpec::describe Dog do
    let(:dog) { Dog.new :female, :husky }

    it "should respond to walk" do
        expect(dog).to respond_to :walk
    end

    it "should count the number of walks" do
        expect(dog.walk).to eq "I have been on 1 walk today"
        expect(dog.walk).to eq "I have been on 2 walks today"
    end
end
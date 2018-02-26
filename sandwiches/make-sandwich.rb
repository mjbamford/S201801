def make_sandwich(type: "jam", number_of_sandwiches: 2)
    array = []
    array << "open bread"
    array << "take #{number_of_sandwiches * 2} pieces of bread"
    array << "open #{type} jar"
    array << "if there is #{type} in jar"
    array << "otherwise cry"
    array << "pick up knife by handle"
    array << "stick knife in #{type} jar"
    array << "smear bread"
    array << "enjoy!"
    array
end
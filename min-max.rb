random_numbers = []
max = 0
min = nil # Why not 0?

for i in 1..100 do
    random_number = rand(1000)
    # random_numbers += [ random_number ]
    # Following line is an error
    random_numbers = random_numbers + [ random_number ]
end

for i in random_numbers do
    if i > max
        max = i
    end

    if min == nil
        min = i
    elsif i < min
        min = i
    end
end

puts "The maximum number = #{max}"
puts "The mininum number = #{min}"
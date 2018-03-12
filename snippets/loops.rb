
a = [1, nil, 2, 5, 10, 65]
sum = 0

for i in a do
    sum += i unless i.nil?
end

puts sum
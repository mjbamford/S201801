def total value_1, value_2
  result = yield value_1, value_2
  "The total is #{result}"
end

t = total(4,4) do |v1, v2|
  v1 + v2
end

puts t

orders = [
  { item: 'apple watch', price: 677.00 },
  { item: 'android watch', price: 500.00 },
]

t = total orders[0], orders[1] do |v1, v2|
  v1[:price] + v2[:price]
end

puts t

t_with_gst = total orders[0], orders[1] do |v1, v2|
  sum = v1[:price] + v2[:price]
  sum * 1.1
end

puts t_with_gst

string_length = total orders[0], orders[1] do |v1, v2|
  v1[:item].length + v2[:item].length
end

puts string_length

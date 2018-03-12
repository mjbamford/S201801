STUDENT_AGE = 21
RETIREMENT_AGE = 65
GERIATRIC_AGE = 85

puts "What is your age?"
age = gets
age = age.to_i
puts "Your age is #{age}"

# Use the case statement to figure out the message
# to show the user.
message = case
    when age < STUDENT_AGE then 
        "you still got to study"
    when age < RETIREMENT_AGE then 
        "you still got to work"
    when age < GERIATRIC_AGE then 
        "you lucky bastard!"
    else
        "you'll soon be dead"
end

message += "\n"
message += age < 18 ? 'child' : 'adult'

puts message
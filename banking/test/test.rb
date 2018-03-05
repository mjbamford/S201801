require 'colorize'

module Test
  module_function
  def expect actual, message, expected
    if actual == expected then 
      puts "  PASS #{message}".colorize(:green)
    else
      puts "  FAIL #{message} expected #{expected}, but got #{actual}".colorize(:red)
    end
  end

  def subject subject_name
    puts subject_name
  end
end

require_relative 'dispatch'

module Bank
  module_function
  def prompt
    puts "What would you like to do?"
    gets.chomp
  end

  def welcome
    puts "Welcome to the banking app"
  end

  def start
    balance = 0.0
    begin
      balance, finished = Dispatch.execute prompt, balance
    end until finished
  end
end

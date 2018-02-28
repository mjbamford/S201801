module Deposit
  DEPOSIT_COMMAND = 'deposit'

  module_function
  def make balance
    puts "How much would you like to deposit?"
    deposit = gets.chomp.to_f
    puts "Your balance is $#{balance + deposit}"
    deposit
  end
end

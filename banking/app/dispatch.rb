require_relative 'balance'
require_relative 'deposit'
require_relative 'help'

module Dispatch
  EXIT_COMMAND = 'exit'

  module_function
  def execute command, balance
    finished = false

    if command == Balance::BALANCE_COMMAND
      Balance.show balance
    elsif command == Deposit::DEPOSIT_COMMAND
      balance += Deposit.make balance
    elsif command == Help::HELP_COMMAND
      Help.show
    elsif command == EXIT_COMMAND
      puts "Good bye"
      finished = true
    else
      puts 'Invalid selection'
    end

    [ balance, finished ]
  end
end

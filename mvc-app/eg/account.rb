class Account
  attr_reader :account_number, :balance

  def initialize
    @account_number = (rand * 10 ** 6).to_i
    @balance = 0.0
  end
end

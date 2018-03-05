class Account
  attr_reader :account_number, :balance

  def initialize balance
    @balance = balance
    @account_number = (rand * 1000000).to_i
  end

  def self.open
    new 1000.0
  end

  def deposit amount
    @balance += (amount > 0 ? amount : 0)
  end

  def withdraw
  end

  def open?
    true
  end

  def close
  end
end

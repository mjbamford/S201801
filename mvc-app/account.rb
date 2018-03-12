class Account
  # Class methods
  def self.all
    @accounts
  end

  def self.find account_number
    @accounts.detect do |account|
      account.account_number == account_number
    end
  end

  def self.create
    account = new
    # if @accounts.nil? then
    #   puts "creating @accounts"
    #   @accounts = []
    # else
    #   puts "@accounts already exists"
    # end
    @accounts = @accounts || []
    # @accounts ||= []
    @accounts << account
    account
  end

  # - - - - - - - -
  # Instance methods
  attr_reader :account_number, :balance

  def initialize
    @account_number = (rand * 10 ** 6).to_i
    @balance = 0.0
  end

  def deposit amount
    @balance += amount
  end
end

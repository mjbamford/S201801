require_relative '../account'

RSpec.describe Account do
  it "should create a new account" do
    account = Account.new 0.0
    expect(account).to be_an_instance_of Account
  end

  it "should have the correct balance" do
    balance = 666.66
    account = Account.new balance
    expect(account.balance).to eq balance
  end

  it "should have a bonus deposit of $1000.00 when open is called" do
    account = Account.open
    expect(account.balance).to eq 1000.00
  end

  it "should respond to deposit" do
    account = Account.new 666
    expect(account).to respond_to :deposit
  end

  it "should respond to widthdraw" do
    account = Account.new 666
    expect(account).to respond_to :withdraw
  end

  it "should accept a deposit" do
    account = Account.new 666
    account.deposit 100
    expect(account.balance).to eq (666 + 100)
  end

  it "should not accept negative deposits" do
    account = Account.new 666
    account.deposit -100
    expect(account.balance).to eq 666
  end

  it "should allow withdrawl"
end

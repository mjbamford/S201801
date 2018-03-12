class AccountView
  def render accounts
    accounts.each do |account|
      puts "Account Number: #{account.account_number} balance: #{account.balance}"
    end
  end
end

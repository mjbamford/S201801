require_relative 'account'
require_relative 'account_view'

class AccountController
  def index
    puts Account.all
  end
end

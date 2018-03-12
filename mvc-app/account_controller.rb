require_relative 'account'
require_relative 'account_view'

class AccountController
  def index
    accounts = Account.all
    # if params[:sort_by] == :balance then
    #   accounts.sort_by { :balance }
    # end

    if params[:format] == :text then
      view = View.new
      view.render accounts
    elsif params[:format] == :sms then
      view = SmsView.new
      view.render accounts
    end
  end

  def show
    # Account.find params[:account_number]
  end

  # New
  # Create
  # Edit (provide the account number)
  # Update (provide the account number)
  # Destroy (provide the account number)
end

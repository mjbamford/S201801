require_relative 'account_controller'

module Router
  def self.start
    while true
      print '> '
      prompt = gets.chomp
      if prompt == 'GET /accounts' then
        puts AccountController.all
      end
    end
  end
end

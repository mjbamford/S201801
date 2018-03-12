
module Outer
  module Inner
    module_function
    def hello
      "inner hello"
    end
  end

  module_function
  def hello
    ["outer hello", Inner::hello ]
  end
end

pp Outer::hello

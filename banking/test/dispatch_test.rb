require_relative '../app/dispatch'

module DispatchTest
  module_function
  def test_for_dispatch
    Test.subject "Dispatch#execute"

    expected_balance = 666.66
    actual = Dispatch.execute 'balance', expected_balance
    # number_of_steps = sandwich.length
    # expect(number_of_steps, "number of steps", 9)
    #
    # step_2 = sandwich[1]
    # expect step_2, "step 2", "take 4 pieces of bread"
    #
    # step_3 = sandwich[2]
    # expect step_3, "step 3", "open cheese jar"
  end
end

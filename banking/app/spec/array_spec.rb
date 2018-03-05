RSpec.describe "An array" do
  it "should add up its contents" do
    array = [ 1, 2, 3 ]
    expect(array.sum).to eq 6
  end
  it "should have 1 at the first position" do
    array = [ 1, 2, 3 ]
    expect(array.first).to eq 1
  end
end

class CreateAddresses < ActiveRecord::Migration[5.1]
  def change
    create_table :addresses do |t|
      t.integer :user_id, null: false, index: true
      t.string :street_number
      t.string :street_name
      t.string :suburb
      t.string :postcode
      t.timestamps
    end
  end
end

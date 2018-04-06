class User < ApplicationRecord
  validates :first_name, presence: true
  validates :last_name, uniqueness: true
  has_one :address
  accepts_nested_attributes_for :address
end

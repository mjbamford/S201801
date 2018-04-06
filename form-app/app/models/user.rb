class User < ApplicationRecord
  validates :first_name, presence: true
  validates :last_name, uniqueness: true

  has_many :addresses
end

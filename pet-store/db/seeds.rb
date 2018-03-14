# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Product.create([
  {
    name: 'Dog Food',
    sku: 'DOG666',
    price: 50.06
  },
  {
    name: 'CAT Food',
    sku: 'CAT666',
    price: 66.06

  },
  {
    name: 'Fish Food',
    sku: 'FCHDOG666',
    price: 10.06
  }
])

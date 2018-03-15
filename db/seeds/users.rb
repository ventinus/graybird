# frozen_string_literal: true

User.delete_all

## Users
puts "  - Users"
5.times do
  User.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    phone_number: Faker::PhoneNumber.phone_number,
    email: Faker::Internet.email
  )
end

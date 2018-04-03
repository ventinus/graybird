# frozen_string_literal: true

Client.delete_all

## Clients
puts "  - Clients"
25.times do
  Client.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    phone_number: Faker::PhoneNumber.phone_number,
    email: Faker::Internet.email
  )
end

# frozen_string_literal: true

Administrator.delete_all

## Administrators
puts "  - Administrators"
Administrator.create({
  first_name: 'jon',
  last_name: 'gray',
  email: 'admin@canvas.is',
  password: 'password',
  confirmed_at: Time.zone.now
})

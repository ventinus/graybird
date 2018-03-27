# == Schema Information
#
# Table name: clients
#
#  id                      :integer          not null, primary key
#  first_name              :string
#  last_name               :string
#  phone_number            :string
#  email                   :string
#  notes                   :text
#  preferred_communication :integer          default("email")
#  confirmed               :boolean          default(FALSE)
#  contacted               :boolean          default(FALSE)
#  created_at              :datetime         not null
#  updated_at              :datetime         not null
#  price_min               :integer          default(0)
#  price_max               :integer          default(1000000)
#  message                 :text
#

FactoryGirl.define do
  factory :client do
    first_name    { Faker::Name.first_name }
    last_name     { Faker::Name.last_name }
    phone_number  { Faker::PhoneNumber.phone_number }
    email         { Faker::Internet.email }
  end
end

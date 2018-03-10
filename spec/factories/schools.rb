# == Schema Information
#
# Table name: schools
#
#  id              :integer          not null, primary key
#  kind            :integer          not null
#  name            :string           not null
#  address         :string           not null
#  city            :string           not null
#  state           :string           not null
#  zip             :string           not null
#  neighborhood_id :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

FactoryGirl.define do
  factory :school do
    kind      { 'elementary' }
    name      { 'Abernethy (K-5)' }
    address   { Faker::Address.street_address }
    city      { Faker::Address.city }
    state     { 'OR' }
    zip       { Faker::Address.zip }
    neighborhood
  end
end

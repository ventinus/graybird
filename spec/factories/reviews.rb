# == Schema Information
#
# Table name: reviews
#
#  id              :integer          not null, primary key
#  body            :text
#  client_id       :integer
#  neighborhood_id :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

FactoryGirl.define do
  factory :review do
    body { Faker::Lorem.paragraphs(2) }
    client
    neighborhood
  end
end

# == Schema Information
#
# Table name: client_neighborhoods
#
#  id              :integer          not null, primary key
#  neighborhood_id :integer
#  client_id       :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

FactoryGirl.define do
  factory :client_neighborhood do
    association :client
    association :neighborhood
  end
end

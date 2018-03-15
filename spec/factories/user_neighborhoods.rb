# == Schema Information
#
# Table name: user_neighborhoods
#
#  id              :integer          not null, primary key
#  neighborhood_id :integer
#  user_id         :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

FactoryGirl.define do
  factory :user_neighborhood do
    association :user
    association :neighborhood
  end
end

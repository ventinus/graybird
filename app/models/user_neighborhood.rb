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

class UserNeighborhood < ApplicationRecord
  belongs_to :user
  belongs_to :neighborhood
end

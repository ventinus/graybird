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

class Review < ApplicationRecord
  belongs_to :client
  belongs_to :neighborhood
end

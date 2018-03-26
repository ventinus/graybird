# == Schema Information
#
# Table name: client_neighborhoods
#
#  id              :integer          not null, primary key
#  neighborhood_id :integer
#  client_id         :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class ClientNeighborhood < ApplicationRecord
  belongs_to :client
  belongs_to :neighborhood
end

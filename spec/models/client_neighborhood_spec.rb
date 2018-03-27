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

require 'rails_helper'

RSpec.describe ClientNeighborhood, type: :model do
  it { is_expected.to belong_to(:client) }
  it { is_expected.to belong_to(:neighborhood) }
end

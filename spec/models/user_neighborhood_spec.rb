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

require 'rails_helper'

RSpec.describe UserNeighborhood, type: :model do
  it { is_expected.to belong_to(:user) }
  it { is_expected.to belong_to(:neighborhood) }
end

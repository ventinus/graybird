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

require 'rails_helper'

RSpec.describe Review, type: :model do
  context 'associations' do
    it { is_expected.to belong_to(:client) }
    it { is_expected.to belong_to(:neighborhood) }
  end
end

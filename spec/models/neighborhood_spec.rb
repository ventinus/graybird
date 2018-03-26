# == Schema Information
#
# Table name: neighborhoods
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  description :text
#  region_id   :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'rails_helper'

RSpec.describe Neighborhood, type: :model do
  context 'validations' do
    it { is_expected.to validate_presence_of(:name) }
  end

  context 'associations' do
    it { is_expected.to belong_to(:region) }
    it { is_expected.to have_many(:listings) }
    it { is_expected.to have_many(:schools) }
    it { is_expected.to have_many(:clients).through(:client_neighborhoods) }
  end
end

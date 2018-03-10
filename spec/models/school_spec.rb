# == Schema Information
#
# Table name: schools
#
#  id              :integer          not null, primary key
#  kind            :integer          not null
#  name            :string           not null
#  address         :string           not null
#  city            :string           not null
#  state           :string           not null
#  zip             :string           not null
#  neighborhood_id :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'rails_helper'

RSpec.describe School, type: :model do
  context 'validations' do
    it { is_expected.to validate_presence_of(:kind) }
    it { is_expected.to validate_presence_of(:name) }
    it { is_expected.to validate_presence_of(:address) }
    it { is_expected.to validate_presence_of(:city) }
    it { is_expected.to validate_presence_of(:state) }
    it { is_expected.to validate_presence_of(:zip) }
  end

  context 'associations' do
    it { is_expected.to belong_to(:neighborhood) }
    it { is_expected.to have_many(:listings).through(:neighborhood) }
  end
end

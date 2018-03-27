# == Schema Information
#
# Table name: clients
#
#  id                      :integer          not null, primary key
#  first_name              :string
#  last_name               :string
#  phone_number            :string
#  email                   :string
#  notes                   :text
#  preferred_communication :integer          default("email")
#  confirmed               :boolean          default(FALSE)
#  contacted               :boolean          default(FALSE)
#  created_at              :datetime         not null
#  updated_at              :datetime         not null
#  price_min               :integer          default(0)
#  price_max               :integer          default(1000000)
#  message                 :text
#

require 'rails_helper'

RSpec.describe Client, type: :model do
  context 'associations' do
    # it { is_expected.to have_many(:listings) }
    it { is_expected.to have_many(:reviews) }
    it { is_expected.to have_many(:client_neighborhoods) }
    it { is_expected.to have_many(:neighborhoods).through(:client_neighborhoods) }
  end
end

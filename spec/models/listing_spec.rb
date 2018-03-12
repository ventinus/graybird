# == Schema Information
#
# Table name: listings
#
#  id                    :integer          not null, primary key
#  property_type         :integer          not null
#  rmls_number           :integer          not null
#  role                  :integer          not null
#  price                 :integer          not null
#  address               :string           not null
#  unit                  :string
#  zip                   :string           not null
#  city                  :string           not null
#  state                 :string           not null
#  status                :integer          not null
#  bedrooms              :integer          not null
#  bathrooms             :decimal(, )      not null
#  description           :text             not null
#  sq_feet               :integer
#  year_built            :string
#  garage_size           :integer
#  garage_type           :integer
#  water                 :integer
#  sewer                 :integer
#  hot_water             :integer
#  heating               :integer
#  cooling               :integer
#  property_taxes        :decimal(, )
#  hoa_dues              :integer          default(0)
#  hoa_frequency         :integer
#  community_description :text
#  neighborhood_id       :integer
#  created_at            :datetime         not null
#  updated_at            :datetime         not null
#  slug                  :string
#

require 'rails_helper'

RSpec.describe Listing, type: :model do
  context 'validations' do
    it { is_expected.to validate_presence_of(:property_type) }
    it { is_expected.to validate_presence_of(:rmls_number) }
    it { is_expected.to validate_presence_of(:role) }
    it { is_expected.to validate_presence_of(:price) }
    it { is_expected.to validate_presence_of(:address) }
    it { is_expected.to validate_presence_of(:zip) }
    it { is_expected.to validate_presence_of(:city) }
    it { is_expected.to validate_presence_of(:state) }
    it { is_expected.to validate_presence_of(:status) }
    it { is_expected.to validate_presence_of(:bedrooms) }
    it { is_expected.to validate_presence_of(:bathrooms) }
    it { is_expected.to validate_presence_of(:description) }
  end

  context 'associations' do
    it { is_expected.to belong_to(:neighborhood) }
    it { is_expected.to have_many(:schools).through(:neighborhood) }
    it { is_expected.to have_many(:photos) }
  end
end

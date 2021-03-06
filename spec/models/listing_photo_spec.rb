# == Schema Information
#
# Table name: listing_photos
#
#  id         :integer          not null, primary key
#  image_data :text
#  position   :integer
#  caption    :string
#  listing_id :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'rails_helper'

RSpec.describe ListingPhoto, type: :model do
  context 'associations' do
    it { is_expected.to belong_to(:listing) }
  end
end

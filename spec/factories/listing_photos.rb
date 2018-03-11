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

FactoryGirl.define do
  factory :listing_photo do
    
  end
end

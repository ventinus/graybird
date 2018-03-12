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
    caption { Faker::Lorem.sentence }
    position 1
    image   {
      fixture_file_upload(
        Rails.root.join('spec', 'fixtures', 'images', 'receipt.png'),
        'image/png'
      )
    }
    listing
  end
end

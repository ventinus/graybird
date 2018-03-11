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

class ListingPhoto < ApplicationRecord
  include ImageUploader::Attachment.new(:image)
  acts_as_list scope: :listing

  validates_presence_of :image_data
end

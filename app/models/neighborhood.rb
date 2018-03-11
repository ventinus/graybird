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

class Neighborhood < ApplicationRecord
  belongs_to :region
  has_many :listings, dependent: :destroy
  has_many :schools, dependent: :destroy

  validates_presence_of :name
end

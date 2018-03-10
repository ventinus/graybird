# == Schema Information
#
# Table name: regions
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Region < ApplicationRecord
  has_many :neighborhoods, dependent: :destroy

  validates_presence_of :name
end

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

class School < ApplicationRecord
  belongs_to :neighborhood
  has_many :listings, through: :neighborhood

  enum kind: [:kindergarten, :elementary, :middle, :high, :programs_alternatives, :k_5, :k_8]
  validates_presence_of :name, :kind, :address, :city, :state, :zip
end

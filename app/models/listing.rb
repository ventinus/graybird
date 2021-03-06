# == Schema Information
#
# Table name: listings
#
#  id                    :integer          not null, primary key
#  property_type         :integer          not null
#  rmls_number           :integer          not null
#  role                  :integer          not null
#  price                 :integer          not null
#  address               :citext           not null
#  unit                  :citext
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

class Listing < ApplicationRecord
  extend FriendlyId

  belongs_to :neighborhood
  has_many :schools, through: :neighborhood
  has_many :photos, -> { order(position: :asc) }, foreign_key: 'listing_id', class_name: 'ListingPhoto', dependent: :destroy
  accepts_nested_attributes_for :photos, allow_destroy: true

  enum property_type: [:detached, :condo, :townhouse]
  enum status: [:active, :bumpable, :canceled, :expired, :pending, :sold, :sold_not_listed, :withdrawn]
  enum garage_type: [:garage_attached, :garage_detached, :carport, :garage_shared, :no_garage]
  enum water: [:water_public, :well, :water_public_private]
  enum sewer: [:sewer_public, :septic, :cesspool, :party_line]
  enum hot_water: [:electric, :gas, :propane, :tank, :tankless, :hot_water_other]
  enum hoa_frequency: [:one_time, :monthly, :quarterly, :six_month, :annually]
  enum role: [:buyer_agent, :listing_agent]
  enum heating: [:forced_air]
  enum cooling: [:central_air, :window, :no_cooling]

  validates_presence_of :property_type, :role, :rmls_number, :price, :address, :zip, :city, :state, :status, :bedrooms, :bathrooms, :description
  before_create :unique_full_address

  friendly_id :full_address, use: :slugged

  def full_address
    "#{address} #{unit}".strip
  end

  def city_state_zip
    "#{city}, #{state} #{zip}"
  end

  private

  def unique_full_address
    Listing.all.map(&:full_address).exclude? full_address
  end
end

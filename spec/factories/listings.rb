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

FactoryGirl.define do
  factory :listing do
    property_type   { 'detached' }
    rmls_number     { 123456789 }
    role            { 'buyer_agent' }
    price           { 555555 }
    address         { Faker::Address.street_address }
    unit            { '2A' }
    zip             { '11111' }
    city            { Faker::Address.city }
    state           { 'OR' }
    status          { 'active' }
    bedrooms        { 2 }
    bathrooms       { 2.0 }
    description     { Faker::Lorem.paragraphs(2) }
    neighborhood
  end
end

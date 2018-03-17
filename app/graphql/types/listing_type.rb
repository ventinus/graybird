# frozen_string_literal: true

Types::ListingType = GraphQL::ObjectType.define do
  name "Listing"

  field :id, !types.ID
  field :property_type, !types.String
  field :rmls_number, !types.Int
  field :role, !types.String
  field :price, !types.Int
  field :address, !types.String
  field :unit, types.String
  field :zip, !types.String
  field :city, !types.String
  field :state, !types.String
  field :status, !types.String
  field :bedrooms, !types.Int
  field :bathrooms, !types.Float
  field :description, !types.String
  field :sq_feet, types.Int
  field :year_built, types.String
  field :garage_size, types.Int
  field :garage_type, types.String
  field :water, types.String
  field :sewer, types.String
  field :hot_water, types.String
  field :heating, types.String
  field :cooling, types.String
  field :property_taxes, types.Float
  field :hoa_dues, types.Int
  field :hoa_frequency, types.String
  field :community_description, types.String
  field :created_at, types.String
  field :updated_at, types.String
end

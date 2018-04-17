Types::MutationType = GraphQL::ObjectType.define do
  name "Mutation"

  field :create_client, Types::ClientType do
    description "An example field added by the generator"
    argument :first_name, types.String
    argument :last_name, types.String
    argument :phone_number, types.String
    argument :email, types.String
    argument :message, types.String

    resolve -> (_, args, _) {
      client = Client.new(
        first_name: args[:first_name],
        last_name: args[:last_name],
        phone_number: args[:phone_number],
        email: args[:email],
        message: args[:message]
      )
      client.save
      client
    }
  end

  field :update_listing, Types::ListingType do
    description "Updates a listing"
    argument :id, types.ID
    argument :property_type, types.String
    argument :rmls_number, types.Int
    argument :role, types.String
    argument :price, types.Int
    argument :address, types.String
    argument :unit, types.String
    argument :zip, types.String
    argument :city, types.String
    argument :state, types.String
    argument :status, types.String
    argument :bedrooms, types.Int
    argument :bathrooms, types.Float
    argument :description, types.String
    argument :sq_feet, types.Int
    argument :year_built, types.String
    argument :garage_size, types.Int
    argument :garage_type, types.String
    argument :water, types.String
    argument :sewer, types.String
    argument :hot_water, types.String
    argument :heating, types.String
    argument :cooling, types.String
    argument :property_taxes, types.Float
    argument :hoa_dues, types.Int
    argument :hoa_frequency, types.String
    argument :community_description, types.String
    argument :neighborhood, types.String
    # argument :photos, types[Types::ListingPhotoType]

    resolve -> (_, args, _) {
      listing = Listing.find(args[:id])
      updates = args.to_h.except("id").merge({
        "neighborhood" => Neighborhood.find_by(name: args[:neighborhood])
      })
      listing.update_attributes(updates)
      listing
    }
  end

  field :destroy_resource_items, types[types.ID] do
    description "Destroy the record of a resource"
    argument :resource, !types.String
    argument :ids, !types[types.ID]

    resolve -> (_, args, _) {
      args[:resource].singularize.capitalize.constantize.where(id: args[:ids]).destroy_all.pluck(:id)
    }
  end
end

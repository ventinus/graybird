Types::QueryType = GraphQL::ObjectType.define do
  name "Query"

  field :listings, types[Types::ListingType] do
    description "An array of listings"
    resolve -> (_, args, _) {
      Listing.all
    }
  end

  field :listing, Types::ListingType do
    description "An array of listings"
    argument :id, types.ID
    argument :rmls_number, types.Int
    argument :address, types.String
    argument :unit, types.String

    resolve -> (_, args, _) {
      Listing.find_by({
        id: args[:id],
        rmls_number: args[:rmls_number],
        address: args[:address],
        unit: args[:unit]
      }.delete_if { |k, v| v.nil? })
    }
  end
end

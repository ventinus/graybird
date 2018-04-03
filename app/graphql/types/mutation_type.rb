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

  # field :update_listing, Types::ListingType do
  #   description "Updates a listing"
  #   argument :

  #   resolve ->
  # end

  field :destroy_resource_items, types[types.ID] do
    description "Destroy the record of a resource"
    argument :resource, !types.String
    argument :ids, !types[types.ID]

    resolve -> (_, args, _) {
      args[:resource].singularize.capitalize.constantize.where(id: args[:ids]).destroy_all.pluck(:id)
    }
  end
end

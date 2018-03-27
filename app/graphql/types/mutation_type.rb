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
end

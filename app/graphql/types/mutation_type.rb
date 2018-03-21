Types::MutationType = GraphQL::ObjectType.define do
  name "Mutation"

  field :createUser, Types::UserType do
    description "An example field added by the generator"
    argument :first_name, types.String
    argument :last_name, types.String
    argument :phone_number, types.String
    argument :email, types.String
    argument :notes, types.String

    resolve -> (_, args, _) {
      "Hello World!"
    }
  end
end

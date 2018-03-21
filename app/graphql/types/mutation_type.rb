Types::MutationType = GraphQL::ObjectType.define do
  name "Mutation"

  field :createUser, Types::UserType do
    description "An example field added by the generator"
    # argument
    resolve ->(obj, args, ctx) {
      "Hello World!"
    }
  end
end

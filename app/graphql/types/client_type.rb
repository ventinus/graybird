# frozen_string_literal: true

Types::ClientType = GraphQL::ObjectType.define do
  name "Client"

  field :id, types.ID
  field :first_name, types.String
  field :last_name, types.String
  field :phone_number, types.String
  field :email, types.String
  field :message, types.String
  field :notes, types.String
  field :preferred_communication, types.String
  field :errors do
    type types[types.String]
    resolve -> (obj, _, _) {
      obj.errors.full_messages
    }
  end
end

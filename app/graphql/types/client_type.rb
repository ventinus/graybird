# frozen_string_literal: true

Types::ClientType = GraphQL::ObjectType.define do
  name "Client"

  field :id, types.ID
  field :full_name, types.String
  field :first_name, types.String
  field :last_name, types.String
  field :phone_number, types.String
  field :email, types.String
  field :preferred_communication, types.String
  field :message, types.String
  field :notes, types.String
  field :price_min, types.String
  field :price_max, types.String
  field :confirmed, types.Boolean
  field :contacted, types.Boolean
  field :errors do
    type types[types.String]
    resolve -> (obj, _, _) {
      obj.errors.full_messages
    }
  end
end

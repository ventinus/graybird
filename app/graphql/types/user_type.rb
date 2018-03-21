# frozen_string_literal: true

Types::UserType = GraphQL::ObjectType.define do
  name "User"

  field :id, !types.ID
  field :first_name, types.String
  field :last_name, types.String
  field :phone_number, types.String
  field :email, types.String
  field :notes, types.String
  field :preferred_communication, types.String
end

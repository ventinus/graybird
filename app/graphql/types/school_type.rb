# frozen_string_literal: true

Types::SchoolType = GraphQL::ObjectType.define do
  name "School"

  field :id, !types.ID
  field :name, !types.String
  field :kind, !types.String
end

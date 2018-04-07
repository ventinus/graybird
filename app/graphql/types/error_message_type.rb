# frozen_string_literal: true

Types::ErrorMessageType = GraphQL::ObjectType.define do
  name "ErrorMessage"

  field :column do
    type types.String
    resolve -> (obj, _, _) {
      obj[0].to_s
    }
  end

  field :messages do
    type types[types.String]
    resolve -> (obj, _, _) {
      obj[1]
    }
  end
end

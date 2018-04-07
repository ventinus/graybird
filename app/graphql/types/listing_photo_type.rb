# frozen_string_literal: true

Types::ListingPhotoType = GraphQL::ObjectType.define do
  name "ListingPhoto"

  field :id, !types.ID
  field :caption, types.String

  field :url do
    type !types.String
    resolve -> (obj, _, _) {
      "some url"
      # binding.pry
      # obj.image.url
    }
  end
end

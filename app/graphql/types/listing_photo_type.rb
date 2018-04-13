# frozen_string_literal: true

# needed to have access to polymorphic_url
include Rails.application.routes.url_helpers

Types::ListingPhotoType = GraphQL::ObjectType.define do
  name "ListingPhoto"

  field :id, !types.ID
  field :caption, types.String
  field :position, types.Int

  field :url do
    type !types.String
    resolve -> (obj, _, _) {
      polymorphic_url(obj.file, only_path: true)
    }
  end
end

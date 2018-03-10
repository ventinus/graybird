crumb :listings do
  link 'Listings', admin_listings_path
    parent :dashboard
end

crumb :new_listing do
  link 'New Listing', new_admin_listing_path
  parent :listings
end

crumb :edit_listing do |listing|
  link "Edit Listing", edit_admin_listing_path(listing)
  parent :listings
end

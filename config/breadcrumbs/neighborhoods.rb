crumb :neighborhoods do
  link 'Neighborhoods', admin_neighborhoods_path
    parent :dashboard
end

crumb :new_neighborhood do
  link 'New Neighborhood', new_admin_neighborhood_path
  parent :neighborhoods
end

crumb :edit_neighborhood do |neighborhood|
  link "Edit Neighborhood", edit_admin_neighborhood_path(neighborhood)
  parent :neighborhoods
end

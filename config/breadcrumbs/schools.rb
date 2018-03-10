crumb :schools do
  link 'Schools', admin_schools_path
    parent :dashboard
end

crumb :new_school do
  link 'New School', new_admin_school_path
  parent :schools
end

crumb :edit_school do |school|
  link "Edit #{school.name}", edit_admin_school_path(school)
  parent :schools
end

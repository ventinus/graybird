crumb :users do
  link 'Users', admin_users_path
    parent :dashboard
end

crumb :new_user do
  link 'New User', new_admin_user_path
  parent :users
end

crumb :edit_user do |user|
  link "Edit User", edit_admin_user_path(user)
  parent :users
end

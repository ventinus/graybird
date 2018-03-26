crumb :clients do
  link 'Clients', admin_clients_path
    parent :dashboard
end

crumb :new_client do
  link 'New Client', new_admin_client_path
  parent :clients
end

crumb :edit_client do |client|
  link "Edit Client", edit_admin_client_path(client)
  parent :clients
end

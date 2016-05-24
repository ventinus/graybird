Rails.application.routes.draw do
  mount_roboto

  get "/*id" => 'pages#show', as: :page, format: false
end

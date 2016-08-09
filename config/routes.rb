Rails.application.routes.draw do
  mount_roboto

  get "/pages/*id" => 'pages#show', as: :page, format: false
end

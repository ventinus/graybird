Rails.application.routes.draw do
  devise_for :administrators
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  mount_roboto

  get '/' => 'pages#homepage', as: :homepage
  # get "/pages/*id" => 'pages#show', as: :page, format: false
end

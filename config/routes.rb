Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  mount_roboto

  # resources :listings, only: [:index, :show]
  get '/' => 'pages#index'
  get '/:page' => 'pages#index'
  get '/listings/:address' => 'pages#index'
end

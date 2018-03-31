Rails.application.routes.draw do
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end

  post "/graphql", to: "graphql#execute"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  mount_roboto

  get '/admin' => 'pages#admin'
  get '/admin/*path' => 'pages#admin'

  # resources :listings, only: [:index, :show]
  get '/' => 'pages#index'
  get '/listings' => 'pages#index'
  get '/listings/:address' => 'pages#index'
end

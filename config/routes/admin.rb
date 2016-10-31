Rails.application.routes.draw do
  devise_for :administrators,
  controllers: {
    confirmations: 'admin/confirmations',
    passwords:     'admin/passwords',
    sessions:      'admin/sessions'
  },
  path: 'admin'

  namespace :admin do
    root 'application#index'

    resources :administrators, except: [:show]

  end
end

Rails.application.routes.draw do
  root 'welcome#index'
  get '/signup', to: 'users#new'
  get 'welcome/index'

  resources :flowers do
    resources :sightings
  end
end

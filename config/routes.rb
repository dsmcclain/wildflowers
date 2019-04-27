Rails.application.routes.draw do
  root 'welcome#index'
  #match '*path', to: 'welcome#index', via: :all
  get '/signup', to: 'users#new'
  post '/signup', to: 'users#create'
  get 'welcome/index'

  resources :flowers do
    resources :sightings
  end
  resources :users
end

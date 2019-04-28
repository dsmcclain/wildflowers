Rails.application.routes.draw do
  root 'welcome#index'
  get 'welcome/index'
  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/signup', to: 'users#new'
  post '/signup', to: 'users#create'
  resources :users
  resources :flowers do
    resources :sightings
  end
 
  #alternate routes for react frontend:
  #match '*path', to: 'welcome#index', via: :all
end

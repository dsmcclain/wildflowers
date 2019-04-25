Rails.application.routes.draw do
  root 'welcome#index'
  # match '*path', to: 'welcome#index', via: :all
  get '/signup', to: 'users#new'
  get 'welcome/index'

  resources :flowers do
    resources :sightings
  end
end

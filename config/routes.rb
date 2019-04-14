Rails.application.routes.draw do
  get 'welcome/index'

  resources :flowers do
    resources :sightings
  end
  
  root 'welcome#index'
end

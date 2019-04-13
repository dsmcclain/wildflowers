Rails.application.routes.draw do
  get 'welcome/index'

  resources :flowers
  
  root 'welcome#index'
end

Rails.application.routes.draw do
  
  root 'welcome#index'
  match '*path', to: 'welcome#index', via: :all
end

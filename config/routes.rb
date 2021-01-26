Rails.application.routes.draw do
  
  root 'items#index'
  get 'api/items/category',to: 'items#get_category'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

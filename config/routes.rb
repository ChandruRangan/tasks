Rails.application.routes.draw do

  devise_for :users, controllers: {
    sessions: 'users/sessions'
  }
  resources :posts
  resources :comments
  root "posts#index"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

 
  
end

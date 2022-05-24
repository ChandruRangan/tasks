Rails.application.routes.draw do
  get 'comments/destroy'
  # get 'comment/index'
  # get 'comment/new'
  # get 'comment/destroy'
  # post '/patients/:id', to: 'patients#show', as: 'patient'
  delete '/comments/:id', to: 'comments#destroy' 

  devise_for :users, controllers: {
    sessions: 'users/sessions'
  }
  resources :posts
  resources :comments
  root "posts#index"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  
end

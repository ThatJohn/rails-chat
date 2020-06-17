Rails.application.routes.draw do
  get 'chat', to: "chat#index"
  resources :messages, only: [:new, :create]
end

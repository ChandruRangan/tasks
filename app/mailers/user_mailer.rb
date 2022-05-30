class UserMailer < ApplicationMailer
    

    def welcome_email(user)
      @user = User.find_by_id(user)
      mail(to: @user.email, subject: 'Welcome to My Awesome Site')
    end

 
end

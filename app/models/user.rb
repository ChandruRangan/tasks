class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  after_create :send_welcome_mail
  has_many :posts, dependent: :destroy
  has_many :comments
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
 

  def send_welcome_mail
    UserMailer.welcome_email(self).deliver
  end
end

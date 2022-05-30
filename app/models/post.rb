class Post < ApplicationRecord
    belongs_to :user
    has_many :comments, dependent: :destroy
    has_rich_text :post
    validates :post, presence: true

end

class CommentMailer < ApplicationMailer
    def comment_mail
        @comment = params[:comment]
        user_id = Post.find_by_id(@comment.post_id).user_id
        @user = User.find_by_id(user_id)
        @commented_user=User.find_by_id(@comment.user_id)
        mail(to: @user.email, subject: "Hello #{@user.name} !\n #{@commented_user.name} is commented on your post")
    end
end
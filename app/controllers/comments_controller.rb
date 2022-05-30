class CommentsController < ApplicationController
  before_action :set_comment, only: %i[  destroy ]
  def index
  end

  def new
    @comment=Comment.new
  end
  def create
    @comment = Comment.new(comment_params)
    @comment.save
    CommentMailer.with(comment: @comment).comment_mail.deliver_later
    redirect_to root_path
  end

  def destroy
    @comment.destroy
  end
  private
   def comment_params
     params.require(:comment).permit(:comment,:user_id,:post_id)
   end
   def set_comment
    @comment=Comment.find(params[:id])
   end
end

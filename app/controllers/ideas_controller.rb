class IdeasController < ApplicationController
  skip_before_filter :verify_authenticity_token

  def create
    idea = Idea.new(idea_params)
    if idea.save
      render :json => idea, :status => :created
    end
  end

  private
    def idea_params
      params.permit(:title, :body)
    end
end

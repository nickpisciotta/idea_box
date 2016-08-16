class IdeasController < ApplicationController
  skip_before_filter :verify_authenticity_token

  def create
    idea = Idea.new(idea_params)
    if idea.save
      render :json => {idea: idea}, :status => :created
    end
  end

  def index
    ideas = { idea: Idea.all }
    render :json => ideas
  end

  private
    def idea_params
      params.require(:idea).permit(:title, :body)
    end
end

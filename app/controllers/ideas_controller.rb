class IdeasController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    idea = Idea.new(idea_params)
    if idea.save
      render :json => {idea: idea}, :status => :created
    end
  end

  def destroy
    @idea = Idea.find(params[:id])
    @idea.destroy
    head :no_content
  end

  def index
    ideas = { idea: Idea.all }
    render :json => ideas
  end

  def update
    idea = Idea.find(params[:id])
    if idea.update(idea_params)
      render :json => {idea: idea}
    else
      flash[:notice] = "Idea did not save"
    end
  end

  private
    def idea_params
      params["idea"]["quality"].to_i
      params.require(:idea).permit(:title, :body, :quality)
    end
end

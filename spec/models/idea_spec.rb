require 'rails_helper'

RSpec.describe Idea, type: :model do
  it { should validate_presence_of(:title) }
  it { should validate_presence_of(:body) }

  scenario "quality enum" do
    idea = create_idea

    expect(idea.quality).to eq("Swill")
  end

end

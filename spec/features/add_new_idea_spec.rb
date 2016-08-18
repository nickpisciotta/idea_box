require "rails_helper"

RSpec.feature "Add a new Idea", js: true do
  scenario "New Idea is Added" do

    visit root_path

    fill_in "title", with: "New Idea"
    fill_in "body", with: "This is a great idea!"
    click_on "Save"

    within(".idea-table") do
      expect(page).to have_content("New Idea")
      expect(page).to have_content("This is a great idea!")
    end

    expect(Idea.count).to eq(1)
  end
end

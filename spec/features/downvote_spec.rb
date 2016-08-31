require "rails_helper"

RSpec.feature "Change quality of idea", js: true do
  scenario "Click thumbs down" do
    visit root_path

    fill_in "title", with: "New Idea"
    fill_in "body", with: "This is a great idea!"
    click_on "Save"

    click_on "thumbs up"
    click_on "thumbs down"

    within(".idea-table") do
      expect(page).to have_content("Swill")
    end
  end 
end

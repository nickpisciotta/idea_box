require "rails_helper"

RSpec.feature "Change quality of idea", js: true do
  scenario "Click upvote" do
    visit root_path

    fill_in "title", with: "New Idea"
    fill_in "body", with: "This is a great idea!"
    click_on "Save"

    within(".idea-table") do
      expect(page).to have_content("Swill")
    end

    click_on "upvote"

    within(".idea-table") do
      expect(page).to have_content("Plausible")
    end
  end

  scenario "Click downvote" do
    visit root_path

    click_on "downvote"

    within(".idea-table") do
      expect(page).to have_content("Swill")
    end
  end
end

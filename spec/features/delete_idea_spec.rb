require 'rails_helper'

RSpec.feature "Delete Idea", js: true do
  scenario "Delete an idea" do
    visit root_path

    fill_in "title", with: "New Idea"
    fill_in "body", with: "This is a great idea!"
    click_on "Save"

    expect(Idea.all.count).to eq(1)

    click_on "Delete"

    expect(page).to_not have_content("New Idea")
    expect(Idea.all.count).to eq(0)
  end
end

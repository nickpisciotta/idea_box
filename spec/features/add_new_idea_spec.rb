require "rails_helper"

RSpec.feature "Add a new Idea" do
  scenario "New Idea is Added" do
    # before do
    #   Capybara.current_driver = :webkit
    # end
    visit root_path

    fill_in "title", with: "New Idea"
    fill_in "body", with: "This is a great idea!"
    click_on "Save"

    expect(page).to have_content("New Idea")
    expect(Idea.count).to eq(1)
  end
end

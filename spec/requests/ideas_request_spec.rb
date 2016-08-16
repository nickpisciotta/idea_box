require "rails_helper"

describe "Ideas Controller" do
  it "creates an idea" do
    idea_params = {idea: {title: "Idea1",
                   body: "Body1"}
                  }
    expect(Idea.count).to eq(0)

    post "/ideas", idea_params

    expect(response.status).to eq(201)
    expect(Idea.count).to eq(1)

    parsed_response = JSON.parse(response.body)

    expect(parsed_response["idea"]["title"]).to eq("Idea1")
    expect(parsed_response["idea"]["body"]).to eq("Body1")
    expect(parsed_response["idea"]["quality"]).to eq("Swill")
  end

  it "returns all ideas" do
    idea = create_idea

    expect(Idea.count).to eq(1)

    get "/ideas"

    expect(response.status).to eq(200)

    parsed_response = JSON.parse(response.body)

    expect(parsed_response.count).to eq(1)
    expect(parsed_response["idea"].first["title"]).to eq("Idea1")
    expect(parsed_response["idea"].first["body"]).to eq("Body1")
    expect(parsed_response["idea"].first["quality"]).to eq("Swill")
  end

end

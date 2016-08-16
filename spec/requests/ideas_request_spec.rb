require "rails_helper"

describe "Ideas Controller" do
  it "creates an idea" do
    expect(Idea.count).to eq(0)

    post "/ideas", params: {idea: {title: "Idea1",
                   body: "Body1"}
                  }

    expect(response.status).to eq(201)
    expect(Idea.count).to eq(1)

    parsed_response = JSON.parse(response.body)

    expect(parsed_response["idea"]["title"]).to eq("Idea1")
    expect(parsed_response["idea"]["body"]).to eq("Body1")
    expect(parsed_response["idea"]["quality"]).to eq("Swill")
  end

  it "deletes an idea" do
    idea = create_idea

    expect(Idea.count).to eq(1)

    delete "/ideas/2"

    expect(Idea.count).to eq (0)
  end
end

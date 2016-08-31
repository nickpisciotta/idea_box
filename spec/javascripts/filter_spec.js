//= require filter
//= require idea_listeners

describe('filter', function () {

  var ideaRow = document.createElement("tr")
  ideaRow.id = "row"
  var ideaCell = document.createElement("td")
  ideaCell.id = "idea-title"
  var ideaCell2 = document.createElement("td")
  ideaCell2.id =  "idea-body"
  var ideaCellText = document.createTextNode("Example1")
  var ideaCellText2 = document.createTextNode("Example 2")
  ideaCell.appendChild(ideaCellText)
  ideaCell2.appendChild(ideaCellText2)
  ideaRow.appendChild(ideaCell)
  ideaRow.appendChild(ideaCell2)

  var selector = $("#row")
  searchElement(selector, "h")

  $("#idea_filter_search").val('book')
  $("#idea_filter_search").trigger("keyup")


  var visibleText = $('body:visible').html()

  it('can remove ideas', function () {

  });
});


describe('truncate', function() {
  var text = "daadfadfadfasdfadfasdfadfdasfafdsafdsadjfjadlja;ldfjklajkfljdklfjdlkajda;fda;jfd;jakdlfjalkdfjaldjf;fffff"

  expect(text.length).to.eql(105)

  var result = truncateBody(text)

  expect(result.length).to.eql(100)
})

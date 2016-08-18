// require filter
describe('filter', function () {

  var idea = document.createElement("tr")
  idea.className = "test"
  // <tr class='test'><td class='search title-cell' id='idea1-title'>Example</td>")
  // fixture.set("<input type='search' id='idea_filter_search'>")

  filterSearch(".test")

  $("#idea_filter_search").val('book')
  $("#idea_filter_search").trigger("keyup")


  var visibleText = $('body:visible').html()
  debugger
  it('can remove ideas', function () {

  expect(visibleText).to.match(/data-idea-id="5"/)
  });
});

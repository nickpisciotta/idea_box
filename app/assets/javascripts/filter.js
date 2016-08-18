// Test
// el1: cars
// el2: book
// el3: books
// fixture.set('<tr data-idea-id="4">cars</tr><tr data-idea-id="5">book</tr>')
// filterSearch('.ideas')
// $("#idea_filter_search").val('book')
// $("#idea_filter_search").trigger("keyup")
//
// var visibleText = $('body:visible').html(); // This would need some work
// expect(visibleText).to.match(/data-idea-id="5"/)
// expect(visibleText).not.to.match(/data-idea-id="4"/)
//

function filterSearch(selector) {
  $("#idea_filter_search").on("keyup", function(){
    var $ideas = $(selector);
    var searchField = this.value;
    $ideas.each(function(index, ideaRow){
      $idea = $(ideaRow);
      var titleString = $idea.children("[id^=idea]")[0].innerHTML
      var bodyString =  $idea.children("[id^=idea]")[1].innerHTML
      var tableDataString = titleString + bodyString
        if (tableDataString.indexOf(searchField) !== -1){
          $idea.show();
        } else {
          $idea.hide();
        }
    });
  });
}

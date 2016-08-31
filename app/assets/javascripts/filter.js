
function filterSearch(selector) {
  $("#idea_filter_search").on("keyup", function(){
    var $ideas = $(selector);
    var searchField = this.value;
    searchElement($ideas, searchField);
  });
}

function searchElement(element, searchValue) {
  element.each(function(index, ideaRow){
    console.log(element)
    $idea = $(ideaRow);
    var titleString = $idea.children("[id^=idea]")[0].innerHTML
    var bodyString =  $idea.children("[id^=idea]")[1].innerHTML
    var tableDataString = titleString + bodyString
      if (tableDataString.indexOf(searchValue) !== -1){
        $idea.show();
      } else {
        $idea.hide();
      }
  });
}

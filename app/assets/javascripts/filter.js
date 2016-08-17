function filterSearch(selector) {
  $("#idea_filter_search").on("keyup", function(){
    var $ideas = $(selector);
    var searchField = this.value;
    $ideas.each(function(index, ideaRow){
      $idea = $(ideaRow);
      var tableDataString = $idea.children("[id^=idea]")[0].innerHTML + $idea.children("[id^=idea]")[1].innerHTML
        if (tableDataString.indexOf(searchField) !== -1){
          $idea.show();
        } else {
          $idea.hide();
        }
    });
  });
}

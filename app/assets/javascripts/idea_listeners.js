function createIdeaListener (selector){
  $(selector).on('click', function(){
    var ideaTitle = $("#idea-title").val()
    var ideaBody = $("#idea-body").val()
    var postData = {idea: {
      title: ideaTitle,
      body: ideaBody
    }}
    postIdea(postData)
  })
}

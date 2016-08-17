function createIdeaListener(selector) {
  $(selector).on('click', function(){
    var ideaTitle = $("#title-box").val()
    var ideaBody = $("#body-box").val()
    var postData = {idea: {
      title: ideaTitle,
      body: ideaBody
    }}
    postIdea(postData)
  })
}

function deleteIdeaListener(selector) {
  $("body").on('click', selector, function(){
  deleteIdea(this)
  })
}

function editIdeaListener(selector) {
  $("body").on("focusout", selector, function(){
    editIdea(this)
  })
}

var qualityCheck = ["Swill", "Plausible", "Genius"]

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

function truncateBody(body) {
  return body.substring(0, 100)
}

function deleteIdeaListener(selector) {
  $("body").on('click', selector, function(){
  deleteIdea(this)
  })
}

function qualityFilter(selector) {
  $("body").on('click', selector, function(){

  })
}

function editIdeaListener(selector) {
  $("body").on("focusout", selector, function(){
    editIdea(this)
  })
}

function upvoteListenter(selector) {
  $("body").on("click", selector, function(){
    targetIdeaId = $(this).data("upvote-id")
    qualityValue = $("body").find(".idea-row"+targetIdeaId).children(".quality").html()
    quality = qualityCheck.indexOf(qualityValue)
    if (quality == 2) {
    } else if (quality == 1) {
      $("body").find(".idea-row"+targetIdeaId).children(".quality").text(qualityCheck[2])
        newQuality = qualityCheck[2]
        changeQuality(newQuality, targetIdeaId)
    } else {
      $("body").find(".idea-row"+targetIdeaId).children(".quality").text(qualityCheck[1])
        newQuality = qualityCheck[1]
        changeQuality(newQuality, targetIdeaId)
    }
  })
}

function downvoteListener(selector) {
  $("body").on("click", selector, function(){
    targetIdeaId = $(this).data("downvote-id")
    qualityValue = $("body").find(".idea-row"+targetIdeaId).children(".quality").html()
    quality = qualityCheck.indexOf(qualityValue)
    if (quality == 2) {
      $("body").find(".idea-row"+targetIdeaId).children(".quality").text(qualityCheck[1])
      newQuality = qualityCheck[1]
      changeQuality(newQuality, targetIdeaId)
    } else if (quality == 1) {
        $("body").find(".idea-row"+targetIdeaId).children(".quality").text(qualityCheck[0])
        newQuality = qualityCheck[0]
        changeQuality(newQuality, targetIdeaId)
    } else {
    }
  })
}

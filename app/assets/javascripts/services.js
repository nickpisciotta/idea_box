function postIdea(postData){
  $.ajax({
    url: "/ideas",
    method: "POST",
    dataType: "JSON",
    data: postData,
    success: function (data) {
      $("#idea-title").val("")
      $("#idea-body").val("")
      appendData(data)
      deleteIdeaListener("delete-idea"+data.idea.id)
      $('.ajax-flash').html("<div class='alert alert-success'><h4>Idea Added!</h4></div>")
    }
  });
  function appendData(data) {
    $(".idea-table").find('tbody:last').append("<tr class='idea-row" +data.idea.id + "'><td id='idea" + data.idea.id + "' contenteditable='true' data-idea-id='" + data.idea.id + "'>" + data.idea.title + "</td></tr>")
    $(".idea-table").find('tr:last').append("<td id='idea" + data.idea.id + "' contenteditable='true' data-idea-id='" + data.idea.id + "'>" + data.idea.body + "</td>")
    $(".idea-table").find('tr:last').append("<td>" + data.idea.quality + "</td>")
    $(".idea-table").find('tr:last').append("<td><input class='btn btn-primary' id='delete-idea" + data.idea.id + "' data-idea-id='" + data.idea.id + "'type='button' name='submit' value='delete'></td>")
  }
}

function getIdeas() {
  $.ajax({
    url: "/ideas",
    method: "GET",
    dataType: "JSON",
    success: function(ideas) {
      $(ideas.idea).each(function(index, idea){
        appendData(idea)
      })
    }
  })
  function appendData(idea) {
    $(".idea-table").find('tbody:last').append("<tr class='idea-row" +idea.id + "'><td id='idea" + idea.id + "' contenteditable='true' data-idea-id='" + idea.id + "'>" + idea.title + "</td></tr>")
    $(".idea-table").find('tr:last').append("<td id='idea" + idea.id + "' contenteditable='true' data-idea-id='" + idea.id + "'>" + idea.body + "</td>")
    $(".idea-table").find('tr:last').append("<td>" + idea.quality + "</td>")
    $(".idea-table").find('tr:last').append("<td><input class='btn btn-primary' id='delete-idea" + idea.id + "' data-idea-id='" + idea.id + "'type='button' name='submit' value='delete'></td>")
  }
}

function deleteIdea(currentObject) {
  var targetIdeaId= $(currentObject).data("idea-id")
  $.ajax({
    url: "/ideas/" + targetIdeaId,
    method: "DELETE",
    success: function() {
      $("body").find(".idea-row"+targetIdeaId).remove()
      $('.ajax-flash').html("<div class='alert alert-success'><h4>Idea Deleted!</h4></div>")
    }
  })
}

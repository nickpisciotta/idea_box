function postIdea(postData){
  $.ajax({
    url: "/ideas",
    method: "POST",
    dataType: "JSON",
    data: postData,
    success: function (data) {
      $("#title-box").val("")
      $("#body-box").val("")
      appendData(data)
      deleteIdeaListener("delete-idea"+data.idea.id)
      $('.ajax-flash').html("<div class='alert alert-success'><h4>Idea Added!</h4></div>")
    }
  });
  function appendData(data) {
    $(".idea-table").find('tbody:last').append("<tr class='idea-row" +data.idea.id + " test'><td class='search' id='idea" + data.idea.id + "-title' contenteditable='true' data-idea-id='" + data.idea.id + "'>" + data.idea.title + "</td></tr>")
    $(".idea-table").find('tr:last').append("<td class='search' id='idea" + data.idea.id + "-body' contenteditable='true' data-idea-id='" + data.idea.id + "'>" + data.idea.body + "</td>")
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
    $(".idea-table").find('tbody:last').append("<tr class='idea-row" +idea.id + " test'><td class='search' id='idea" + idea.id + "-title' contenteditable='true' data-idea-id='" + idea.id + "'>" + idea.title + "</td></tr>")
    $(".idea-table").find('tr:last').append("<td class='search' id='idea" + idea.id + "-body' contenteditable='true' data-idea-id='" + idea.id + "'>" + idea.body + "</td>")
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

function editIdea(currentObject) {
  var targetIdeaId = $(currentObject).data("idea-id");
  var newValue = $(currentObject).html();
  if (currentObject.id.includes("title")) {
    var postData = {idea: {
                    title: newValue}};
  } else {
    var postData = {idea: {
                    body: newValue}};
  }
  $.ajax({
    url: "/ideas/" + targetIdeaId,
    method: "PUT",
    dataType: "JSON",
    data: postData,
    success: function() {
      $('.ajax-flash').html("<div class='alert alert-success'><h4>Idea Updated!</h4></div>")
    }
  });
}

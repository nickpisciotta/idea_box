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
      $('.ajax-flash').html("<div class='alert alert-success'><h4>Idea Added!</h4></div>")
    }
  });
  function appendData(data) {
    $(".idea-table").find('tbody:last').append("<tr><td>" + data.idea.title + "</td></tr>")
    $(".idea-table").find('tr:last').append("<td>" + data.idea.body + "</td>")
    $(".idea-table").find('tr:last').append("<td>" + data.idea.quality + "</td>")
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
  function appendData(data) {
    $(".idea-table").find('tbody:last').append("<tr><td>" + data.title + "</td></tr>")
    $(".idea-table").find('tr:last').append("<td>" + data.body + "</td>")
    $(".idea-table").find('tr:last').append("<td>" + data.quality + "</td>")
  }
}

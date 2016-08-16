function postIdea(postData){
  $.ajax({
    url: "/ideas",
    method: "POST",
    dataType: "JSON",
    data: postData,
    success: function (data) {
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

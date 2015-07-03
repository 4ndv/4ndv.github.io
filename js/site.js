$(document).ready(function() {
  $.ajax("https://api.github.com/users/4ndv/repos?sort=updated")
  .done(function(data) {
    console.log(data);
    $("#projects .loading").hide();
    data.forEach(function(item) {
      var project = $("#template").clone();
      project.attr("id", "");
      project.find(".name").text(item.name);
      project.children(".description").text(item.description);
      project.find(".language").text(item.language);
      project.find(".stars").text(item.stargazers_count);

      if(item.has_pages) {
        project.attr("href", "http://4ndv.github.io/" + item.name);
      } else {
        project.attr("href", item.html_url);
      }

      project.appendTo("#projects");
    });
  });
});

$(document).ready(function() {
  var starscompare = function(a, b) {
    if(a.stargazers_count > b.stargazers_count) {
      return -1;
    }
    if(b.stargazers_count > a.stargazers_count) {
      return 1;
    }
    return 0;
  }

  $.ajax("https://api.github.com/users/4ndv/repos?sort=updated")
  .done(function(data) {
    data.sort(starscompare);
    $("#projects .loading").hide();
    data.forEach(function(item) {
      var project = $("#template").clone();
      project.attr("id", "");
      project.find(".name").text(item.name);
      project.children(".description").text(item.description);
      project.find(".language").text(item.language);
      project.find(".stars").text(item.stargazers_count);

      if(item.has_pages && item.name !== "4ndv.github.io") {
        project.attr("href", "http://4ndv.github.io/" + item.name);
      } else {
        project.attr("href", item.html_url);
      }

      project.appendTo("#projects");
    });
  });
});

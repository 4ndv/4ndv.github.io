riot.tag2('github-repos', '<div class="container"> <h3 class="page-header">Opensource</h3> <div if="{not_loaded}"> <h4>Loading projects...</h4> </div> <div class="row"> <div class="col-xs-12 col-sm-6 col-md-4 card-out" each="{repos}"> <a href="{html_url}"> <div class="card"> <h3>{name}</h3> <p>{description} <div class="bottom"> <span class="left"> <span class="glyphicon glyphicon-star"></span> <b>{stargazers_count}</b> </span> <span class="right"><b>{language}</b> </div> </div> </a> </div> </div> </div>', '', '', function(opts) {
var compare_stars, filter_repos, get_repos, self;

self = this;

self.update({
  not_loaded: true
});

get_repos = function(user) {
  var xhr;
  xhr = new XMLHttpRequest;
  xhr.open('GET', 'https://api.github.com/users/' + user + '/repos?sort=updated');
  xhr.onload = function() {
    filter_repos(JSON.parse(xhr.responseText));
  };
  xhr.send();
};

compare_stars = function(a, b) {
  if (a.stargazers_count > b.stargazers_count) {
    return -1;
  }
  if (b.stargazers_count > a.stargazers_count) {
    return 1;
  }
  return 0;
};

filter_repos = function(repos) {
  repos.sort(compare_stars);
  repos.forEach(function(item) {
    if (item.has_pages && opts.ignore_pages.indexOf(item.name) === -1) {
      return item.html_url = "http://4ndv.github.io/" + item.name;
    }
  });
  return self.update({
    repos: repos,
    not_loaded: false
  });
};

get_repos(opts.user);
});
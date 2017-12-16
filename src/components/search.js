angular.module('video-player')

.component('search', {
  //variables and methods receieved from parent
  //'<' indicates one way binding
  bindings: {
    searchResults: '<'
  },
  //templateUrl holds a link to template
  templateUrl: 'src/templates/search.html'
});

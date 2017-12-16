angular.module('video-player')

.component('search', {
  //variables and methods receieved from parent
  //'<' indicates one way binding
  bindings: {
    result: '<'
  },
  controller: function(youTube) {
    //add youTube service to search
    //set $ctrl.service to youTube service, is needed to access service from template
    this.service = youTube;
  },
  //templateUrl holds a link to template
  templateUrl: 'src/templates/search.html'
});

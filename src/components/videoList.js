angular.module('video-player')

.component('videoList', {
  //variables and methods receieved from parent
  //'<' indicates one way binding
  bindings: {
    videos: '<',
    onClick: '<'
  },
  //templateUrl holds a link to template
  templateUrl: 'src/templates/videoList.html'
});

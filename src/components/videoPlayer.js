angular.module('video-player')

.component('videoPlayer', {
  //variables and methods receieved from parent
  //'<' indicates one way binding
  bindings: {
    video: '<'
  },
  //templateUrl holds a link to template
  templateUrl: 'src/templates/videoPlayer.html'
});

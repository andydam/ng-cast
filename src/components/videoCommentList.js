angular.module('video-player')

.component('videoCommentList', {
  //variables and methods receieved from parent
  //'<' indicates one way binding
  bindings: {
    currentComments: '<'
  },
  //templateUrl holds a link to template
  templateUrl: 'src/templates/videoCommentList.html'
});

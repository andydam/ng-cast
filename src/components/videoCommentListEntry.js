angular.module('video-player')

.component('videoCommentListEntry', {
  //variables and methods receieved from parent
  //'<' indicates one way binding
  bindings: {
    comment: '<'
  },
  //templateUrl holds a link to template
  templateUrl: 'src/templates/videoCommentListEntry.html'
});

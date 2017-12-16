angular.module('video-player')

.component('videoListEntry', {
  //variables and methods receieved from parent
  //'<' indicates one way binding
  bindings: {
    video: '<',
    selectVideo: '<'
  },
  //templateUrl holds a link to template
  templateUrl: 'src/templates/videoListEntry.html'
});

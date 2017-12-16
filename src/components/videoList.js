angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<',
    selectVideo: '<'
  },
  controller: function() {
  },
  // TODO
  templateUrl: 'src/templates/videoList.html'
});

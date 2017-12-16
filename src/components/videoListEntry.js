angular.module('video-player')
.component('videoListEntry', {
  // TODO
  bindings: {
    video: '<',
    selectVideo: '<',
  },
  templateUrl: 'src/templates/videoListEntry.html'
});

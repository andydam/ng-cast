angular.module('video-player')

.component('videoPlayer', {
  // TODO
  controller: function($scope) {
    // console.log(this);
    // console.log(this.video);
    // console.log($scope);
  },
  bindings: {
    video: '<'
  },
  templateUrl: 'src/templates/videoPlayer.html'
});

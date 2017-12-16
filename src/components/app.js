angular.module('video-player')

.component('app', {
  // TODO
  controller: function() {
    this.selectVideo = function(video) {
   //   console.log(video);
      this.currentVideo = video;
      console.log(this.currentVideo);
   // $scope.$apply();
    };
    this.searchResults = function(argument) {
      var query = argument;
      console.log(query);
    }; 
    this.videos = window.exampleVideoData;
    this.currentVideo = this.videos[0];
  },
  templateUrl: 'src/templates/app.html'
});

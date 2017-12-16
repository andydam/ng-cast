angular.module('video-player')

.component('app', {
  // TODO
  controller: function(youTube) {
    this.selectVideo = video => {
      this.currentVideo = video;
    };
    this.searchResults = query => {
      console.log(youTube.search(query));
    }; 
    this.videos = window.exampleVideoData;
    this.currentVideo = this.videos[0];
  },
  templateUrl: 'src/templates/app.html'
});

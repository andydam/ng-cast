angular.module('video-player')

.component('app', {
  controller: function(youTube) {
    //selectVideo click hander,changes the current video
    //es6 arrow functions needed to maintain proper this scope
    this.selectVideo = video => {
      this.currentVideo = video;
    };
    //search for youtube video using query
    //es6 arrow functions needed to maintain proper this scope
    this.search = query => {
      youTube.search(query, this.searchResults);
    }; 
    this.searchResults = data => {
      this.videos = data.items;
      this.currentVideo = this.videos[0];
    };
    //declare variables to hold videos and currently selected video
    this.videos = window.exampleVideoData;
    this.currentVideo = this.videos[0];
  },
  //templateUrl holds a link to template
  templateUrl: 'src/templates/app.html'
});

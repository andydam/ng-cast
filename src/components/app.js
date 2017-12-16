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
    //search for youtube callback
    //takes youtube data and stores it in videos
    //es6 arrow functions needed to maintain proper this scope
    this.searchResults = data => {
      this.videos = data;
      this.currentVideo = this.videos[0];
    };
    this.videos = [];
    this.currentVideo = {};

    //initial search on youtube to populate app on launch
    this.search('Christmas');
  },
  //templateUrl holds a link to template
  templateUrl: 'src/templates/app.html'
});

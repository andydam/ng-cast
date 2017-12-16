angular.module('video-player')

.component('app', {
  controller: function(youTube) {
    //selectVideo click hander,changes the current video
    //es6 arrow functions needed to maintain proper this scope
    this.selectVideo = video => {
      this.currentVideo = video;
      //remove comments from previous video
      this.currentComments = [];
      //use youtube service to get comments for current video
      youTube.showComments(this.currentVideo.id.videoId, this.commentResults);
    };
    //search for youtube callback
    //takes youtube data and stores it in videos
    //es6 arrow functions needed to maintain proper this scope
    this.searchResults = data => {
      this.videos = data;
      this.currentVideo = this.videos[0];
      //use youtube service to get comments for current video
      youTube.showComments(this.currentVideo.id.videoId, this.commentResults);
    };
    //youtube comments callback
    //takes youtube comment data for current video and stores it in currentComments
    //es6 arrow functions needed to maintain proper this scope
    this.commentResults = data => {
      this.currentComments = data;
    };
    this.videos = [];
    this.currentVideo = {};

    //initial search on youtube to populate app on launch
    youTube.search('Christmas', this.searchResults);
  },
  //templateUrl holds a link to template
  templateUrl: 'src/templates/app.html'
});

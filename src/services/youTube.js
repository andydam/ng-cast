angular.module('video-player')
.service('youTube', function($http) {
  // TODO
  this.search = function(query) {
    $http({url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        part: 'snippet',
        key: window.YOUTUBE_API_KEY,
        q: query,
        maxResults: 5,
        type: 'video',
        videoEmbeddable: 'true' 
      }, 
      method: 'GET' }).then(response => {
        console.log(response.data);
      });
  };
});

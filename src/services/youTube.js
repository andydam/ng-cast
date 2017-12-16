angular.module('video-player')

.service('youTube', function($http) {
  this.search = function(query, callback) {
    //search function uses $http to make an ajax request to youtube
    //$http is a native angular method
    //calls callback with data once received
    $http({url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        part: 'snippet',
        key: window.YOUTUBE_API_KEY,
        q: query,
        maxResults: 5,
        type: 'video',
        videoEmbeddable: 'true' 
      }, 
      method: 'GET' }).then(response => callback(response.data.items));
  };

  this.showComments = function(videoId, callback) {
    //showComments function uses $http to make an ajax request to youtube to get comments for videoId
    $http({url: 'https://www.googleapis.com/youtube/v3/commentThreads',
      params: {
        part: 'snippet',
        key: window.YOUTUBE_API_KEY,
        videoId,
      },
      method: 'GET' }).then(response => callback(response.data.items));
  };
});

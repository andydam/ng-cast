angular.module('video-player')

.component('search', {
  //variables and methods receieved from parent
  //'<' indicates one way binding
  bindings: {
    result: '<',
    searchProvider: '@'
  },
  controller: function($injector) {
    //onChanges is an event handler for bindings value change
    this.$onChanges = function({searchProvider}) {
      //chcek if searchProvider was passed
      if (angular.isDefined(searchProvider)) {
        //if searchProvider was passed, get the searchProvider service 
        //using $injector.get 
        this.service = $injector.get(this.searchProvider);
      }
    };
  },
  //templateUrl holds a link to template
  templateUrl: 'src/templates/search.html'
});

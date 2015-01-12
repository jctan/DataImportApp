//you use $http or $resource to do your API calls to the Node backend from your angular frontend
angular.module('dataImportService', []).factory('DataImports', funtion($http){
  return{
    //call to get all the imports
    get: function(){
      return $http.get('/api/dataimports/');
    },

    //call to POST and create a new import
    create: function(importData){
      return $http.post('/api/dataimports/', importData);
    }, 

    //call the DELETE import
    delete: function(id){
      return $http.delete('/api/dataimports/' + id);
    }
  }
});
//only GET function works until you define them in your app/routes.js
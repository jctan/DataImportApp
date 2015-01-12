//ImportCtrl Controller

angular.module('ImportCtrl', []).controller('ImportController', function($scope, $http){
  $scope.formData = {};

  //get all import and show
  $http.get('/api/dataimports')
          .success(function(data){
            $scope.dataImports = data;
          })
          .error(function(data){
            console.log('Error: ' + data);
          });

  //submitting the add form, send text to node API
  $scope.createImport = function(){
    $http.post('/api/dataimports', $scope.formData)
          .success(function(data){
            $scope.formData = {}; //clear form before adding data
            $scope.dataImports = data;
          })
          .error(function(data){
            console.log('Error: ' + data);
          });
  };

  //delete import
  $http.delete('/api/dataimports/' + id)
          .success(function(data){
            $scope.dataImports = data;
          })
          .error(funciton(data){
            console.log('Error: ' + data);
          });
  };
});
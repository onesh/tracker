angular.module('login', [])

.controller('loginController', function($scope, $ionicModal, $timeout, $state, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  var loginData = {
       username: '12',
       password: '12'
     };

 $ionicModal.fromTemplateUrl('templates/error.html', {
       scope: $scope
     }).then(function(modal) {
       $scope.modal = modal;
  });
  // Create the login modal that we will use later
  // Triggered in the login modal to close it
  // Open the login modal


var isAuthenticated  =  (function () {
    if (this.username === loginData.username && this.password === loginData.password) return true;
    return false;
  }).bind($scope.loginData);

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    if(isAuthenticated()) $state.go('app.dashboard');
  else {
    $scope.modal.show();
    $timeout(function () {
      $scope.modal.hide();
    }, 2000);
  }

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system

  };
})
.controller('AppCtrl', function($scope, $stateParams) {
});

var app = angular.module('myApp', []);

app.controller('LoginController', function ($scope) {
  
  $scope.user = { username: '', password: '' };
  $scope.isLoggedIn = false;

  $scope.login = function () {
    
    if ($scope.user.username === 'your_username' && $scope.user.password === 'your_password') {
      
      $scope.isLoggedIn = true;
    } else {
      
      alert('Invalid username or password. Please try again.');
    
      $scope.user.password = '';
    }
  };
});

angular.module('userApp', []) .controller('UserController', function($scope) {
    $scope.users = [
    { name: 'abcd', email: 'abcd@gmail.com' },
    { name: 'trainee', email: 'trainee@yahoo.com' }
    ];
    $scope.newUser = {};
    $scope.createUser = function() {
    $scope.users.push($scope.newUser);
    $scope.newUser = {};
    };
    $scope.editUser = function(user) {
    $scope.editedUser = user;
    };
    $scope.updateUser = function() {
    $scope.editedUser = {};
    };
    $scope.deleteUser = function(user) {
    $scope.users.splice($scope.users.indexOf(user), 1);
    };
    });
    
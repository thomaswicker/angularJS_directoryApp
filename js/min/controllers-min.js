var myNameSpace=angular.module("directoryApp",[]);myNameSpace.controller("MyController",["$scope","$http",function e(t,a){a.get("js/data.json").success(function(e){t.artists=e,t.artistOrder="name"})}]);
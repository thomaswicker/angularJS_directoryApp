var artistControllers=angular.module("artistControllers",[]);artistControllers.controller("ListController",["$scope","$http",function(t,r){r.get("js/data.json").success(function(r){t.artists=r,t.artistOrder="name"})}]);
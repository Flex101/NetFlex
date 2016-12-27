'use strict';

streamaApp.controller('myListCtrl', [
	'$scope', 'apiService', '$stateParams', '$rootScope',
	function ($scope, apiService, $stateParams, $rootScope) {

		$scope.loadingGroups = true;
		apiService.myList.listGroups().success(function (data) {
			$scope.groups = data;
			$scope.loadingGroups = false;
		});

		$scope.loadingMyList = true;
		apiService.myList.listMyList().success(function (data) {
			$scope.myList = data;
			$scope.loadingMyList = false;
		});
   
}]);

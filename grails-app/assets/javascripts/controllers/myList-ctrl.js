'use strict';

streamaApp.controller('myListCtrl', [
	'$scope', 'apiService', '$stateParams', '$rootScope',
	function ($scope, apiService, $stateParams, $rootScope) {

		$scope.loadingMyList = true;
		apiService.myList.listMyList().success(function (data) {
			$scope.myList = data;
			$scope.loadingMyList = false;
		});
   
}]);

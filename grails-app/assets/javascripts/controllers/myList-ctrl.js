'use strict';

streamaApp.controller('myListCtrl', 
	function ($scope, apiService, $state, $rootScope, localStorageService, modalService, $stateParams, $urlRouterProvider ) {

		$scope.loadingMyList = true;
		apiService.myList.listMyList().success(function (data) {
			$scope.myList = data;
			$scope.loadingMyList = false;
		});
   
});

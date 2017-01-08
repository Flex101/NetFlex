'use strict';

streamaApp.controller('myListCtrl', [
	'$scope', 'apiService', 'modalService', '$stateParams', '$rootScope',
	function ($scope, apiService, modalService, $stateParams, $rootScope) {

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
		
		$scope.openGroupModal = function () {
		modalService.groupModal(null, function (data) {
			$state.go('admin.group', {groupId: data.id});
		});
	};
   
}]);

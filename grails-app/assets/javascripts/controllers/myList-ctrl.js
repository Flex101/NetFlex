'use strict';

streamaApp.controller('myListCtrl', [
	'$scope', 'apiService', 'modalService', '$stateParams', '$rootScope',
	function ($scope, apiService, modalService, $stateParams, $rootScope) {

		$scope.loadingGroups = true;
		apiService.myList.listGroups().success(function (data) {
			$scope.myGroups = data;
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
		
		$scope.deleteGroup = function (group) {
			apiService.myList.deleteGroup(group).success(function (data) {
				location.reload();
				alertify.success("Group deleted.");
			});
		};
   
}]);

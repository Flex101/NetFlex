'use strict';

streamaApp.controller('modalGroupCtrl', [
	'$scope', '$uibModalInstance', 'apiService', 'group', '$state', 'uploadService',
	function ($scope, $uibModalInstance, apiService, group, $state, uploadService) {
	$scope.loading = false;

	$scope.group = group || {};

	$scope.addGroup = function (group) {
		apiService.myList.addGroup(group).success(function (data) {
			$uibModalInstance.close(data);
      alertify.success("Group added.");
		});
	};

		setTimeout(function () {
		$('.name-input').focus();
	}, 200);


	$scope.cancel = function () {
		$uibModalInstance.dismiss('cancel');
	};
}]);

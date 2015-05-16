myApp.controller("HeaderCtrl", ['$scope', '$location', 'UserAuthFactory',
    function ($scope, $location, UserAuthFactory) {
        $scope.isActive = function (route) {
            return route === $location.path();
        };
        $scope.logout = function () {
            UserAuthFactory.logout();
        };
    }
]);
/// snipp

myApp.controller("HomeCtrl", ['$scope',
    function ($scope) {
        $scope.name = "Home Controller";
    }
]);

myApp.controller("QcmsCtrl", ['$scope', '$http', function ($scope, $http) {
    $scope.name = "Qcms Controller";
    var loadQts = $http.get('http://localhost:3030/api/v1/qcms')
        .success(function (data, status, headers, config) {
            $scope.qts = data;
        })
        .error(function (data, status, headers, config) {
            console.log('Error - data : ', data);
            console.log('Error - status : ', status);
            console.log('Error - headers : ', headers);
            console.log('Error - config : ', config);
        });
}
]);

myApp.controller("Page2Ctrl", ['$scope',
    function ($scope) {
        $scope.name = "Page2 Controller";
        // below data will be used by checkmark filter to show a ✓ or ✘ next to it
        $scope.list = ['yes', 'no', true, false, 1, 0];
    }
]);

myApp.controller("Page3Ctrl", ['$scope', 'dataFactory',
    function ($scope, dataFactory) {
        $scope.qcms = [];
        // Access the factory and get the latest products list
        dataFactory.getQcms().then(function (data) {
            $scope.qcms = data.data;
        });
    }
]);

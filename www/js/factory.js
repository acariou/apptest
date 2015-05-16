myApp.factory('dataFactory', function($http) {
    /** https://docs.angularjs.org/guide/providers **/
    var urlBase = 'http://localhost:3030/api/v1/qcms';
    var _prodFactory = {};
    _prodFactory.getQcms = function() {
        return $http.get(urlBase);
    };
    return _prodFactory;
});
